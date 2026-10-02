import { useMemo, useState } from 'react';
import { BOHR_RADIUS } from '../physics/constants.js';
import { getImplementedOrbital, isValidQuantumNumbers } from '../physics/quantumNumbers.js';
import { probabilityInsideRadius1s } from '../physics/calculations/regionProbability.js';

export function useQuantumState() {
  const [radiusA0, setRadiusA0] = useState(1);
  const orbital = useMemo(() => getImplementedOrbital(1, 0, 0), []);
  const probability = probabilityInsideRadius1s(radiusA0 * BOHR_RADIUS, BOHR_RADIUS);
  return { n: 1, l: 0, m: 0, orbital, radiusA0, setRadiusA0, probability, implemented: isValidQuantumNumbers(1, 0, 0) && Boolean(orbital) };
}
