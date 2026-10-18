import { hydrogenicRadialWavefunction } from './hydrogen/orbitalMath.js';

const NODE_SCAN = 600;

/**
 * Radii where R_nl changes sign, found by scanning and bisecting.
 * A value of exactly zero counts as non-negative so a node that lands on a
 * scan sample is still detected once, never missed or doubled.
 */
export function radialNodes(n, l, nuclearCharge, maxRadius) {
  const nodes = [];
  const nonNegative = r => hydrogenicRadialWavefunction(n, l, r, nuclearCharge) >= 0;
  let previousR = maxRadius * 1e-4;
  let previousSide = nonNegative(previousR);
  for (let i = 1; i <= NODE_SCAN; i += 1) {
    const r = maxRadius * i / NODE_SCAN;
    const side = nonNegative(r);
    if (side !== previousSide) {
      let low = previousR;
      let high = r;
      for (let k = 0; k < 50; k += 1) {
        const mid = 0.5 * (low + high);
        if (nonNegative(mid) === previousSide) low = mid;
        else high = mid;
      }
      nodes.push(0.5 * (low + high));
    }
    previousR = r;
    previousSide = side;
  }
  return nodes;
}
