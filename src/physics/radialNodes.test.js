import { describe, expect, it } from 'vitest';
import { radialNodes } from './radialNodes.js';

describe('radial nodes of R_nl', () => {
  it('finds n - l - 1 nodes for representative states', () => {
    for (const [n, l] of [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [3, 2], [5, 1], [6, 2]]) {
      expect(radialNodes(n, l, 1, 12 * n * n)).toHaveLength(n - l - 1);
    }
  });

  it('puts the single 2s node at 2 a₀ and scales as 1/Z', () => {
    expect(radialNodes(2, 0, 1, 40)[0]).toBeCloseTo(2, 8);
    expect(radialNodes(2, 0, 2, 20)[0]).toBeCloseTo(1, 8);
  });

  it('places the two 3s nodes at (3 ± √3)·3/2 a₀', () => {
    const nodes = radialNodes(3, 0, 1, 100);
    expect(nodes[0]).toBeCloseTo(1.5 * (3 - Math.sqrt(3)), 7);
    expect(nodes[1]).toBeCloseTo(1.5 * (3 + Math.sqrt(3)), 7);
  });
});
