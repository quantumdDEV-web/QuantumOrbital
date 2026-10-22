import { describe, expect, it } from 'vitest';
import { hydrogenicTransitionWavenumber } from './hydrogen/orbitalMath.js';
import {
  HC_EV_NM,
  allowedTransitions,
  isDipoleAllowed,
  levelEnergyEv,
  spectralRegion,
  transitionInfo,
  transitionKey,
  wavelengthToColor,
} from './transitions.js';

describe('level energies', () => {
  it('follows -13.6057 Z²/n² eV and rejects invalid n', () => {
    expect(levelEnergyEv(1)).toBeCloseTo(-13.605693, 5);
    expect(levelEnergyEv(2)).toBeCloseTo(-3.401423, 5);
    expect(levelEnergyEv(3, 2)).toBeCloseTo(-13.605693 * 4 / 9, 5);
    expect(() => levelEnergyEv(0)).toThrow(RangeError);
  });
});

describe('hydrogen lines', () => {
  it('gives Lyman-alpha at 121.5 nm and a 0.405 fs density period', () => {
    const line = transitionInfo({ n: 2, l: 1 }, { n: 1, l: 0 });
    expect(line.energyEv).toBeCloseTo(10.2042, 3);
    expect(line.wavelengthNm).toBeCloseTo(121.50, 1);
    expect(line.periodFs).toBeCloseTo(0.4053, 3);
    expect(line.region).toBe('Ultraviolet');
    expect(line.color).toBe(null);
    expect(line.series).toBe('Lyman');
    expect(line.allowed).toBe(true);
  });

  it('gives Balmer-alpha in the red near 656 nm', () => {
    const line = transitionInfo({ n: 3, l: 2 }, { n: 2, l: 1 });
    expect(line.wavelengthNm).toBeCloseTo(656.11, 1);
    expect(line.region).toBe('Visible');
    expect(line.series).toBe('Balmer');
    expect(line.frequencyThz).toBeCloseTo(456.9, 0);
    expect(line.color.startsWith('#ff')).toBe(true);
  });

  it('agrees with the wavenumber formula already used by the physics tests', () => {
    for (const [lower, upper, charge] of [[1, 2, 1], [2, 4, 1], [3, 7, 1], [1, 3, 2], [2, 5, 3]]) {
      const wavenumber = hydrogenicTransitionWavenumber(lower, upper, charge);
      const line = transitionInfo({ n: upper, l: 0 }, { n: lower, l: 1 }, charge);
      expect(line.wavelengthNm).toBeCloseTo(1e7 / wavenumber, 3);
    }
  });

  it('scales the photon energy with Z² and the wavelength with 1/Z²', () => {
    const hydrogen = transitionInfo({ n: 3, l: 1 }, { n: 2, l: 0 }, 1);
    const helium = transitionInfo({ n: 3, l: 1 }, { n: 2, l: 0 }, 2);
    expect(helium.energyEv / hydrogen.energyEv).toBeCloseTo(4, 10);
    expect(helium.wavelengthNm * 4).toBeCloseTo(hydrogen.wavelengthNm, 8);
    expect(hydrogen.wavelengthNm * hydrogen.energyEv).toBeCloseTo(HC_EV_NM, 8);
  });

  it('returns null for levels that are not downward in energy', () => {
    expect(transitionInfo({ n: 2, l: 0 }, { n: 2, l: 1 })).toBe(null);
    expect(transitionInfo({ n: 1, l: 0 }, { n: 3, l: 1 })).toBe(null);
  });
});

describe('selection rule and transition list', () => {
  it('allows only Δℓ = ±1', () => {
    expect(isDipoleAllowed(0, 1)).toBe(true);
    expect(isDipoleAllowed(2, 1)).toBe(true);
    expect(isDipoleAllowed(0, 0)).toBe(false);
    expect(isDipoleAllowed(0, 2)).toBe(false);
    expect(isDipoleAllowed(3, 1)).toBe(false);
  });

  it('lists exactly the five allowed transitions up to n = 3', () => {
    const keys = allowedTransitions(3).map(({ upper, lower }) => transitionKey(upper, lower)).sort();
    expect(keys).toEqual(['2,1>1,0', '3,0>2,1', '3,1>1,0', '3,1>2,0', '3,2>2,1'].sort());
  });

  it('only lists valid levels that obey the rule and lose energy', () => {
    const list = allowedTransitions(6);
    expect(list.length).toBeGreaterThan(40);
    for (const { upper, lower } of list) {
      expect(upper.n).toBeGreaterThan(lower.n);
      expect(upper.l).toBeLessThan(upper.n);
      expect(lower.l).toBeLessThan(lower.n);
      expect(lower.l).toBeGreaterThan(-1);
      expect(isDipoleAllowed(upper.l, lower.l)).toBe(true);
    }
    expect(new Set(list.map(({ upper, lower }) => transitionKey(upper, lower))).size).toBe(list.length);
  });
});

describe('spectral regions and colours', () => {
  it('classifies regions and only colours visible light', () => {
    expect(spectralRegion(121.5)).toBe('Ultraviolet');
    expect(spectralRegion(500)).toBe('Visible');
    expect(spectralRegion(1875)).toBe('Infrared');
    expect(spectralRegion(1)).toBe('X-ray');
    expect(wavelengthToColor(300)).toBe(null);
    expect(wavelengthToColor(900)).toBe(null);
    expect(wavelengthToColor(486)).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('runs from violet through blue, green and yellow to red', () => {
    const channels = nm => {
      const hex = wavelengthToColor(nm);
      return [1, 3, 5].map(i => Number.parseInt(hex.slice(i, i + 2), 16));
    };
    const [rBlue, gBlue, bBlue] = channels(460);
    expect(bBlue).toBeGreaterThan(rBlue);
    expect(bBlue).toBeGreaterThan(gBlue);
    const [rGreen, gGreen, bGreen] = channels(530);
    expect(gGreen).toBeGreaterThan(bGreen);
    expect(gGreen).toBeGreaterThan(80);
    const [rRed, gRed, bRed] = channels(650);
    expect(rRed).toBeGreaterThan(gRed);
    expect(rRed).toBeGreaterThan(bRed);
  });
});
