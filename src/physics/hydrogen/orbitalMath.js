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

export function hydrogenicRadialDensity(n, l, radiusA0) {
  if (radiusA0 < 0 || n < 1 || l < 0 || l >= n) return 0;
  const rho = 2 * radiusA0 / n;
  const radial = (rho ** l) * Math.exp(-radiusA0 / n) * generalizedLaguerre(n - l - 1, 2 * l + 1, rho);
  return radiusA0 * radiusA0 * radial * radial;
}

export function hydrogenicWavefunctionSign(n, l, m, x, y, z) {
  const radius = Math.hypot(x, y, z);
  if (radius === 0) return 1;

  const rho = 2 * radius / n;
  const radial = (rho ** l) * Math.exp(-radius / n)
    * generalizedLaguerre(n - l - 1, 2 * l + 1, rho);
  const order = Math.abs(m);
  let angular = associatedLegendre(l, order, y / radius);
  const phi = Math.atan2(z, x);
  if (m > 0) angular *= Math.cos(order * phi);
  else if (m < 0) angular *= Math.sin(order * phi);
  return radial * angular;
}

export function associatedLegendre(l, m, x) {
  const order = Math.abs(m);
  let pmm = 1;
  if (order > 0) {
    const root = Math.sqrt(Math.max(0, 1 - x * x));
    let factor = 1;
    for (let i = 1; i <= order; i += 1) {
      pmm *= -factor * root;
      factor += 2;
    }
  }
  if (l === order) return pmm;
  let previous = pmm;
  let current = x * (2 * order + 1) * pmm;
  if (l === order + 1) return current;
  for (let degree = order + 2; degree <= l; degree += 1) {
    const next = ((2 * degree - 1) * x * current - (degree + order - 1) * previous) / (degree - order);
    previous = current;
    current = next;
  }
  return current;
}

export function createRadialCdf(n, l, steps = 4096) {
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
  let low = 0;
  let high = cdf.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (cdf[mid] < probability) low = mid + 1;
    else high = mid;
  }
  if (low === 0) return 0;
  const before = cdf[low - 1];
  const span = cdf[low] - before;
  const fraction = span > 0 ? (probability - before) / span : 0;
  return (low - 1 + fraction) * step;
}

export function probabilityInsideHydrogenicRadius(n, l, radiusA0, table = createRadialCdf(n, l)) {
  if (radiusA0 <= 0) return 0;
  const { cdf, step, maxRadiusA0 } = table;
  if (radiusA0 >= maxRadiusA0) return 1;
  const index = radiusA0 / step;
  const before = Math.floor(index);
  const fraction = index - before;
  return cdf[before] * (1 - fraction) + cdf[before + 1] * fraction;
}

export function hydrogenicRadialCurve(n, l, points = 180) {
  const table = createRadialCdf(n, l);
  const maxRadiusA0 = Math.min(table.maxRadiusA0, Math.max(8, n * n * 6));
  return Array.from({ length: points + 1 }, (_, i) => {
    const radiusA0 = maxRadiusA0 * i / points;
    return {
      radiusA0,
      probabilityPerA0: hydrogenicRadialDensity(n, l, radiusA0) / table.normalization,
      probabilityInside: probabilityInsideHydrogenicRadius(n, l, radiusA0, table),
    };
  });
}
