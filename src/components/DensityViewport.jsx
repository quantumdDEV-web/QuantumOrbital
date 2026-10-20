import { useEffect, useRef } from 'react';
import {
  AdditiveBlending, BackSide, BoxGeometry, BufferAttribute, BufferGeometry, ClampToEdgeWrapping,
  Data3DTexture, DataTexture, HalfFloatType, LinearFilter, Mesh, NearestFilter, NoToneMapping,
  PerspectiveCamera, Points, Quaternion, RGBAFormat, Scene, ShaderMaterial, SRGBColorSpace,
  UnsignedByteType, Vector2, Vector3, WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ROCKET_COLORS } from '../visualization/rocket.js';
import {
  POINTS_FRAGMENT_SHADER, POINTS_VERTEX_SHADER, VOLUME_FRAGMENT_SHADER, VOLUME_VERTEX_SHADER,
} from '../visualization/shaders.js';

export const CAMERA_VIEWS = {
  iso: [2.7, -3.3, 2.6],
  xy: [0, 0, 4.2],
  xz: [0, -4.2, 0],
  yz: [4.2, 0, 0],
};

const FOV = 36;
const TRANSITION_MS = 450;
const BEAT_SECONDS = 6;
// Full quality when still; while the camera moves the view is rendered at a lower
// resolution with fewer ray steps, then redrawn sharp as soon as motion settles.
const FULL_STEPS = 160;
const MOVING_STEPS = 48;
const MOVING_RESOLUTION = 0.45;
const RENDER_INDEX = { volume: 0, surface: 1, slice: 2 };
const AXIS_INDEX = { x: 0, y: 1, z: 2 };
const ORIGIN = new Vector3();

const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2);

/** RGBA16F: (Re ψ_A, Im ψ_A, Re ψ_B, Im ψ_B); R16 does not exist in core WebGL2. */
function psiTexture(volume) {
  const texture = new Data3DTexture(volume.psi, volume.size, volume.size, volume.size);
  texture.format = RGBAFormat;
  texture.type = HalfFloatType;
  texture.internalFormat = 'RGBA16F';
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.wrapR = ClampToEdgeWrapping;
  texture.unpackAlignment = 1;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

function rocketTexture() {
  const bytes = new Uint8Array(ROCKET_COLORS.length * 4);
  ROCKET_COLORS.forEach((hex, index) => {
    const offset = index * 4;
    bytes[offset] = Number.parseInt(hex.slice(1, 3), 16);
    bytes[offset + 1] = Number.parseInt(hex.slice(3, 5), 16);
    bytes[offset + 2] = Number.parseInt(hex.slice(5, 7), 16);
    bytes[offset + 3] = 255;
  });
  const texture = new DataTexture(bytes, ROCKET_COLORS.length, 1, RGBAFormat, UnsignedByteType);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

function createVolumeMaterial(rocket) {
  return new ShaderMaterial({
    uniforms: {
      uPsi: { value: null },
      uRocket: { value: rocket },
      uGamma: { value: 1 },
      uPhase: { value: new Vector2(1, 0) },
      uRender: { value: 0 },
      uColorMode: { value: 0 },
      uIsoLevel: { value: 1 },
      uSliceAxis: { value: 2 },
      uSlicePos: { value: 0 },
      uSteps: { value: FULL_STEPS },
    },
    vertexShader: VOLUME_VERTEX_SHADER,
    fragmentShader: VOLUME_FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    // Back faces only: they cover the whole screen footprint from outside the
    // box and from inside it, so the camera can fly into the cloud.
    side: BackSide,
    toneMapped: false,
  });
}

function createPointsMaterial(rocket) {
  return new ShaderMaterial({
    uniforms: {
      uRocket: { value: rocket },
      uGamma: { value: 1 },
      uColorMode: { value: 0 },
      uSize: { value: 0.012 },
      uScale: { value: 1000 },
      uAlpha: { value: 0.55 },
    },
    vertexShader: POINTS_VERTEX_SHADER,
    fragmentShader: POINTS_FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  });
}

function pointsGeometry(volume) {
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(volume.points, 3));
  geometry.setAttribute('aValue', new BufferAttribute(volume.pointValues, 2));
  return geometry;
}

function downloadCanvas(canvas, name) {
  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  }, 'image/png');
}

/**
 * WebGL viewport. Rendering is on demand: a frame loop runs only while the
 * camera is moving, a preset transition is playing, auto-rotate is on, or a
 * two-energy superposition is animating.
 */
