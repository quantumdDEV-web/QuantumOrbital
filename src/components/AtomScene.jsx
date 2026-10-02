import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls as ThreeOrbitControls } from 'three/addons/controls/OrbitControls.js';
import OrbitalCloud from './OrbitalCloud.jsx';
import Nucleus from './Nucleus.jsx';

function CameraControls(){const {camera,gl}=useThree();const controls=useMemo(()=>new ThreeOrbitControls(camera,gl.domElement),[camera,gl]);useEffect(()=>{controls.enableDamping=true;controls.dampingFactor=.08;controls.minDistance=3;controls.maxDistance=24;return()=>controls.dispose()},[controls]);return <primitive object={controls}/>}

export default function AtomScene({pointCount,n,l,m,radiusA0}){
 return <div className="scene-canvas"><Canvas camera={{position:[5.6,4.2,6.4],fov:42}} dpr={[1,1.6]}><color attach="background" args={['#080d15']}/><ambientLight intensity={.8}/><directionalLight position={[4,6,5]} intensity={1.4}/><Suspense fallback={null}><OrbitalCloud pointCount={pointCount} n={n} l={l} m={m}/><Nucleus/><group>{radiusA0>0&&<mesh scale={radiusA0}><sphereGeometry args={[1,36,36]}/><meshBasicMaterial color="#b7d98e" transparent opacity={.055} wireframe depthWrite={false}/></mesh>}</group><axesHelper args={[3]}/></Suspense><CameraControls/></Canvas><div className="scene-caption"><span className="legend-dot"/> Probability density sample <span className="caption-separator">·</span> orbital {n}{['s','p','d','f'][l]||''}{l>0?m:''} <span className="caption-separator">·</span> 1 unit = a₀</div></div>
}