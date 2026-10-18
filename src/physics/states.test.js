import { describe, expect, it } from 'vitest';
import {
  HYBRID_TYPES,
  buildStateGroups,
  hybridCoefficients,
  realOrbitalTerms,
  stateNorm,
  termInnerProduct,
} from './states.js';
import { evaluateState } from '../visualization/stateVolume.js';

const density = (groups, x, y, z, charge = 1) => {
  const { real, imaginary } = evaluateState(groups, charge, x, y, z);
  return real * real + imaginary * imaginary;
};

describe('real orbitals built from complex terms', () => {
  const px = buildStateGroups({ n: 2, l: 1, m: 1, kind: 'real' }).groups;
  const py = buildStateGroups({ n: 2, l: 1, m: -1, kind: 'real' }).groups;
  const pz = buildStateGroups({ n: 2, l: 1, m: 0, kind: 'real' }).groups;

  it('matches the closed-form 2p_x, 2p_y and 2p_z wavefunctions', () => {
    const point = [1.3, 0.4, -0.7];
    const radius = Math.hypot(...point);
    const prefactor = 1 / (4 * Math.sqrt(2 * Math.PI)) * Math.exp(-radius / 2);
    const value = groups => evaluateState(groups, 1, ...point);
    expect(value(px).real).toBeCloseTo(prefactor * point[0], 12);
    expect(value(py).real).toBeCloseTo(prefactor * point[1], 12);
    expect(value(pz).real).toBeCloseTo(prefactor * point[2], 12);
    expect(Math.abs(value(px).imaginary)).toBeLessThan(1e-14);
    expect(Math.abs(value(py).imaginary)).toBeLessThan(1e-14);
  });

  it('points p_x, p_y and p_z along the positive axes with opposite signs behind the nucleus', () => {
    expect(evaluateState(px, 1, 1, 0, 0).real).toBeGreaterThan(0);
    expect(evaluateState(px, 1, -1, 0, 0).real).toBeLessThan(0);
    expect(evaluateState(py, 1, 0, 1, 0).real).toBeGreaterThan(0);
    expect(evaluateState(py, 1, 0, -1, 0).real).toBeLessThan(0);
    expect(evaluateState(pz, 1, 0, 0, 1).real).toBeGreaterThan(0);
    expect(density(px, 0, 1, 0)).toBeLessThan(1e-20);
  });

  it('keeps every real orbital normalized and mutually orthogonal within a shell', () => {
    for (let l = 0; l <= 3; l += 1) {
      const all = [];
      for (let m = -l; m <= l; m += 1) all.push(realOrbitalTerms(l, m));
      all.forEach((a, i) => all.forEach((b, j) => {
        const product = termInnerProduct(a, b);
        expect(product.re).toBeCloseTo(i === j ? 1 : 0, 12);
        expect(product.im).toBeCloseTo(0, 12);
      }));
    }
  });
});

describe('hybrid orbitals', () => {
  it('has orthonormal hybrids for sp, sp² and sp³', () => {
    for (const [type, spec] of Object.entries(HYBRID_TYPES)) {
      const hybrids = Array.from({ length: spec.count }, (_, index) => (
        buildStateGroups({ n: 2, l: 0, m: 0, kind: 'hybrid', hybrid: type, hybridIndex: index }).groups[0].terms
      ));
      hybrids.forEach((a, i) => hybrids.forEach((b, j) => {
        const product = termInnerProduct(a, b);
        expect(product.re).toBeCloseTo(i === j ? 1 : 0, 12);
        expect(product.im).toBeCloseTo(0, 12);
      }));
    }
  });

  it('concentrates the first sp³ hybrid toward the (1, 1, 1) direction', () => {
    const { groups } = buildStateGroups({ n: 2, l: 0, m: 0, kind: 'hybrid', hybrid: 'sp3', hybridIndex: 0 });
    const toward = density(groups, 0.6, 0.6, 0.6);
    const away = density(groups, -0.6, -0.6, -0.6);
    expect(toward).toBeGreaterThan(5 * away);
  });

  it('puts the sp hybrids on opposite sides of the z axis', () => {
    const upper = buildStateGroups({ n: 2, l: 0, m: 0, kind: 'hybrid', hybrid: 'sp', hybridIndex: 0 }).groups;
    const lower = buildStateGroups({ n: 2, l: 0, m: 0, kind: 'hybrid', hybrid: 'sp', hybridIndex: 1 }).groups;
    expect(density(upper, 0, 0, 1)).toBeGreaterThan(density(upper, 0, 0, -1));
    expect(density(lower, 0, 0, -1)).toBeGreaterThan(density(lower, 0, 0, 1));
    expect(hybridCoefficients('sp', 0).s).toBeCloseTo(Math.SQRT1_2, 14);
  });

  it('rejects n = 1 and out-of-range indices', () => {
    expect(() => buildStateGroups({ n: 1, l: 0, m: 0, kind: 'hybrid', hybrid: 'sp' })).toThrow(RangeError);
    expect(() => hybridCoefficients('sp2', 3)).toThrow(RangeError);
    expect(() => hybridCoefficients('sp4', 0)).toThrow(RangeError);
  });
});

describe('superposition grouping', () => {
  it('merges states of equal n into one energy group', () => {
    const state = buildStateGroups({
      n: 2, l: 0, m: 0, kind: 'complex', mix: 0.5,
      second: { enabled: true, n: 2, l: 1, m: 0 },
    });
    expect(state.groups).toHaveLength(1);
    expect(state.hasSecond).toBe(false);
    expect(stateNorm(state.groups)).toBeCloseTo(1, 14);
  });

  it('keeps different n in separate groups with weights set by the mix', () => {
    const state = buildStateGroups({
      n: 1, l: 0, m: 0, kind: 'complex', mix: 0.36,
      second: { enabled: true, n: 2, l: 1, m: 0 },
    });
    expect(state.hasSecond).toBe(true);
    expect(state.groups.map(group => group.n)).toEqual([1, 2]);
    expect(state.groups[0].terms[0].re).toBeCloseTo(0.8, 14);
    expect(state.groups[1].terms[0].re).toBeCloseTo(0.6, 14);
    expect(stateNorm(state.groups)).toBeCloseTo(1, 14);
  });

  it('ignores a second state identical to the first and validates quantum numbers', () => {
    const same = buildStateGroups({
      n: 3, l: 2, m: 1, kind: 'complex', mix: 0.5,
      second: { enabled: true, n: 3, l: 2, m: 1 },
    });
    expect(same.groups[0].terms).toHaveLength(1);
    expect(same.groups[0].terms[0].re).toBe(1);
    expect(() => buildStateGroups({ n: 2, l: 2, m: 0 })).toThrow(RangeError);
    expect(() => buildStateGroups({
      n: 2, l: 0, m: 0, mix: 0.5, second: { enabled: true, n: 2, l: 1, m: 2 },
    })).toThrow(RangeError);
  });
});
