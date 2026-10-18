/** Hydrogenic orbital functions in atomic units; coordinates and radii are in a₀. */
export const RYDBERG_INFINITY_CM = 109737.31568157;

/** Nonrelativistic infinite-nuclear-mass hydrogenic transition wavenumber. */
export function hydrogenicTransitionWavenumber(nLower, nUpper, nuclearCharge = 1) {
  if (![nLower, nUpper, nuclearCharge].every(Number.isFinite)
      || !Number.isInteger(nLower) || !Number.isInteger(nUpper)
      || nLower < 1 || nUpper <= nLower || nuclearCharge <= 0) return 0;
  return RYDBERG_INFINITY_CM * nuclearCharge ** 2 * (1 / nLower ** 2 - 1 / nUpper ** 2);
}

function logFactorial(value) {
  let result = 0;
  for (let i = 2; i <= value; i += 1) result += Math.log(i);
  return result;
}

export function generalizedLaguerre(order, alpha, x) {
  if (order === 0) return 1;
  let previous = 1;
  let current = 1 + alpha - x;
  for (let k = 2; k <= order; k += 1) {
    const next = ((2 * k - 1 + alpha - x) * current - (k - 1 + alpha) * previous) / k;
    previous = current;
    current = next;
  }
  return current;
}

export function associatedLegendre(l, m, x) {
  const order = Math.abs(m);
  if (!Number.isInteger(l) || !Number.isInteger(order) || l < 0 || order > l) return 0;
  const cosine = Math.max(-1, Math.min(1, x));
  let pmm = 1;
  if (order > 0) {
    const root = Math.sqrt(Math.max(0, 1 - cosine * cosine));
    for (let i = 1, factor = 1; i <= order; i += 1, factor += 2) pmm *= -factor * root;
  }
  if (l === order) return pmm;
  let previous = pmm;
  let current = cosine * (2 * order + 1) * pmm;
  if (l === order + 1) return current;
  for (let degree = order + 2; degree <= l; degree += 1) {
    const next = ((2 * degree - 1) * cosine * current - (degree + order - 1) * previous) / (degree - order);
    previous = current;
    current = next;
  }
  return current;
}

/** Normalized radial eigenfunction R_nl(r), in a₀^(-3/2). */
export function hydrogenicRadialWavefunction(n, l, radiusA0) {
  if (!Number.isInteger(n) || !Number.isInteger(l) || n < 1 || l < 0 || l >= n || radiusA0 < 0) return 0;
  const order = n - l - 1;
  const logNormalization = 1.5 * Math.log(2 / n)
    + 0.5 * (logFactorial(order) - Math.log(2 * n) - logFactorial(n + l));
  const rho = 2 * radiusA0 / n;
  return Math.exp(logNormalization - rho / 2) * rho ** l * generalizedLaguerre(order, 2 * l + 1, rho);
}

/** Radial probability density r²|R_nl(r)|², per a₀. */
export function hydrogenicRadialDensity(n, l, radiusA0) {
  const radial = hydrogenicRadialWavefunction(n, l, radiusA0);
  return radiusA0 * radiusA0 * radial * radial;
}

/** Real normalized spherical harmonic for the selected signed m. */
export function realSphericalHarmonic(l, m, cosTheta, phi) {
  const order = Math.abs(m);
  if (!Number.isInteger(l) || !Number.isInteger(m) || l < 0 || order > l) return 0;
  const logRatio = logFactorial(l - order) - logFactorial(l + order);
  const normalization = Math.sqrt((2 * l + 1) / (4 * Math.PI) * Math.exp(logRatio));
  const legendre = associatedLegendre(l, order, cosTheta);
  if (m === 0) return normalization * legendre;
  const angular = m > 0 ? Math.cos(order * phi) : Math.sin(order * phi);
  return Math.SQRT2 * normalization * legendre * angular;
}

/** Normalized real hydrogenic ψ_nlm in a₀^(-3/2), for Cartesian coordinates in a₀. */
export function hydrogenicWavefunction(n, l, m, x, y, z) {
  if (!Number.isInteger(n) || !Number.isInteger(l) || !Number.isInteger(m) || n < 1 || l < 0 || l >= n || Math.abs(m) > l) return 0;
  const radius = Math.hypot(x, y, z);
  const angular = radius === 0
    ? (l === 0 ? 1 / Math.sqrt(4 * Math.PI) : 0)
    : realSphericalHarmonic(l, m, y / radius, Math.atan2(z, x));
  return hydrogenicRadialWavefunction(n, l, radius) * angular;
}

export function hydrogenicProbabilityDensity(n, l, m, x, y, z) {
  return hydrogenicWavefunction(n, l, m, x, y, z) ** 2;
}

// Retained for the existing renderer API; this is the normalized real wavefunction,
// so its sign still identifies phase while its magnitude is now physically meaningful.
export const hydrogenicWavefunctionSign = hydrogenicWavefunction;

export function createRadialCdf(n, l, steps = 4096) {
  if (!Number.isInteger(n) || !Number.isInteger(l) || n < 1 || l < 0 || l >= n || steps < 2) {
    throw new RangeError('Expected n ≥ 1, 0 ≤ l < n, and at least two radial steps');
  }
  const maxRadiusA0 = 12 * n * n;
  const step = maxRadiusA0 / steps;
  const cdf = new Float64Array(steps + 1);
  let previousDensity = hydrogenicRadialDensity(n, l, 0);
  for (let i = 1; i <= steps; i += 1) {
    const density = hydrogenicRadialDensity(n, l, i * step);
    cdf[i] = cdf[i - 1] + (previousDensity + density) * step / 2;
    previousDensity = density;
  }
  const total = cdf[steps];
  for (let i = 1; i <= steps; i += 1) cdf[i] /= total;
  return { cdf, maxRadiusA0, step, normalization: total };
}

export function radiusAtCdf(table, probability) {
  const { cdf, step } = table;
  const target = Math.max(0, Math.min(1, probability));
  let low = 0, high = cdf.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (cdf[mid] < target) low = mid + 1;
    else high = mid;
  }
  if (low === 0) return 0;
  const before = cdf[low - 1], span = cdf[low] - before;
  const fraction = span > 0 ? (target - before) / span : 0;
  return (low - 1 + fraction) * step;
}

export function probabilityInsideHydrogenicRadius(n, l, radiusA0, table = createRadialCdf(n, l)) {
  if (radiusA0 <= 0) return 0;
  const { cdf, step, maxRadiusA0 } = table;
  if (radiusA0 >= maxRadiusA0) return 1;
  const index = radiusA0 / step, before = Math.floor(index), fraction = index - before;
  return cdf[before] * (1 - fraction) + cdf[before + 1] * fraction;
}

export function hydrogenicRadialCurve(n, l, points = 180) {
  const table = createRadialCdf(n, l);
  const maxRadiusA0 = Math.min(table.maxRadiusA0, Math.max(8, n * n * 6));
  return Array.from({ length: points + 1 }, (_, i) => {
    const radiusA0 = maxRadiusA0 * i / points;
    return {
      radiusA0,
      probabilityPerA0: hydrogenicRadialDensity(n, l, radiusA0),
      probabilityInside: probabilityInsideHydrogenicRadius(n, l, radiusA0, table),
    };
  });
}
