import { useEffect, useRef, useState } from 'react';
import {
  BoxGeometry, ClampToEdgeWrapping, Data3DTexture, DataTexture, FrontSide,
  LinearFilter, NearestFilter, RedFormat, RGBAFormat, ShaderMaterial,
  UnsignedByteType, UnsignedShortType, Mesh, NoToneMapping, PerspectiveCamera,
  Scene, SRGBColorSpace, WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ROCKET_COLORS } from '../visualization/rocket.js';
import { ELEMENT_DATA } from '../physics/elements.js';

const VERTEX_SHADER = /* glsl */`
  varying vec3 vLocalPosition;
  void main() {
    vLocalPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */`
  precision highp float;
  precision highp sampler3D;
  uniform sampler3D uDensity;
  uniform sampler2D uRocket;
  uniform float uGamma;
  varying vec3 vLocalPosition;

  vec3 srgbToLinear(vec3 color) {
    vec3 low = color / 12.92;
    vec3 high = pow((color + 0.055) / 1.055, vec3(2.4));
    return mix(high, low, lessThanEqual(color, vec3(0.04045)));
  }

  vec3 rocketColor(float value) {
    float index = floor(clamp(value, 0.0, 1.0) * 255.0);
    vec3 srgb = texture2D(uRocket, vec2((index + 0.5) / 256.0, 0.5)).rgb;
    return srgbToLinear(srgb);
  }

  void main() {
    vec3 rayOrigin = cameraPosition;
    vec3 rayDirection = normalize(vLocalPosition - rayOrigin);
    vec3 inverseDirection = 1.0 / rayDirection;
    vec3 nearPlanes = (-vec3(1.0) - rayOrigin) * inverseDirection;
    vec3 farPlanes = ( vec3(1.0) - rayOrigin) * inverseDirection;
    vec3 nearValues = min(nearPlanes, farPlanes);
    vec3 farValues = max(nearPlanes, farPlanes);
    float rayStart = max(max(nearValues.x, nearValues.y), max(nearValues.z, 0.0));
    float rayEnd = min(min(farValues.x, farValues.y), farValues.z);
    if (rayEnd <= rayStart) discard;

    const int STEPS = 128;
    float stepLength = (rayEnd - rayStart) / float(STEPS);
    vec3 accumulatedColor = vec3(0.0);
    float accumulatedAlpha = 0.0;
    for (int step = 0; step < STEPS; step++) {
      float distanceAlongRay = rayStart + (float(step) + 0.5) * stepLength;
      if (distanceAlongRay >= rayEnd || accumulatedAlpha > 0.985) break;
      vec3 point = rayOrigin + rayDirection * distanceAlongRay;
      vec3 coordinate = point * 0.5 + 0.5;
      float density = texture(uDensity, coordinate).r;
      float displayedDensity = pow(clamp(density, 0.0, 1.0), uGamma);
      if (displayedDensity <= 0.0001) continue;
      float sampleAlpha = 1.0 - exp(-displayedDensity * 18.0 * stepLength);
      vec3 sampleColor = rocketColor(displayedDensity);
      accumulatedColor += (1.0 - accumulatedAlpha) * sampleColor * sampleAlpha;
      accumulatedAlpha += (1.0 - accumulatedAlpha) * sampleAlpha;
    }

    if (accumulatedAlpha <= 0.001) discard;
    gl_FragColor = vec4(accumulatedColor / accumulatedAlpha, accumulatedAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const CAMERA_VIEWS = {
  iso: [2.7, -3.3, 2.6],
  xy: [0, 0, 4.2],
  xz: [0, -4.2, 0],
  yz: [4.2, 0, 0],
};

function densityTexture(volume) {
  const texture = new Data3DTexture(volume.density, volume.size, volume.size, volume.size);
  texture.format = RedFormat;
  texture.type = UnsignedShortType;
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

function createDensityMaterial(rocket) {
  return new ShaderMaterial({
    uniforms: {
      uDensity: { value: null },
      uRocket: { value: rocket },
      uGamma: { value: 1 },
    },
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    side: FrontSide,
    toneMapped: false,
  });
}

function DensityViewport({ volume, exposure, view, resetKey, onError }) {
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  const worldRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const viewport = viewportRef.current;
    if (!canvas || !viewport) return undefined;
    let renderer, camera, scene, geometry, material, controls, animationFrame;
    let live = true;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.outputColorSpace = SRGBColorSpace;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor('#03051a');
      renderer.toneMapping = NoToneMapping;

      camera = new PerspectiveCamera(36, 1, 0.05, 100);
      camera.up.set(0, 0, 1);
      camera.position.set(...CAMERA_VIEWS.iso);
      camera.lookAt(0, 0, 0);
      scene = new Scene();
      geometry = new BoxGeometry(2, 2, 2);
      material = createDensityMaterial(rocketTexture());
      scene.add(new Mesh(geometry, material));

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enabled = true;
      controls.enableRotate = true;
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.enableDamping = true;
      controls.dampingFactor = 0.09;
      controls.screenSpacePanning = true;
      controls.minDistance = 2.2;
      controls.maxDistance = 12;
      controls.target.set(0, 0, 0);

      const invalidate = () => {
        if (!live || animationFrame) return;
        animationFrame = window.requestAnimationFrame(() => {
          animationFrame = 0;
          // OrbitControls applies damping over successive update calls. Keep
          // rendering until that motion settles so the camera never appears
          // to stop after the first pointer event.
          const moving = controls.update();
          renderer.render(scene, camera);
          if (moving) invalidate();
        });
      };
      controls.addEventListener('change', invalidate);
      const observer = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        if (width <= 0 || height <= 0) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        invalidate();
      });
      observer.observe(viewport);
      worldRef.current = { camera, controls, geometry, material, renderer, observer, invalidate };
      invalidate();
    } catch (error) {
      onError(error instanceof Error ? error.message : String(error));
    }

    return () => {
      live = false;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      worldRef.current?.observer.disconnect();
      worldRef.current?.controls.removeEventListener('change', worldRef.current.invalidate);
      worldRef.current?.controls.dispose();
      worldRef.current?.material.uniforms.uDensity.value?.dispose();
      worldRef.current?.geometry.dispose();
      worldRef.current?.material.uniforms.uRocket.value.dispose();
      worldRef.current?.material.dispose();
      worldRef.current?.renderer.dispose();
      worldRef.current = null;
    };
  }, [onError]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world || !volume) return undefined;
    const texture = densityTexture(volume);
    const previous = world.material.uniforms.uDensity.value;
    world.material.uniforms.uDensity.value = texture;
    previous?.dispose();
    world.invalidate();
    return () => {
      if (world.material.uniforms.uDensity.value === texture) {
        world.material.uniforms.uDensity.value = null;
        texture.dispose();
      }
    };
  }, [volume]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    world.material.uniforms.uGamma.value = 1 / (1 + exposure);
    world.invalidate();
  }, [exposure]);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    world.camera.position.set(...CAMERA_VIEWS[view]);
    world.camera.up.set(0, 0, 1);
    world.camera.lookAt(0, 0, 0);
    world.camera.updateProjectionMatrix();
    world.controls.target.set(0, 0, 0);
    world.controls.update();
    world.invalidate();
  }, [view, resetKey]);

  return <div className="volume-canvas" ref={viewportRef}><canvas ref={canvasRef} aria-label="Interactive 3D probability-density volume"/></div>;
}

