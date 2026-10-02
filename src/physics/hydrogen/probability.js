import { BOHR_RADIUS } from '../constants.js';
import { wavefunction1s } from './wavefunction.js';

/** Probability density |ψ|² in m^-3. */
export function probabilityDensity1s(r, a0 = BOHR_RADIUS) {
  return wavefunction1s(r, a0) ** 2;
}
