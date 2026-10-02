import { BOHR_RADIUS } from '../constants.js';
import { radialProbability1s } from '../hydrogen/radial.js';

/** Tabulated radial distribution per Bohr radius, suitable for plotting. */
export function radialProbabilityCurve(points = 200, maxA0 = 12) {
  return Array.from({ length: points + 1 }, (_, i) => {
    const radiusA0 = maxA0 * i / points;
    return { radiusA0, radiusM: radiusA0 * BOHR_RADIUS, probabilityPerA0: BOHR_RADIUS * radialProbability1s(radiusA0 * BOHR_RADIUS) };
  });
}