function makeColorMapLegend() {
  return [0, 42, 85, 128, 170, 213, 255].map(index => ROCKET_COLORS[index]);
}

export default function OrbitalViewer({ n, l, m, nuclearCharge, onQuantumNumbersChange, exposure, onExposureChange }) {
  const [volume, setVolume] = useState(null);
  const [error, setError] = useState('');
  const [rendererError, setRendererError] = useState('');
  const [view, setView] = useState('iso');
  const [resetKey, setResetKey] = useState(0);
  const [legend] = useState(makeColorMapLegend);
  const extent = 2 * (3 * n * n - l * (l + 1)) / (2 * nuclearCharge);

  useEffect(() => {
    setVolume(null);
    setError('');
    const worker = new Worker(new URL('../visualization/orbitalVolume.worker.js', import.meta.url), { type: 'module' });
    worker.onmessage = event => {
      if (event.data.error) {
        setError(event.data.error);
        return;
      }
      setVolume(event.data);
    };
    worker.onerror = event => setError(event.message || 'Could not calculate the density volume.');
    worker.postMessage({ n, l, m, nuclearCharge, size: n <= 3 ? 72 : n <= 5 ? 88 : 96, extent });
    return () => worker.terminate();
  }, [n, l, m, nuclearCharge, extent]);

  const lOptions = Array.from({ length: n }, (_, value) => value);
  const mOptions = Array.from({ length: l * 2 + 1 }, (_, index) => index - l);
  const gamma = 1 / (1 + exposure);

  return <section className="orbital-workspace" aria-label="Interactive hydrogenic probability density">
    <div className="orbital-stage">
      <div className="stage-toolbar">
        <div className="stage-readout"><span className="stage-status"/><span>3D PROBABILITY DENSITY</span><b>{rendererError ? 'RENDERER ERROR' : volume ? 'FIELD READY' : error ? 'FIELD ERROR' : 'SAMPLING FIELD'}</b></div>
        <div className="view-controls" aria-label="Standard camera views">
          {['iso', 'xy', 'xz', 'yz'].map(preset => <button key={preset} type="button" className={view === preset ? 'selected' : ''} onClick={() => setView(preset)} aria-pressed={view === preset} title={`${preset.toUpperCase()} camera view`}>{preset.toUpperCase()}</button>)}
          <button type="button" onClick={() => { setView('iso'); setResetKey(value => value + 1); }} title="Reset camera to the initial view">RESET</button>
        </div>
      </div>
      <div className="volume-stage">
        <DensityViewport volume={volume} exposure={exposure} view={view} resetKey={resetKey} onError={setRendererError}/>
        {(!volume || error || rendererError) && <div className={`volume-message ${error || rendererError ? 'has-error' : ''}`} role={error || rendererError ? 'alert' : 'status'}>{rendererError || error || 'Calculating normalized wavefunction volume…'}</div>}
        <div className="volume-domain">x, y, z ∈ [−{extent.toFixed(2)}, {extent.toFixed(2)}] a₀</div>
        <div className="volume-help">DRAG ROTATE <span>·</span> RIGHT DRAG PAN <span>·</span> SCROLL ZOOM</div>
      </div>
      <div className="density-legend" aria-label="Seaborn Rocket density colour scale">
        <span className="legend-label">LOWER DENSITY</span>
        <div className="rocket-ramp">{legend.map((color, index) => <i key={`${color}-${index}`} style={{ backgroundColor: color }}/>)}</div>
        <span className="legend-label">HIGHER DENSITY</span>
        <span className="legend-name">ROCKET · |ψ|²</span>
      </div>
    </div>

    <aside className="orbital-controls">
      <div className="controls-header"><div className="eyebrow">HYDROGENIC EIGENSTATE</div><h1>Orbital field</h1></div>
      <label className="field-control"><span>Nuclear charge, Z</span><select value={nuclearCharge} onChange={event => onQuantumNumbersChange({ nuclearCharge: Number(event.target.value) })}>
        {ELEMENT_DATA.map(({ z, symbol }) => {
          const charge = z === 1 ? '' : `${z - 1}+`;
          return <option key={z} value={z}>{symbol}{charge ? ` ${charge}` : ''} · Z = {z}</option>;
        })}
      </select></label>

      <label className="field-control"><span>Principal quantum number, n</span><select value={n} onChange={event => onQuantumNumbersChange({ n: Number(event.target.value) })}>{Array.from({ length: 8 }, (_, index) => index + 1).map(value => <option key={value} value={value}>{value}</option>)}</select></label>
      <label className="field-control"><span>Angular momentum, ℓ</span><select value={l} onChange={event => onQuantumNumbersChange({ l: Number(event.target.value) })}>{lOptions.map(value => <option key={value} value={value}>{value} · {['s','p','d','f','g','h','i','k'][value]}</option>)}</select></label>
      <label className="field-control"><span>Magnetic quantum number, m</span><select value={m} onChange={event => onQuantumNumbersChange({ m: Number(event.target.value) })}>{mOptions.map(value => <option key={value} value={value}>{value > 0 ? `+${value}` : value}</option>)}</select></label>

      <div className="control-rule"/>
      <label className="range-label" htmlFor="exposure"><span>Exposure</span><strong>{exposure.toFixed(1)}×</strong></label>
      <input id="exposure" type="range" min="0" max="2" step="0.1" value={exposure} onChange={event => onExposureChange(Number(event.target.value))}/>
      <div className="range-ends"><span>0 · linear</span><span>2</span></div>

      <div className="state-equation">
        <div className="eyebrow">ANALYTICAL STATE</div>
        <div className="equation">ψ<sub>nℓm</sub> = R<sub>nℓ</sub> Y<sub>ℓ</sub><sup>m</sup></div>
        <div className="equation">E<sub>n</sub> = −13.6057 Z²/n² eV</div>
        <div className="state-meta">Z {nuclearCharge} · {n}{['s','p','d','f','g','h','i','k'][l]} · m {m > 0 ? `+${m}` : m}</div>
      </div>

      <div className="normalization-note">
        <span className="eyebrow">DISPLAY NORMALIZATION</span>
        <span>v<sub>min</sub> = 0 · v<sub>max</sub> = q<sub>99.9%</sub></span>
        <span>v<sub>max</sub> = {volume ? volume.vmax.toExponential(2) : '—'} a₀⁻³ · grid probability {volume ? `${(volume.capturedProbability * 100).toFixed(2)}%` : '—'}</span>
        <span>PowerNorm γ = {gamma.toFixed(3)} · grid {volume?.size || (n <= 3 ? 72 : n <= 5 ? 88 : 96)}³</span>
      </div>
      <p className="model-note">Exact non-relativistic, one-electron Coulomb eigenstate with an infinite-mass nucleus. For Z &gt; 1 this represents a hydrogen-like ion, not a neutral multi-electron atom. The complex-state densities for +m and −m are identical.</p>
    </aside>
  </section>;
}
