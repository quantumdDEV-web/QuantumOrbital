import { useMemo } from 'react';
import { sampleOrbitalPositions } from '../visualization/particleSampling.js';

export function useOrbital(pointCount=16000,n=1,l=0,m=0){
 return useMemo(()=>sampleOrbitalPositions(pointCount,n,l,m),[pointCount,n,l,m]);
}