export default function DensityViewport({
  volume, display, view, resetKey, autoRotate, playing, speed,
  snapshotKey, snapshotName, initialCamera, onError, onCameraEnd,
}) {
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  const worldRef = useRef(null);
  const callbacksRef = useRef({ onError, onCameraEnd });
  const appliedViewRef = useRef(`${view}:${resetKey}`);
  const snapshotNameRef = useRef(snapshotName);
  callbacksRef.current = { onError, onCameraEnd };
  snapshotNameRef.current = snapshotName;

  useEffect(() => {
    const canvas = canvasRef.current;
    const viewport = viewportRef.current;
    if (!canvas || !viewport) return undefined;
    let renderer, camera, scene, volumeGeometry, volumeMaterial, pointsMaterial, controls, animationFrame;
    let live = true;
    const flags = {
      autoRotate: false, playing: false, speed: 1, hasSecond: false, phase: 0, transition: null,
      lastTime: 0, dragging: false, low: false, height: 1,
    };
    const basePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const applyQuality = low => {
      flags.low = low;
      renderer.setPixelRatio(low ? Math.max(0.5, basePixelRatio * MOVING_RESOLUTION) : basePixelRatio);
      volumeMaterial.uniforms.uSteps.value = low ? MOVING_STEPS : FULL_STEPS;
      pointsMaterial.uniforms.uScale.value = flags.height * renderer.getPixelRatio()
        / (2 * Math.tan((FOV * Math.PI) / 360));
    };
    try {
      renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
      renderer.outputColorSpace = SRGBColorSpace;
      renderer.setPixelRatio(basePixelRatio);
      renderer.setClearColor('#000000');
      renderer.toneMapping = NoToneMapping;

      camera = new PerspectiveCamera(FOV, 1, 0.05, 100);
      camera.up.set(0, 0, 1);
      camera.position.set(...(initialCamera ?? CAMERA_VIEWS.iso));
      camera.lookAt(0, 0, 0);
      scene = new Scene();

      const rocket = rocketTexture();
      volumeGeometry = new BoxGeometry(2, 2, 2);
      volumeMaterial = createVolumeMaterial(rocket);
      const volumeMesh = new Mesh(volumeGeometry, volumeMaterial);
      scene.add(volumeMesh);
      pointsMaterial = createPointsMaterial(rocket);
      const pointCloud = new Points(new BufferGeometry(), pointsMaterial);
      pointCloud.frustumCulled = false;
      pointCloud.visible = false;
      scene.add(pointCloud);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.14;
      controls.screenSpacePanning = true;
      // Close enough to fly inside the cloud; the box half-diagonal is about 1.73.
      controls.minDistance = 0.15;
      controls.maxDistance = 12;
      controls.autoRotateSpeed = 1.6;
      controls.target.set(0, 0, 0);

      const tick = now => {
        animationFrame = 0;
        if (!live) return;
        const delta = flags.lastTime ? Math.min((now - flags.lastTime) / 1000, 0.1) : 0;
        flags.lastTime = now;
        let busy = false;

        const transition = flags.transition;
        if (transition) {
          const progress = Math.min(1, (now - transition.start) / TRANSITION_MS);
          const eased = easeInOutCubic(progress);
          const step = new Quaternion().slerp(transition.rotation, eased);
          camera.position.copy(transition.fromDirection).applyQuaternion(step)
            .multiplyScalar(transition.fromLength + (transition.toLength - transition.fromLength) * eased);
          controls.target.lerpVectors(transition.fromTarget, ORIGIN, eased);
          if (progress >= 1) {
            flags.transition = null;
            callbacksRef.current.onCameraEnd?.(camera.position.toArray());
          } else {
            busy = true;
          }
        }

        if (flags.playing && flags.hasSecond) {
          flags.phase = (flags.phase + delta * flags.speed * 2 * Math.PI / BEAT_SECONDS) % (2 * Math.PI);
          busy = true;
        }
        volumeMaterial.uniforms.uPhase.value.set(Math.cos(flags.phase), Math.sin(flags.phase));

        const moving = controls.update(flags.autoRotate ? delta : undefined);
        const wantLow = moving || busy || flags.autoRotate || flags.dragging;
        if (wantLow !== flags.low) applyQuality(wantLow);
        renderer.render(scene, camera);
        if (moving || busy || flags.autoRotate) invalidate();
        else flags.lastTime = 0;
      };
      const invalidate = () => {
        if (!live || animationFrame) return;
        animationFrame = window.requestAnimationFrame(tick);
      };

      controls.addEventListener('change', invalidate);
      controls.addEventListener('start', () => {
        flags.transition = null;
        flags.dragging = true;
      });
      controls.addEventListener('end', () => {
        flags.dragging = false;
        callbacksRef.current.onCameraEnd?.(camera.position.toArray());
        invalidate();
      });

      const observer = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        if (width <= 0 || height <= 0) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        flags.height = height;
        pointsMaterial.uniforms.uScale.value = height * renderer.getPixelRatio()
          / (2 * Math.tan((FOV * Math.PI) / 360));
        invalidate();
      });
      observer.observe(viewport);

      worldRef.current = {
        camera, controls, renderer, scene, canvas, observer, invalidate, flags,
        volumeGeometry, volumeMaterial, pointsMaterial, volumeMesh, pointCloud, rocket,
      };
      invalidate();
    } catch (error) {
      callbacksRef.current.onError(error instanceof Error ? error.message : String(error));
    }

    return () => {
      live = false;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      const world = worldRef.current;
      if (world) {
        world.observer.disconnect();
        world.controls.removeEventListener('change', world.invalidate);
        world.controls.dispose();
        world.volumeMaterial.uniforms.uPsi.value?.dispose();
        world.pointCloud.geometry.dispose();
        world.volumeGeometry.dispose();
        world.rocket.dispose();
        world.volumeMaterial.dispose();
        world.pointsMaterial.dispose();
        world.renderer.dispose();
      }
      worldRef.current = null;
    };
    // The world is created once per mount; later changes arrive through the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const world = worldRef.current;
    if (!world || !volume) return undefined;
    const texture = psiTexture(volume);
    const previousTexture = world.volumeMaterial.uniforms.uPsi.value;
    world.volumeMaterial.uniforms.uPsi.value = texture;
    previousTexture?.dispose();
    const previousGeometry = world.pointCloud.geometry;
    world.pointCloud.geometry = pointsGeometry(volume);
    previousGeometry.dispose();
    world.flags.hasSecond = volume.hasSecond;
    if (!volume.hasSecond) world.flags.phase = 0;
    world.invalidate();
    return () => {
      if (world.volumeMaterial.uniforms.uPsi.value === texture) {
        world.volumeMaterial.uniforms.uPsi.value = null;
        texture.dispose();
      }
    };
  }, [volume]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    const { render, color, isoPercent, sliceAxis, slicePos, exposure } = display;
    const gamma = 1 / (1 + exposure);
    const showPoints = render === 'points';
    world.volumeMesh.visible = !showPoints;
    world.pointCloud.visible = showPoints;
    const uniforms = world.volumeMaterial.uniforms;
    uniforms.uRender.value = RENDER_INDEX[render] ?? 0;
    uniforms.uColorMode.value = color === 'phase' ? 1 : 0;
    uniforms.uGamma.value = gamma;
    uniforms.uSliceAxis.value = AXIS_INDEX[sliceAxis] ?? 2;
    uniforms.uSlicePos.value = slicePos;
    uniforms.uIsoLevel.value = volume ? volume.levels[isoPercent] : 1;
    world.pointsMaterial.uniforms.uColorMode.value = color === 'phase' ? 1 : 0;
    world.pointsMaterial.uniforms.uGamma.value = gamma;
    world.invalidate();
  }, [display, volume]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    world.flags.autoRotate = autoRotate;
    world.flags.playing = playing;
    world.flags.speed = speed;
    world.controls.autoRotate = autoRotate;
    world.invalidate();
  }, [autoRotate, playing, speed, volume]);

  useEffect(() => {
    const world = worldRef.current;
    const key = `${view}:${resetKey}`;
    if (!world || appliedViewRef.current === key) return;
    appliedViewRef.current = key;
    const target = CAMERA_VIEWS[view];
    if (!target) return;
    const from = world.camera.position.clone();
    const to = new Vector3(...target);
    const fromDirection = from.clone().normalize();
    const toDirection = to.clone().normalize();
    world.flags.transition = {
      start: performance.now(),
      fromDirection,
      fromLength: from.length(),
      toLength: to.length(),
      rotation: new Quaternion().setFromUnitVectors(fromDirection, toDirection),
      fromTarget: world.controls.target.clone(),
    };
    world.invalidate();
  }, [view, resetKey]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world || !snapshotKey) return;
    world.renderer.render(world.scene, world.camera);
    downloadCanvas(world.canvas, snapshotNameRef.current);
  }, [snapshotKey]);

  return <div className="volume-canvas" ref={viewportRef}><canvas ref={canvasRef} aria-label="Interactive 3D probability-density volume"/></div>;
}
