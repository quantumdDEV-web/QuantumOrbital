import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AxesHelper } from 'three';
import { OrbitControls as ThreeOrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Camera, Pause, Play, RotateCcw } from 'lucide-react';
import OrbitalCloud from './OrbitalCloud.jsx';
import Nucleus from './Nucleus.jsx';

function CameraControls({ n, view }) {
  const { camera, gl } = useThree();
  const controls = useMemo(() => new ThreeOrbitControls(camera, gl.domElement), [camera, gl]);
  const transition = useRef(null);

  useEffect(() => () => controls.dispose(), [controls]);
  useEffect(() => {
    camera.position.set(5.6 * n * n, 4.2 * n * n, 6.4 * n * n);
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 3;
    controls.maxDistance = 24 * n * n;
    controls.update();
  }, [camera, controls, n]);

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
    else destination.set(5.6 * n * n, 4.2 * n * n, 6.4 * n * n);
    if (view.axis !== 'y') up.set(0, 1, 0);
    transition.current = {
      elapsed: 0,
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
    const viewHeight = 2 * depth * Math.tan((camera.fov * Math.PI) / 360);
    axes.position.set(-viewHeight * size.width / size.height / 2 + 0.35, -viewHeight / 2 + 0.35, -depth);
    axes.quaternion.copy(camera.quaternion).invert();
  });

  return null;
}

export default function AtomScene({ pointCount, n, l, m, element }) {
  const [paused, setPaused] = useState(false);
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
    <Canvas camera={{ position: [5.6, 4.2, 6.4], fov: 42 }} dpr={[1, 1.6]} gl={{ preserveDrawingBuffer: true }} onCreated={({ gl }) => setCanvasElement(gl.domElement)}>
      <color attach="background" args={['#05080d']}/>
      <ambientLight intensity={0.8}/>
      <directionalLight position={[4, 6, 5]} intensity={1.4}/>
      <Suspense fallback={null}>
        <OrbitalCloud pointCount={pointCount} n={n} l={l} m={m} paused={paused}/>
        <Nucleus/>
        <ReferenceFrame/>
      </Suspense>
      <CameraControls n={n} view={view}/>
    </Canvas>
    <div className="scene-visual-legend"><span className="legend-dot probability-dot"/>Probability <span className="legend-dot positive-phase-dot"/>+ phase <span className="legend-dot negative-phase-dot"/>− phase</div>
    <div className="scene-actions" role="group" aria-label="3D visualization controls">
      {['x', 'y', 'z'].map(axis => <button key={axis} type="button" className={view.axis === axis ? 'active' : ''} aria-pressed={view.axis === axis} onClick={() => setView(current => ({ axis, request: current.request + 1 }))} aria-label={`View along ${axis.toUpperCase()} axis`}>{axis.toUpperCase()}</button>)}
      <button type="button" onClick={() => setView(current => ({ axis: 'reset', request: current.request + 1 }))} aria-label="Reset camera view"><RotateCcw size={13}/></button>
      <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? <Play size={13}/> : <Pause size={13}/>}{paused ? 'Resume' : 'Pause'}</button>
      <button type="button" onClick={savePng} disabled={!canvasElement}><Camera size={13}/>PNG</button>
    </div>
    <div className="scene-caption">{element?.symbol || 'Atom'} first ionization energy: {energyLabel} <span className="caption-separator">·</span> orbital {orbitalLabel} <span className="caption-separator">·</span> radius in a₀</div>
    <div className="scene-visual-note">Dots continuously resample the probability cloud. Red and blue show opposite wavefunction phases.</div>
  </div>;
}
