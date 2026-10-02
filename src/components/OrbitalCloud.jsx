import { useEffect, useMemo } from 'react';
import { BufferAttribute, BufferGeometry, Color } from 'three';
import { useOrbital } from '../hooks/useOrbital.js';

export default function OrbitalCloud({pointCount,n=1,l=0,m=0,displayMode='probability'}) {
 const positions=useOrbital(pointCount,n,l,m);
 const colors=useMemo(()=>{
  const result=new Float32Array(positions.length);
  const color=new Color();
  for(let i=0;i<positions.length;i+=3){
   if(displayMode==='potential'){
    const radius=Math.max(0.15,Math.hypot(positions[i],positions[i+1],positions[i+2]));
    const binding=Math.min(100,27.211386/radius);
    const amount=binding/100;
    color.setHSL(0.62-0.58*amount,0.82,0.46+0.08*(1-amount));
   }else color.set('#63d9ff');
   result[i]=color.r;result[i+1]=color.g;result[i+2]=color.b;
  }
  return result;
 },[positions,displayMode]);
 const geometry=useMemo(()=>{const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(positions,3));g.setAttribute('color',new BufferAttribute(colors,3));return g},[positions,colors]);
 useEffect(()=>()=>geometry.dispose(),[geometry]);
 return <points geometry={geometry}><pointsMaterial vertexColors size={0.035} transparent opacity={displayMode==='potential'?0.72:0.34} sizeAttenuation depthWrite={false}/></points>;
}
