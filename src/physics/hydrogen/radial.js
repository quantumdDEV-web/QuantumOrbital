import { BOHR_RADIUS } from '../constants.js';

/** Normalized radial wavefunction R_10(r) in SI units (m^-3/2). */
export function radialWavefunction1s(r, a0 = BOHR_RADIUS) {
  if (r < 0 || a0 <= 0) throw new RangeError('Radius must be non-negative and a0 positive');
  return 2 * Math.exp(-r / a0) / Math.pow(a0, 1.5);
}

export function radialProbability1s(r, a0 = BOHR_RADIUS) {
  return r * r * radialWavefunction1s(r, a0) ** 2;
}
