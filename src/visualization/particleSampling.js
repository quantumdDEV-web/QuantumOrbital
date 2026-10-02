/** Importance sampling: draw radii from the exact 1s radial CDF via tabulated inversion. */
export function sample1sPositions(count, maxA0 = 12, seed = 271828) {
  let state = seed >>> 0;
  const random = () => { state = (1664525 * state + 1013904223) >>> 0; return state / 4294967296; };
  const bins = 2048;
  const cdf = new Float64Array(bins + 1);
  const cdfAt = (x) => 1 - Math.exp(-2 * x) * (1 + 2 * x + 2 * x * x);
  for (let i = 0; i <= bins; i++) cdf[i] = cdfAt(maxA0 * i / bins);
  const norm = cdf[bins];
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const target = random() * norm;
    let lo = 0, hi = bins;
    while (lo < hi) { const mid = (lo + hi) >>> 1; if (cdf[mid] < target) lo = mid + 1; else hi = mid; }
    const prev = Math.max(0, lo - 1);
    const fraction = cdf[lo] === cdf[prev] ? 0 : (target - cdf[prev]) / (cdf[lo] - cdf[prev]);
    const r = maxA0 * (prev + fraction) / bins;
    const z = 2 * random() - 1, phi = 2 * Math.PI * random(), planar = Math.sqrt(1 - z * z);
    positions[i * 3] = r * planar * Math.cos(phi);
    positions[i * 3 + 1] = r * z;
    positions[i * 3 + 2] = r * planar * Math.sin(phi);
  }
  return positions;
}
