import { useMemo } from 'react';
import { sample1sPositions } from '../visualization/particleSampling.js';

export function useOrbital(pointCount = 16000) {
  return useMemo(() => sample1sPositions(pointCount), [pointCount]);
}
