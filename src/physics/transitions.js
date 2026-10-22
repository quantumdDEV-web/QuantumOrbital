/**
 * Energy levels and radiative transitions of a hydrogen-like ion (nonrelativistic,
 * infinite nuclear mass, so levels depend on n only). Energies in eV, wavelengths in nm.
 */

/** Rydberg energy for infinite nuclear mass, R∞·h·c, in eV. */
export const RYDBERG_ENERGY_EV = 13.605693122994;
/** h·c in eV·nm. */
export const HC_EV_NM = 1239.84198433;
/** Planck constant in eV·s. */
export const PLANCK_EV_S = 4.135667696e-15;

const SERIES_NAMES = { 1: 'Lyman', 2: 'Balmer', 3: 'Paschen', 4: 'Brackett', 5: 'Pfund', 6: 'Humphreys' };

export function levelEnergyEv(n, nuclearCharge = 1) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('n must be a positive integer');
  return -RYDBERG_ENERGY_EV * nuclearCharge ** 2 / (n * n);
}

/** The dipole selection rule for single-photon transitions: ℓ changes by exactly one. */
export function isDipoleAllowed(lA, lB) {
  return Math.abs(lA - lB) === 1;
}

export function spectralRegion(wavelengthNm) {
  if (wavelengthNm < 10) return 'X-ray';
  if (wavelengthNm < 380) return 'Ultraviolet';
  if (wavelengthNm <= 750) return 'Visible';
  return 'Infrared';
}

/** Approximate screen colour of a visible wavelength; null outside 380 to 750 nm. */
export function wavelengthToColor(nm) {
  if (!(nm >= 380 && nm <= 750)) return null;
  let r = 0;
  let g = 0;
  let b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
  else { r = 1; }
  // Intensity falls off toward the edges of vision.
  let factor = 1;
  if (nm < 420) factor = 0.3 + 0.7 * (nm - 380) / 40;
  else if (nm > 700) factor = 0.3 + 0.7 * (750 - nm) / 50;
  const encode = channel => Math.round(255 * (channel * factor) ** 0.8);
  const hex = value => value.toString(16).padStart(2, '0');
  return `#${hex(encode(r))}${hex(encode(g))}${hex(encode(b))}`;
}

export function seriesName(lowerN) {
  return SERIES_NAMES[lowerN] ?? null;
}

/**
 * Photon emitted when the electron drops from `upper` to `lower` ({ n, l }).
 * Returns null when the levels have the same energy, or the upper level is not higher.
 */
export function transitionInfo(upper, lower, nuclearCharge = 1) {
  if (!(upper.n > lower.n)) return null;
  const energyEv = levelEnergyEv(upper.n, nuclearCharge) - levelEnergyEv(lower.n, nuclearCharge);
  const wavelengthNm = HC_EV_NM / energyEv;
  return {
    upper,
    lower,
    allowed: isDipoleAllowed(upper.l, lower.l),
    energyEv,
    wavelengthNm,
    frequencyThz: energyEv / PLANCK_EV_S / 1e12,
    // The density of a two-level superposition repeats once per period h / ΔE.
    periodFs: PLANCK_EV_S / energyEv * 1e15,
    region: spectralRegion(wavelengthNm),
    color: wavelengthToColor(wavelengthNm),
    series: seriesName(lower.n),
  };
}

/** Every dipole-allowed downward transition between levels with n ≤ maxN. */
export function allowedTransitions(maxN) {
  const list = [];
  for (let upperN = 2; upperN <= maxN; upperN += 1) {
    for (let upperL = 0; upperL < upperN; upperL += 1) {
      for (let lowerN = 1; lowerN < upperN; lowerN += 1) {
        for (const lowerL of [upperL - 1, upperL + 1]) {
          if (lowerL < 0 || lowerL > lowerN - 1) continue;
          list.push({ upper: { n: upperN, l: upperL }, lower: { n: lowerN, l: lowerL } });
        }
      }
    }
  }
  return list;
}

export function transitionKey(upper, lower) {
  return `${upper.n},${upper.l}>${lower.n},${lower.l}`;
}
