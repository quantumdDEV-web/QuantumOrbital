import { BOHR_RADIUS } from '../constants.js';
import { radialWavefunction1s } from './radial.js';
import { sphericalHarmonic00 } from './sphericalHarmonics.js';

/** Complex-independent real 1s wavefunction ψ_100(r) in m^-3/2. */
export function wavefunction1s(r, a0 = BOHR_RADIUS) {
  return radialWavefunction1s(r, a0) * sphericalHarmonic00();
}
