import { useMemo } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';
import { useOrbital } from '../hooks/useOrbital.js';

export default function OrbitalCloud({pointCount,n=1,l=0,m=0}) {
 const positions=useOrbital(pointCount,n,l,m);
 const geometry=useMemo(()=>{const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(positions,3));return g},[positions]);
 return <points geometry={geometry}><pointsMaterial color="#63d9ff" size={0.035} transparent opacity={0.34} sizeAttenuation depthWrite={false}/></points>;
}