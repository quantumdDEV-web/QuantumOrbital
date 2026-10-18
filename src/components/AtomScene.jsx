import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AxesHelper, BufferAttribute, Color, DoubleSide, OrthographicCamera, PerspectiveCamera, PlaneGeometry } from 'three';
import { OrbitControls as ThreeOrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Camera, RotateCcw } from 'lucide-react';
import { hydrogenicProbabilityDensity } from '../physics/hydrogen/orbitalMath.js';
import OrbitalCloud from './OrbitalCloud.jsx';
import Nucleus from './Nucleus.jsx';

function fittedDistance(camera, extent, aspect) {
  if (!camera.isPerspectiveCamera) return extent * 2.4;
  const verticalFov = camera.fov * Math.PI / 180;
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
  return extent / Math.sin(Math.min(verticalFov, horizontalFov) / 2) * 0.92;
}

function CameraControls({ n, view, orthographic }) {
  const { camera, gl, size, set } = useThree();
  const controls = useMemo(() => new ThreeOrbitControls(camera, gl.domElement), [camera, gl]);
  const transition = useRef(null);

  useEffect(() => () => controls.dispose(), [controls]);
  useEffect(() => {
    if (camera.isOrthographicCamera === orthographic) return;
    const projection = orthographic
      ? new OrthographicCamera(-size.width / 2, size.width / 2, size.height / 2, -size.height / 2, camera.near, camera.far)
      : new PerspectiveCamera(42, size.width / size.height, camera.near, camera.far);
    projection.position.copy(camera.position);
    projection.quaternion.copy(camera.quaternion);
    projection.up.copy(camera.up);
    if (orthographic) projection.zoom = Math.min(size.width, size.height) / (12 * n * n * 2.2);
    projection.updateProjectionMatrix();
    set({ camera: projection });
  }, [camera, orthographic, n, set, size.height, size.width]);
  useEffect(() => {
    if (camera.isOrthographicCamera) {
      camera.left = -size.width / 2; camera.right = size.width / 2;
      camera.top = size.height / 2; camera.bottom = -size.height / 2;
    } else camera.aspect = size.width / size.height;
    const extent = 12 * n * n;
    const distance = fittedDistance(camera, extent, size.width / size.height);
    camera.position.set(distance * 0.62, distance * 0.45, distance * 0.70);
    if (camera.isOrthographicCamera) camera.zoom = Math.min(size.width, size.height) / (extent * 2.2);
    camera.near = Math.max(0.01, distance / 1000);
    camera.far = distance + extent * 6;
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = Math.max(0.15, extent * 0.08);
    controls.maxDistance = extent * 10;
    controls.minZoom = Math.min(size.width, size.height) / (extent * 6);
    controls.maxZoom = Math.min(size.width, size.height) / (extent * 0.55);
    controls.update();
  }, [camera, controls, n, size.height, size.width]);

  useEffect(() => {
    if (!view.axis) return;
    const distance = camera.position.distanceTo(controls.target);
    const destination = camera.position.clone();
    const up = camera.up.clone();
    if (view.axis === 'x') destination.set(distance, 0, 0);
    else if (view.axis === 'y') {
      destination.set(0, distance, 0);
      up.set(0, 0, 1);
    } else if (view.axis === 'z') destination.set(0, 0, distance);
    else {
      const extent = 12 * n * n;
      const distance = fittedDistance(camera, extent, size.width / size.height);
      destination.set(distance * 0.62, distance * 0.45, distance * 0.70);
    }
    if (view.axis !== 'y') up.set(0, 1, 0);
    transition.current = {
      elapsed: 0,
      fromZoom: camera.zoom,
      toZoom: orthographic && view.axis === 'reset' ? Math.min(size.width, size.height) / (12 * n * n * 2.2) : camera.zoom,
      fromPosition: camera.position.clone(),
      toPosition: destination,
      fromUp: camera.up.clone(),
      toUp: up,
      fromTarget: controls.target.clone(),
      toTarget: controls.target.clone().set(0, 0, 0),
    };
  }, [camera, controls, n, view.axis, view.request]);

  useFrame((_, delta) => {
    const current = transition.current;
    if (current) {
      current.elapsed += delta;
      const progress = Math.min(1, current.elapsed / 0.65);
      const eased = 1 - (1 - progress) ** 3;
      camera.position.lerpVectors(current.fromPosition, current.toPosition, eased);
      camera.up.lerpVectors(current.fromUp, current.toUp, eased);
      controls.target.lerpVectors(current.fromTarget, current.toTarget, eased);
      camera.zoom = current.fromZoom + (current.toZoom - current.fromZoom) * eased;
      camera.updateProjectionMatrix();
      if (progress >= 1) transition.current = null;
    }
    controls.update();
  });

  return <primitive object={controls}/>;
}

function ReferenceFrame() {
  const { camera, size } = useThree();
  const axes = useMemo(() => new AxesHelper(0.72), []);

  useEffect(() => {
    // Keep a small world-oriented XYZ frame in the camera's lower-left corner.
    axes.material.depthTest = false;
    axes.renderOrder = 10;
    camera.add(axes);
    return () => {
      camera.remove(axes);
      axes.geometry.dispose();
      axes.material.dispose();
    };
  }, [axes, camera]);

  useFrame(() => {
    const depth = 5;
    const viewHeight = camera.isPerspectiveCamera
      ? 2 * depth * Math.tan((camera.fov * Math.PI) / 360)
      : size.height / camera.zoom;
    axes.position.set(-viewHeight * size.width / size.height / 2 + 0.35, -viewHeight / 2 + 0.35, -depth);
    axes.quaternion.copy(camera.quaternion).invert();
  });

  return null;
}

