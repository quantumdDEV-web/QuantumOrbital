import { radialProbability1s } from '../hydrogen/radial.js';

/** Composite Simpson integration for radial probability over [0, maxRadius]. */
export function integrateRadialProbability(maxRadius, steps = 4000, density = radialProbability1s) {
  if (!(maxRadius >= 0) || steps < 2) throw new RangeError('Invalid integration bounds');
  if (steps % 2) steps += 1;
  const h = maxRadius / steps;
  let sum = density(0) + density(maxRadius);
  for (let i = 1; i < steps; i++) sum += (i % 2 ? 4 : 2) * density(i * h);
  return (sum * h) / 3;
}
