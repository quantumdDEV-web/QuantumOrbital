import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls as ThreeOrbitControls } from 'three/addons/controls/OrbitControls.js';
import OrbitalCloud from './OrbitalCloud.jsx';
import Nucleus from './Nucleus.jsx';

function CameraControls({ n }) {
  const { camera, gl } = useThree();
  const controls = useMemo(() => new ThreeOrbitControls(camera, gl.domElement), [camera, gl]);

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

  return <primitive object={controls}/>;
}

export default function AtomScene({ pointCount, n, l, m, radiusA0, element }) {
  const orbitalLabel = `${n}${['s', 'p', 'd', 'f'][l] || ''}${l > 0 ? m : ''}`;
  const hasEnergy = Number.isFinite(element?.ionizationEnergy);
  const energyLabel = hasEnergy
    ? `${element.ionizationEnergyEstimated ? '~' : ''}${element.ionizationEnergy.toFixed(2)} eV`
    : 'No evaluated value';

  return <div className="scene-canvas">
    <Canvas camera={{ position: [5.6, 4.2, 6.4], fov: 42 }} dpr={[1, 1.6]}>
      <color attach="background" args={['#05080d']}/>
      <ambientLight intensity={0.8}/>
      <directionalLight position={[4, 6, 5]} intensity={1.4}/>
      <Suspense fallback={null}>
        <OrbitalCloud pointCount={pointCount} n={n} l={l} m={m} ionizationEnergy={element?.ionizationEnergy}/>
        <Nucleus/>
        {radiusA0 > 0 && <mesh scale={radiusA0}><sphereGeometry args={[1, 36, 36]}/><meshBasicMaterial color="#b7d98e" transparent opacity={0.055} wireframe depthWrite={false}/></mesh>}
        <axesHelper args={[3]}/>
      </Suspense>
      <CameraControls n={n}/>
    </Canvas>
    <div className="scene-visual-legend"><span className="legend-dot probability-dot"/>Probability orbital <span className="legend-dot energy-dot"/>Energy color</div>
    <div className="scene-caption">{element?.symbol || 'Atom'} first ionization energy: {energyLabel} <span className="caption-separator">·</span> orbital {orbitalLabel} <span className="caption-separator">·</span> radius in a₀</div>
    <div className="scene-energy-scale" aria-label="First ionization energy scale, zero to twenty five electron volts"><span>0 eV</span><i/><span>25 eV</span></div>
    <div className="scene-energy-note">Electron samples move continuously. The blue halo shows probability; color shows this element's ionization energy.</div>
  </div>;
}
