import { createHydrogenicDensityEvaluator } from '../physics/hydrogen/orbitalMath.js';

export function hydrogenicGridExtent(n, l, nuclearCharge = 1, framing = 2) {
  if (!Number.isInteger(n) || !Number.isInteger(l) || !Number.isInteger(nuclearCharge)
      || n < 1 || l < 0 || l >= n || nuclearCharge < 1 || framing <= 0) {
    throw new RangeError('Expected n ≥ 1, 0 ≤ l < n, integer Z ≥ 1, and positive framing');
  }
  return framing * (3 * n * n - l * (l + 1)) / (2 * nuclearCharge);
}

/** Samples the normalized analytical field at voxel centers and packs its q99.9 scale. */
export function buildOrbitalVolume({ n, l, m, nuclearCharge = 1, size = 80, extent }) {
  if (!Number.isInteger(size) || size < 16) throw new RangeError('Volume grid must have at least 16 samples per side');
  const radius = extent ?? hydrogenicGridExtent(n, l, nuclearCharge);
  const evaluateDensity = createHydrogenicDensityEvaluator(n, l, m, nuclearCharge);
  const samples = size ** 3;
  const field = new Float32Array(samples);
  let maximum = 0;
  let densitySum = 0;

  for (let zIndex = 0; zIndex < size; zIndex += 1) {
    const z = ((zIndex + 0.5) / size * 2 - 1) * radius;
    for (let yIndex = 0; yIndex < size; yIndex += 1) {
      const y = ((yIndex + 0.5) / size * 2 - 1) * radius;
      for (let xIndex = 0; xIndex < size; xIndex += 1) {
        const x = ((xIndex + 0.5) / size * 2 - 1) * radius;
        const density = evaluateDensity(x, y, z);
        const index = xIndex + size * (yIndex + size * zIndex);
        field[index] = density;
        maximum = Math.max(maximum, density);
        densitySum += density;
      }
    }
  }

  const ordered = field.slice();
  ordered.sort();
  const quantilePosition = (ordered.length - 1) * 0.999;
  const lowerIndex = Math.floor(quantilePosition);
  const fraction = quantilePosition - lowerIndex;
  const vmax = ordered[lowerIndex] * (1 - fraction) + ordered[lowerIndex + 1] * fraction || maximum;
  // Store a normalized 8-bit field so the README previews can use the same
  // display scale and the WebGL texture can use broadly supported R8 filtering.
  const density = new Uint8Array(samples);
  for (let index = 0; index < samples; index += 1) {
    density[index] = Math.round(Math.min(1, field[index] / vmax) * 255);
  }

  const voxelWidth = 2 * radius / size;
  const capturedProbability = densitySum * voxelWidth ** 3;
  return { density, size, extent: radius, vmax, maximum, capturedProbability };
}
