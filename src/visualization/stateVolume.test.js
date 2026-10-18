import { describe, expect, it } from 'vitest';
import { createHydrogenicDensityEvaluator } from '../physics/hydrogen/orbitalMath.js';
import { buildStateGroups } from '../physics/states.js';
import {
  buildStateVolume,
  fromHalfFloat,
  stateExtent,
  stateGridSize,
  toHalfFloat,
} from './stateVolume.js';

describe('half-float packing', () => {
  it('round-trips representative magnitudes', () => {
    for (const value of [0, 1, -1, 0.5, 1e-3, -0.0123, 123.456, 60000, 3e-5]) {
      const decoded = fromHalfFloat(toHalfFloat(value));
      expect(Math.abs(decoded - value)).toBeLessThanOrEqual(Math.max(Math.abs(value) * 1e-3, 1e-7));
    }
  });

  it('clamps overflow, flushes tiny values and zeroes NaN', () => {
    expect(fromHalfFloat(toHalfFloat(1e9))).toBe(65504);
    expect(fromHalfFloat(toHalfFloat(-1e9))).toBe(-65504);
    expect(fromHalfFloat(toHalfFloat(1e-12))).toBe(0);
    expect(toHalfFloat(Number.NaN)).toBe(0);
  });
});

describe('state volume for a single 1s state', () => {
  const state = buildStateGroups({ n: 1, l: 0, m: 0, kind: 'complex' });
  const size = 48;
  const extent = 8;
  const volume = buildStateVolume({ groups: state.groups, size, extent });

  const decodeDensity = index => {
    const re = fromHalfFloat(volume.psi[index * 4]);
    const im = fromHalfFloat(volume.psi[index * 4 + 1]);
    return re * re + im * im;
  };

  it('has the expected layout and nearly all probability inside the grid', () => {
    expect(volume.psi).toHaveLength(size ** 3 * 4);
    expect(volume.hasSecond).toBe(false);
    expect(volume.capturedProbability).toBeGreaterThan(0.97);
    expect(volume.capturedProbability).toBeLessThan(1.01);
    expect(volume.levels).toHaveLength(100);
  });

  it('stores ψ scaled so the shader density is the analytic density divided by vmax', () => {
    const analytic = createHydrogenicDensityEvaluator(1, 0, 0, 1);
    for (const [ix, iy, iz] of [[24, 24, 24], [26, 24, 23], [30, 20, 25]]) {
      const x = ((ix + 0.5) / size * 2 - 1) * extent;
      const y = ((iy + 0.5) / size * 2 - 1) * extent;
      const z = ((iz + 0.5) / size * 2 - 1) * extent;
      const index = ix + size * (iy + size * iz);
      const expected = analytic(x, y, z) / volume.vmax;
      expect(decodeDensity(index)).toBeCloseTo(expected, 2);
    }
  });

  it('orders enclosed-probability surface levels and honors the enclosed fraction', () => {
    for (let percent = 2; percent <= 99; percent += 1) {
      expect(volume.levels[percent]).toBeLessThanOrEqual(volume.levels[percent - 1]);
    }
    let total = 0;
    let inside = 0;
    const level = volume.levels[90];
    for (let i = 0; i < size ** 3; i += 1) {
      const d = decodeDensity(i);
      total += d;
      if (d >= level) inside += d;
    }
    expect(inside / total).toBeGreaterThan(0.89);
    expect(inside / total).toBeLessThan(0.93);
  });

  it('draws Monte Carlo points from |ψ|² with the 1s mean radius of 1.5 a₀', () => {
    expect(volume.points).toHaveLength(30000 * 3);
    let sum = 0;
    for (let p = 0; p < 30000; p += 1) {
      const x = volume.points[p * 3];
      const y = volume.points[p * 3 + 1];
      const z = volume.points[p * 3 + 2];
      expect(Math.max(Math.abs(x), Math.abs(y), Math.abs(z))).toBeLessThanOrEqual(1);
      sum += Math.hypot(x, y, z) * extent;
    }
    expect(sum / 30000).toBeGreaterThan(1.42);
    expect(sum / 30000).toBeLessThan(1.58);
  });

  it('is deterministic for a fixed seed', () => {
    const again = buildStateVolume({ groups: state.groups, size: 24, extent, seed: 7 });
    const other = buildStateVolume({ groups: state.groups, size: 24, extent, seed: 7 });
    expect(Array.from(again.points.slice(0, 30))).toEqual(Array.from(other.points.slice(0, 30)));
  });
});

describe('two-energy superposition volume', () => {
  const state = buildStateGroups({
    n: 1, l: 0, m: 0, kind: 'complex', mix: 0.5,
    second: { enabled: true, n: 2, l: 1, m: 0 },
  });
  const extent = stateExtent(state.groups, 1);
  const volume = buildStateVolume({ groups: state.groups, size: 32, extent, pointCount: 100 });

  it('fills the second ψ channels and reports two energies', () => {
    expect(volume.hasSecond).toBe(true);
    let secondChannel = 0;
    for (let i = 0; i < 32 ** 3; i += 1) {
      secondChannel += Math.abs(fromHalfFloat(volume.psi[i * 4 + 2])) + Math.abs(fromHalfFloat(volume.psi[i * 4 + 3]));
    }
    expect(secondChannel).toBeGreaterThan(0);
  });

  it('frames the grid by the larger of the two states', () => {
    expect(extent).toBeCloseTo(2 * (3 * 4 - 2) / 2, 12);
    expect(stateGridSize(state.groups)).toBe(72);
    expect(stateGridSize(buildStateGroups({ n: 6, l: 0, m: 0 }).groups)).toBe(96);
  });

  it('keeps the display density bounded for every relative phase', () => {
    let peak = 0;
    for (const delta of [0, Math.PI / 3, Math.PI / 2, Math.PI, 5 * Math.PI / 4]) {
      const cos = Math.cos(delta);
      const sin = Math.sin(delta);
      for (let i = 0; i < 32 ** 3; i += 1) {
        const reA = fromHalfFloat(volume.psi[i * 4]);
        const imA = fromHalfFloat(volume.psi[i * 4 + 1]);
        const reB = fromHalfFloat(volume.psi[i * 4 + 2]);
        const imB = fromHalfFloat(volume.psi[i * 4 + 3]);
        const re = reA + cos * reB - sin * imB;
        const im = imA + cos * imB + sin * reB;
        peak = Math.max(peak, re * re + im * im);
      }
    }
    expect(peak).toBeLessThan(4);
  });
});
