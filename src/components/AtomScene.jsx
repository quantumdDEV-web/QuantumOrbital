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

export default function AtomScene({ pointCount, n, l, m, radiusA0, displayMode='probability', setDisplayMode=()=>{} }) {
  const orbitalLabel = `${n}${['s', 'p', 'd', 'f'][l] || ''}${l > 0 ? m : ''}`;
  return <div className="scene-canvas"><Canvas camera={{ position: [5.6, 4.2, 6.4], fov: 42 }} dpr={[1, 1.6]}>
    <color attach="background" args={['#080d15']}/>
    <ambientLight intensity={0.8}/>
    <directionalLight position={[4, 6, 5]} intensity={1.4}/>
    <Suspense fallback={null}>
      <OrbitalCloud pointCount={pointCount} n={n} l={l} m={m} displayMode={displayMode}/>
      <Nucleus/>
      {radiusA0 > 0 && <mesh scale={radiusA0}><sphereGeometry args={[1, 36, 36]}/><meshBasicMaterial color="#b7d98e" transparent opacity={0.055} wireframe depthWrite={false}/></mesh>}
      <axesHelper args={[3]}/>
    </Suspense>
    <CameraControls n={n}/>
  </Canvas>
    <div className="scene-mode-toggle" role="group" aria-label="3D visualization mode">
      <button type="button" className={displayMode==='probability'?'active':''} aria-pressed={displayMode==='probability'} onClick={()=>setDisplayMode('probability')}>Probability</button>
      <button type="button" className={displayMode==='potential'?'active':''} aria-pressed={displayMode==='potential'} onClick={()=>setDisplayMode('potential')}>Potential energy</button>
    </div>
    <div className="scene-caption"><span className={displayMode==='potential'?'legend-dot energy-dot':'legend-dot'}/>{displayMode==='potential'?'Coulomb potential energy (eV) · hydrogenic Z = 1':'Probability density sample'} <span className="caption-separator">·</span> orbital {orbitalLabel} <span className="caption-separator">·</span> radius in a₀</div>
    {displayMode==='potential'&&<div className="scene-energy-scale"><span>−100 eV</span><i/><span>0 eV</span></div>}
  </div>;
}