const slicePalette = ['#17231f', '#314b42', '#567767', '#91aa89', '#c8c49c', '#eee2c5'].map(color => new Color(color));
const sliceColor = new Color();
function SliceSection({ n, l, m, offset }) {
  const geometry = useMemo(() => {
    const divisions = 72, extent = 12 * n * n;
    const result = new PlaneGeometry(extent * 2, extent * 2, divisions, divisions);
    const positions = result.getAttribute('position'), density = new Float32Array(positions.count);
    let maximum = 0;
    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index), y = positions.getY(index);
      density[index] = hydrogenicProbabilityDensity(n, l, m, x, y, offset);
      maximum = Math.max(maximum, density[index]);
    }
    const colors = new Float32Array(positions.count * 4);
    for (let index = 0; index < positions.count; index += 1) {
      const level = maximum ? density[index] / maximum : 0;
      const scaled = Math.sqrt(level) * (slicePalette.length - 1);
      const segment = Math.min(slicePalette.length - 2, Math.floor(scaled));
      const color = sliceColor.copy(slicePalette[segment]).lerp(slicePalette[segment + 1], scaled - segment);
      colors.set([color.r, color.g, color.b, Math.pow(level, 0.35)], index * 4);
    }
    result.setAttribute('color', new BufferAttribute(colors, 4));
    return result;
  }, [n, l, m, offset]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  return <mesh geometry={geometry} position={[0, 0, offset]} renderOrder={2}><meshBasicMaterial vertexColors transparent opacity={0.78} side={DoubleSide} depthWrite={false}/></mesh>;
}

export default function AtomScene({ pointCount, n, l, m, element, slice = false, sliceOffset = 0, colorMode = 'density', onSliceToggle = () => {}, onColorModeChange = () => {} }) {
  const [orthographic, setOrthographic] = useState(false);
  const [view, setView] = useState({ axis: '', request: 0 });
  const [canvasElement, setCanvasElement] = useState(null);
  const orbitalLabel = `${n}${['s', 'p', 'd', 'f'][l] || ''}${l > 0 ? m : ''}`;
  const hasEnergy = Number.isFinite(element?.ionizationEnergy);
  const energyLabel = hasEnergy
    ? `${element.ionizationEnergyEstimated ? '~' : ''}${element.ionizationEnergy.toFixed(2)} eV`
    : 'No evaluated value';
  const savePng = () => {
    if (!canvasElement) return;
    const link = document.createElement('a');
    link.download = `QuantumOrbital-${element?.symbol || 'atom'}-${orbitalLabel}.png`;
    link.href = canvasElement.toDataURL('image/png');
    link.click();
  };

  return <div className="scene-canvas">
    <Canvas camera={{ position: [14, 10.5, 16], fov: 42 }} dpr={[1, 1.5]} gl={{ preserveDrawingBuffer: true }} onCreated={({ gl }) => setCanvasElement(gl.domElement)}>
      <color attach="background" args={['#05080d']}/>
      <ambientLight intensity={0.8}/>
      <directionalLight position={[4, 6, 5]} intensity={1.4}/>
      <Suspense fallback={null}>
        <OrbitalCloud pointCount={pointCount} n={n} l={l} m={m} colorMode={colorMode}/>
        {slice && <SliceSection n={n} l={l} m={m} offset={sliceOffset}/>}
        <Nucleus/>
        <ReferenceFrame/>
      </Suspense>
      <CameraControls n={n} view={view} orthographic={orthographic}/>
    </Canvas>
    <div className="scene-visual-legend">{colorMode === 'phase' ? <><span className="legend-dot positive-phase-dot"/>+ phase <span className="legend-dot negative-phase-dot"/>− phase</> : <><span className="density-key"/>|ψ|² · a₀⁻³</>}{slice && <> <span className="legend-separator">/</span> XY slice z = {sliceOffset.toFixed(1)} a₀ · relative scale</>}</div>
    <div className="scene-actions" role="group" aria-label="3D visualization controls">
      {['x', 'y', 'z'].map(axis => <button key={axis} type="button" className={view.axis === axis ? 'active' : ''} aria-pressed={view.axis === axis} onClick={() => setView(current => ({ axis, request: current.request + 1 }))} aria-label={`View along ${axis.toUpperCase()} axis`}>{axis.toUpperCase()}</button>)}
      <button type="button" className={orthographic ? 'active' : ''} aria-pressed={orthographic} onClick={() => setOrthographic(value => !value)}>{orthographic ? 'Ortho' : 'Persp'}</button>
      <button type="button" className={slice ? 'active' : ''} aria-pressed={slice} onClick={onSliceToggle}>Slice</button>
      <button type="button" className={colorMode === 'phase' ? 'active' : ''} aria-pressed={colorMode === 'phase'} onClick={onColorModeChange}>{colorMode === 'phase' ? 'Phase' : 'Density'}</button>
      <button type="button" onClick={() => setView(current => ({ axis: 'reset', request: current.request + 1 }))} aria-label="Reset camera view"><RotateCcw size={13}/></button>
      <button type="button" onClick={savePng} disabled={!canvasElement}><Camera size={13}/>PNG</button>
    </div>
    <div className="scene-caption">{element?.symbol || 'Atom'} first ionization energy: {energyLabel} <span className="caption-separator">·</span> orbital {orbitalLabel} <span className="caption-separator">·</span> radius in a₀</div>
    <div className="scene-visual-note">Samples show probability distribution, not electron paths. Slice colors are normalized within this plane.</div>
  </div>;
}
