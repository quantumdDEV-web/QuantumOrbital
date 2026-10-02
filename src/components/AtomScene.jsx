import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls as ThreeOrbitControls } from 'three/addons/controls/OrbitControls.js';
import OrbitalCloud from './OrbitalCloud.jsx';
import Nucleus from './Nucleus.jsx';

function Axes() { return <axesHelper args={[3]} />; }
function CameraControls() {
  const { camera, gl } = useThree();
  const controls = useMemo(() => new ThreeOrbitControls(camera, gl.domElement), [camera, gl]);
  useEffect(() => { controls.enableDamping = true; controls.dampingFactor = 0.08; controls.minDistance = 3; controls.maxDistance = 18; return () => controls.dispose(); }, [controls]);
  return <primitive object={controls} />;
}

export default function AtomScene({ pointCount, radiusA0 }) {
  return <div className="scene-canvas"><Canvas camera={{ position: [5.6, 4.2, 6.4], fov: 42 }} dpr={[1, 1.6]}><color attach="background" args={['#080d15']} /><ambientLight intensity={0.8} /><directionalLight position={[4, 6, 5]} intensity={1.4} /><Suspense fallback={null}><OrbitalCloud pointCount={pointCount} /><Nucleus /><group>{radiusA0 > 0 && <mesh scale={radiusA0}><sphereGeometry args={[1, 36, 36]} /><meshBasicMaterial color="#b7d98e" transparent opacity={0.055} wireframe depthWrite={false} /></mesh>}</group><Axes /></Suspense><CameraControls /></Canvas><div className="scene-caption"><span className="legend-dot"/> Sampled electron positions <span className="caption-separator">·</span> Shaded volume: r ≤ R <span className="caption-separator">·</span> 1 unit = a₀</div></div>;
}
