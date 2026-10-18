import { describe, expect, it } from 'vitest';
import {
  DEFAULT_STATE,
  clampQuantumNumbers,
  decodeState,
  encodeState,
  physicsConfig,
  sanitizeState,
} from './urlState.js';

describe('quantum number clamping', () => {
  it('keeps valid triples and repairs invalid ones', () => {
    expect(clampQuantumNumbers(3, 2, -1)).toEqual({ n: 3, l: 2, m: -1 });
    expect(clampQuantumNumbers(2, 5, 9)).toEqual({ n: 2, l: 1, m: 1 });
    expect(clampQuantumNumbers(99, 0, 0).n).toBe(8);
    expect(clampQuantumNumbers('x', 'y', 'z')).toEqual({ n: 1, l: 0, m: 0 });
  });
});

describe('state sanitizing', () => {
  it('returns the defaults for empty input', () => {
    expect(sanitizeState({})).toEqual({ ...DEFAULT_STATE, second: { ...DEFAULT_STATE.second } });
  });

  it('rejects unknown modes and out-of-range values', () => {
    const state = sanitizeState({
      render: 'hologram', color: 'neon', kind: 'weird', hybrid: 'sp9', hybridIndex: 40,
      isoPercent: 5, slicePos: 7, speed: -2, exposure: 12, nuclearCharge: 500, mix: 3,
    });
    expect(state.render).toBe('volume');
    expect(state.color).toBe('density');
    expect(state.kind).toBe('complex');
    expect(state.hybrid).toBe('sp3');
    expect(state.hybridIndex).toBe(3);
    expect(state.isoPercent).toBe(50);
    expect(state.slicePos).toBe(1);
    expect(state.speed).toBe(0);
    expect(state.exposure).toBe(2);
    expect(state.nuclearCharge).toBe(118);
    expect(state.mix).toBe(1);
  });
});

describe('URL hash round trip', () => {
  it('restores a superposition with surface rendering and a camera', () => {
    const state = sanitizeState({
      n: 4, l: 1, m: -1, nuclearCharge: 2, kind: 'real',
      second: { enabled: true, n: 2, l: 0, m: 0 }, mix: 0.25, speed: 1.5,
      render: 'surface', color: 'phase', isoPercent: 80, exposure: 0.4,
    });
    const hash = encodeState(state, [1.2345, -2, 3.14159]);
    const decoded = decodeState(`#${hash}`);
    expect(decoded.state).toEqual(state);
    expect(decoded.camera).toEqual([1.234, -2, 3.142]);
  });

  it('restores slice settings and hybrid choices', () => {
    const slice = sanitizeState({ render: 'slice', sliceAxis: 'y', slicePos: -0.35 });
    expect(decodeState(encodeState(slice)).state.sliceAxis).toBe('y');
    expect(decodeState(encodeState(slice)).state.slicePos).toBeCloseTo(-0.35, 12);
    const hybrid = sanitizeState({ n: 3, kind: 'hybrid', hybrid: 'sp2', hybridIndex: 2 });
    const decoded = decodeState(encodeState(hybrid)).state;
    expect(decoded.kind).toBe('hybrid');
    expect(decoded.hybrid).toBe('sp2');
    expect(decoded.hybridIndex).toBe(2);
  });

  it('survives garbage input', () => {
    const decoded = decodeState('#n=banana&l=-4&cam=1,2&s2=1,1,1&r=%00');
    expect(decoded.camera).toBe(null);
    expect(decoded.state.n).toBe(1);
    expect(decoded.state.render).toBe('volume');
    expect(decoded.state.second.l).toBe(0);
    expect(decodeState(undefined).state).toEqual(sanitizeState({}));
  });
});

describe('physics config', () => {
  it('falls back from hybrid to real when n is 1 and drops superposition for hybrids', () => {
    expect(physicsConfig(sanitizeState({ n: 1, l: 0, m: 0, kind: 'hybrid' })).kind).toBe('real');
    const hybrid = physicsConfig(sanitizeState({
      n: 3, kind: 'hybrid', second: { enabled: true, n: 2, l: 1, m: 0 },
    }));
    expect(hybrid.kind).toBe('hybrid');
    expect(hybrid.second).toBe(undefined);
  });
});
