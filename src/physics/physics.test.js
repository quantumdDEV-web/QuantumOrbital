import { describe, expect, it } from 'vitest';
import { BOHR_RADIUS } from './constants.js';
import { isValidQuantumNumbers } from './quantumNumbers.js';
import { radialWavefunction1s, radialProbability1s } from './hydrogen/radial.js';
import { probabilityDensity1s } from './hydrogen/probability.js';
import { wavefunction1s } from './hydrogen/wavefunction.js';
import { integrateRadialProbability } from './calculations/normalization.js';
import { probabilityInsideRadius1s } from './calculations/regionProbability.js';
import { createRadialCdf, hydrogenicRadialDensity, hydrogenicRadialWavefunction, hydrogenicTransitionWavenumber, hydrogenicWavefunction, realSphericalHarmonic, radiusAtCdf } from './hydrogen/orbitalMath.js';

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

describe('normalized hydrogenic orbitals in atomic units', () => {
  it('matches the analytical 1s and 2p eigenfunctions', () => {
    expect(hydrogenicWavefunction(1, 0, 0, 0, 0, 0)).toBeCloseTo(1 / Math.sqrt(Math.PI), 14);
    expect(hydrogenicWavefunction(1, 0, 0, 1, 0, 0)).toBeCloseTo(Math.exp(-1) / Math.sqrt(Math.PI), 14);
    expect(hydrogenicWavefunction(2, 1, 0, 0, 1, 0)).toBeCloseTo(Math.sqrt(1 / (32 * Math.PI)) * Math.exp(-0.5), 14);
  });

  it('places radial and angular nodes at analytical locations', () => {
    expect(hydrogenicRadialWavefunction(2, 0, 2)).toBeCloseTo(0, 14);
    expect(hydrogenicWavefunction(2, 1, 0, 1, 0, 0)).toBeCloseTo(0, 14);
    expect(hydrogenicWavefunction(3, 0, 0, 0, 0, 0)).toBeGreaterThan(0);
    expect(hydrogenicRadialDensity(2, 1, 0)).toBe(0);
  });

  it('normalizes radial distributions over representative n and l values', () => {
    for (let n = 1; n <= 6; n += 1) for (let l = 0; l < n; l += 1) {
      const steps = 16000, max = 12 * n * n, h = max / steps;
      let sum = hydrogenicRadialDensity(n, l, 0) + hydrogenicRadialDensity(n, l, max);
      for (let i = 1; i < steps; i += 1) sum += (i % 2 ? 4 : 2) * hydrogenicRadialDensity(n, l, i * h);
      expect(sum * h / 3).toBeCloseTo(1, 5);
    }
  });

  it('normalizes real spherical harmonics and converges the sampled radial CDF', () => {
    const angularSteps = 120, phiSteps = 64;
    for (let l = 0; l <= 6; l += 1) for (let m = -l; m <= l; m += 1) {
      let integral = 0;
      for (let i = 0; i <= angularSteps; i += 1) {
        const cosine = -1 + 2 * i / angularSteps;
        const weight = i === 0 || i === angularSteps ? 1 : i % 2 ? 4 : 2;
        for (let j = 0; j < phiSteps; j += 1) {
          const phi = 2 * Math.PI * (j + 0.5) / phiSteps;
          integral += weight * realSphericalHarmonic(l, m, cosine, phi) ** 2;
        }
      }
      integral *= (2 / angularSteps / 3) * (2 * Math.PI / phiSteps);
      expect(integral).toBeCloseTo(1, 3);
    }
    const coarse = createRadialCdf(3, 1, 2048), fine = createRadialCdf(3, 1, 8192);
    expect(Math.abs(radiusAtCdf(coarse, 0.5) - radiusAtCdf(fine, 0.5))).toBeLessThan(0.01);
  });

  it('benchmarks the ideal Schrödinger Lyman-alpha energy against NIST and exposes model shifts', () => {
    const idealInfiniteMass = hydrogenicTransitionWavenumber(1, 2);
    const nistHydrogen2p32 = 82259.2850; // cm⁻¹, NIST Atomic Spectra Database handbook table
    expect(idealInfiniteMass).toBeCloseTo(82302.986761, 3);
    // The remaining ~43.7 cm⁻¹ is expected: the ideal model omits reduced nuclear mass,
    // fine structure and QED corrections included in evaluated H I level energies.
    expect(idealInfiniteMass - nistHydrogen2p32).toBeGreaterThan(43.6);
    expect(idealInfiniteMass - nistHydrogen2p32).toBeLessThan(43.8);
  });
});
