import { describe, expect, it } from 'vitest';
import { BOHR_RADIUS } from './constants.js';
import { isValidQuantumNumbers } from './quantumNumbers.js';
import { radialWavefunction1s, radialProbability1s } from './hydrogen/radial.js';
import { probabilityDensity1s } from './hydrogen/probability.js';
import { wavefunction1s } from './hydrogen/wavefunction.js';
import { integrateRadialProbability } from './calculations/normalization.js';
import { probabilityInsideRadius1s } from './calculations/regionProbability.js';

describe('quantum number rules', () => {
  it('accepts valid values and rejects invalid values', () => {
    expect(isValidQuantumNumbers(1, 0, 0)).toBe(true);
    expect(isValidQuantumNumbers(2, 1, -1)).toBe(true);
    expect(isValidQuantumNumbers(0, 0, 0)).toBe(false);
    expect(isValidQuantumNumbers(1, 1, 0)).toBe(false);
    expect(isValidQuantumNumbers(2, 1, 2)).toBe(false);
  });
});

describe('hydrogen 1s', () => {
  it('uses the normalized wavefunction and density at the origin', () => {
    expect(wavefunction1s(0)).toBeCloseTo(1 / Math.sqrt(Math.PI * BOHR_RADIUS ** 3), 3);
    expect(probabilityDensity1s(0) / (1 / (Math.PI * BOHR_RADIUS ** 3))).toBeCloseTo(1, 14);
    expect(wavefunction1s(BOHR_RADIUS) / (wavefunction1s(0) / Math.E)).toBeCloseTo(1, 14);
  });
  it('has a normalized radial distribution', () => {
    expect(integrateRadialProbability(20 * BOHR_RADIUS)).toBeCloseTo(1, 9);
    expect(radialProbability1s(0)).toBe(0);
    expect(radialWavefunction1s(BOHR_RADIUS)).toBeGreaterThan(0);
  });
  it('integrates probability inside a radius accurately', () => {
    expect(probabilityInsideRadius1s(0, BOHR_RADIUS)).toBeCloseTo(0, 15);
    expect(probabilityInsideRadius1s(BOHR_RADIUS, BOHR_RADIUS)).toBeCloseTo(1 - 5 * Math.exp(-2), 14);
    expect(probabilityInsideRadius1s(20 * BOHR_RADIUS, BOHR_RADIUS)).toBeCloseTo(1, 12);
  });
});
