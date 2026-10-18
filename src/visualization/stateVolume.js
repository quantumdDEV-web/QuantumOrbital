import { associatedLegendre, generalizedLaguerre } from '../physics/hydrogen/orbitalMath.js';
import { hydrogenicGridExtent } from './orbitalVolume.js';

const POINT_COUNT = 30000;

function logFactorial(value) {
  let result = 0;
  for (let i = 2; i <= value; i += 1) result += Math.log(i);
  return result;
}

/** Grid half-width (a₀) that frames every term of the state, using the reference k = 2 rule. */
export function stateExtent(groups, nuclearCharge = 1) {
  let extent = 0;
  for (const group of groups) {
    for (const term of group.terms) {
      extent = Math.max(extent, hydrogenicGridExtent(group.n, term.l, nuclearCharge));
    }
  }
  return extent;
}

/** Volume resolution tuned to the highest principal quantum number in the state. */
export function stateGridSize(groups) {
  const highest = Math.max(...groups.map(group => group.n));
  return highest <= 3 ? 72 : highest <= 5 ? 88 : 96;
}

const float32 = new Float32Array(1);
const uint32 = new Uint32Array(float32.buffer);

/** IEEE-754 binary16 encoding with round-to-nearest; NaN becomes 0 and overflow clamps to ±65504. */
export function toHalfFloat(value) {
  if (Number.isNaN(value)) return 0;
  float32[0] = value;
  const bits = uint32[0];
  const sign = (bits >>> 16) & 0x8000;
  const exponent = ((bits >>> 23) & 0xff) - 127 + 15;
  const mantissa = bits & 0x7fffff;
  if (exponent >= 31) return sign | 0x7bff;
  if (exponent <= 0) {
    if (exponent < -10) return sign;
    const full = mantissa | 0x800000;
    const shift = 14 - exponent;
    let half = full >> shift;
    if ((full >> (shift - 1)) & 1) half += 1;
    return sign | half;
  }
  let half = sign | (exponent << 10) | (mantissa >> 13);
  if (mantissa & 0x1000) half += 1;
  if ((half & 0x7fff) >= 0x7c00) half = sign | 0x7bff;
  return half;
}

export function fromHalfFloat(half) {
  const sign = half & 0x8000 ? -1 : 1;
  const exponent = (half >> 10) & 0x1f;
  const mantissa = half & 0x3ff;
  if (exponent === 0) return sign * 2 ** -14 * (mantissa / 1024);
  if (exponent === 31) return mantissa ? NaN : sign * Infinity;
  return sign * 2 ** (exponent - 15) * (1 + mantissa / 1024);
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Pointwise evaluator for one energy group: ψ_group(x, y, z) as complex output
 * written to out[0] (real) and out[1] (imaginary), in a₀^(-3/2).
 */
export function createGroupEvaluator(group, nuclearCharge = 1) {
  const { n, terms } = group;
  const radialLs = [...new Set(terms.map(term => term.l))];
  const radialSpecs = radialLs.map(l => {
    const order = n - l - 1;
    const normalization = Math.exp(1.5 * Math.log(2 * nuclearCharge / n)
      + 0.5 * (logFactorial(order) - Math.log(2 * n) - logFactorial(n + l)));
    return { l, order, normalization };
  });
  const legendreKeys = [];
  const termSpecs = terms.map(term => {
    const order = Math.abs(term.m);
    const key = `${term.l},${order}`;
    let legendreIndex = legendreKeys.indexOf(key);
    if (legendreIndex < 0) {
      legendreKeys.push(key);
      legendreIndex = legendreKeys.length - 1;
    }
    const angular = Math.sqrt((2 * term.l + 1) / (4 * Math.PI)
      * Math.exp(logFactorial(term.l - order) - logFactorial(term.l + order)));
    const phaseSign = term.m < 0 && order % 2 ? -1 : 1;
    return {
      m: term.m,
      re: term.re,
      im: term.im,
      scale: phaseSign * angular,
      radialIndex: radialLs.indexOf(term.l),
      legendreIndex,
    };
  });
  const legendreSpecs = legendreKeys.map(key => {
    const [l, order] = key.split(',').map(Number);
    return { l, order };
  });
  const radialValues = new Float64Array(radialSpecs.length);
  const legendreValues = new Float64Array(legendreSpecs.length);

  return (x, y, z, out) => {
    const radius = Math.hypot(x, y, z);
    const rho = 2 * nuclearCharge * radius / n;
    const exponential = Math.exp(-rho / 2);
    for (let i = 0; i < radialSpecs.length; i += 1) {
      const { l, order, normalization } = radialSpecs[i];
      radialValues[i] = normalization * exponential * rho ** l
        * generalizedLaguerre(order, 2 * l + 1, rho);
    }
    const cosine = radius === 0 ? 1 : Math.max(-1, Math.min(1, z / radius));
    for (let i = 0; i < legendreSpecs.length; i += 1) {
      legendreValues[i] = associatedLegendre(legendreSpecs[i].l, legendreSpecs[i].order, cosine);
    }
    const azimuth = Math.atan2(y, x);
    let real = 0;
    let imaginary = 0;
    for (let i = 0; i < termSpecs.length; i += 1) {
      const spec = termSpecs[i];
      const amplitude = spec.scale * legendreValues[spec.legendreIndex] * radialValues[spec.radialIndex];
      const angle = spec.m * azimuth;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      real += amplitude * (spec.re * cos - spec.im * sin);
      imaginary += amplitude * (spec.re * sin + spec.im * cos);
    }
    out[0] = real;
    out[1] = imaginary;
  };
}

/** Evaluate ψ for a whole state at t = 0 (relative phase 0) at one point. */
export function evaluateState(groups, nuclearCharge, x, y, z) {
  const out = new Float64Array(2);
  let real = 0;
  let imaginary = 0;
  for (const group of groups) {
    createGroupEvaluator(group, nuclearCharge)(x, y, z, out);
    real += out[0];
    imaginary += out[1];
  }
  return { real, imaginary };
}

/**
 * Sample the complex field of a state on a cubic grid and pack everything the
 * GPU needs:
 *  - psi: RGBA half floats (Re ψ_A, Im ψ_A, Re ψ_B, Im ψ_B) scaled by 1/√vmax,
 *    so the shader's |ψ|² is already display-normalized (q99.9 of the field,
 *    taken as the maximum over four relative phases when two energies mix).
 *  - levels[p]: normalized density of the surface enclosing p % of the grid
 *    probability at relative phase 0.
 *  - points / pointValues: Monte Carlo samples drawn from |ψ|² at phase 0.
 */
export function buildStateVolume({
  groups,
  nuclearCharge = 1,
  size = 80,
  extent,
  pointCount = POINT_COUNT,
  seed = 20260418,
}) {
  if (!Array.isArray(groups) || groups.length < 1 || groups.length > 2) {
    throw new RangeError('Expected one or two energy groups');
  }
  if (!Number.isInteger(size) || size < 16) throw new RangeError('Volume grid must have at least 16 samples per side');
  const radius = extent ?? stateExtent(groups, nuclearCharge);
  const hasSecond = groups.length === 2;
  const samples = size ** 3;
  const evaluators = groups.map(group => createGroupEvaluator(group, nuclearCharge));
  const psiA = new Float32Array(samples * 2);
  const psiB = hasSecond ? new Float32Array(samples * 2) : null;
  const scratch = new Float64Array(2);

  for (let zIndex = 0; zIndex < size; zIndex += 1) {
    const z = ((zIndex + 0.5) / size * 2 - 1) * radius;
    for (let yIndex = 0; yIndex < size; yIndex += 1) {
      const y = ((yIndex + 0.5) / size * 2 - 1) * radius;
      for (let xIndex = 0; xIndex < size; xIndex += 1) {
        const x = ((xIndex + 0.5) / size * 2 - 1) * radius;
        const index = xIndex + size * (yIndex + size * zIndex);
        evaluators[0](x, y, z, scratch);
        psiA[index * 2] = scratch[0];
        psiA[index * 2 + 1] = scratch[1];
        if (hasSecond) {
          evaluators[1](x, y, z, scratch);
          psiB[index * 2] = scratch[0];
          psiB[index * 2 + 1] = scratch[1];
        }
      }
    }
  }

  const density0 = new Float32Array(samples);
  let scaleField = density0;
  if (!hasSecond) {
    for (let i = 0; i < samples; i += 1) {
      density0[i] = psiA[i * 2] ** 2 + psiA[i * 2 + 1] ** 2;
    }
  } else {
    scaleField = new Float32Array(samples);
    const rotations = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let i = 0; i < samples; i += 1) {
      const reA = psiA[i * 2];
      const imA = psiA[i * 2 + 1];
      const reB = psiB[i * 2];
      const imB = psiB[i * 2 + 1];
      density0[i] = (reA + reB) ** 2 + (imA + imB) ** 2;
      let peak = 0;
      for (const [cos, sin] of rotations) {
        const re = reA + cos * reB - sin * imB;
        const im = imA + cos * imB + sin * reB;
        peak = Math.max(peak, re * re + im * im);
      }
      scaleField[i] = peak;
    }
  }

  const orderedScale = scaleField.slice().sort();
  const maximum = orderedScale[orderedScale.length - 1];
  const quantilePosition = (orderedScale.length - 1) * 0.999;
  const lowerIndex = Math.floor(quantilePosition);
  const fraction = quantilePosition - lowerIndex;
  const interpolated = orderedScale[lowerIndex] * (1 - fraction) + orderedScale[lowerIndex + 1] * fraction;
  const vmax = interpolated || maximum || 1;

  const orderedDensity = hasSecond ? density0.slice().sort() : orderedScale;
  let densitySum = 0;
  for (let i = 0; i < samples; i += 1) densitySum += density0[i];
  const levels = new Float32Array(100);
  levels[0] = orderedDensity[samples - 1] / vmax;
  let cumulative = 0;
  let percent = 1;
  for (let i = samples - 1; i >= 0 && percent <= 99; i -= 1) {
    cumulative += orderedDensity[i];
    while (percent <= 99 && cumulative >= densitySum * percent / 100) {
      levels[percent] = orderedDensity[i] / vmax;
      percent += 1;
    }
  }

  const inverseRoot = 1 / Math.sqrt(vmax);
  const psi = new Uint16Array(samples * 4);
  for (let i = 0; i < samples; i += 1) {
    psi[i * 4] = toHalfFloat(psiA[i * 2] * inverseRoot);
    psi[i * 4 + 1] = toHalfFloat(psiA[i * 2 + 1] * inverseRoot);
    if (hasSecond) {
      psi[i * 4 + 2] = toHalfFloat(psiB[i * 2] * inverseRoot);
      psi[i * 4 + 3] = toHalfFloat(psiB[i * 2 + 1] * inverseRoot);
    }
  }

  const points = new Float32Array(pointCount * 3);
  const pointValues = new Float32Array(pointCount * 2);
  if (densitySum > 0 && pointCount > 0) {
    const cumulativeDensity = new Float64Array(samples + 1);
    for (let i = 0; i < samples; i += 1) cumulativeDensity[i + 1] = cumulativeDensity[i] + density0[i];
    const total = cumulativeDensity[samples];
    const random = mulberry32(seed);
    for (let p = 0; p < pointCount; p += 1) {
      const target = random() * total;
      let low = 0;
      let high = samples - 1;
      while (low < high) {
        const mid = (low + high) >> 1;
        if (cumulativeDensity[mid + 1] > target) high = mid;
        else low = mid + 1;
      }
      const xIndex = low % size;
      const yIndex = Math.floor(low / size) % size;
      const zIndex = Math.floor(low / (size * size));
      points[p * 3] = (xIndex + random()) / size * 2 - 1;
      points[p * 3 + 1] = (yIndex + random()) / size * 2 - 1;
      points[p * 3 + 2] = (zIndex + random()) / size * 2 - 1;
      const re = psiA[low * 2] + (hasSecond ? psiB[low * 2] : 0);
      const im = psiA[low * 2 + 1] + (hasSecond ? psiB[low * 2 + 1] : 0);
      pointValues[p * 2] = density0[low] / vmax;
      pointValues[p * 2 + 1] = Math.atan2(im, re);
    }
  }

  const voxelWidth = 2 * radius / size;
  return {
    psi,
    size,
    extent: radius,
    vmax,
    maximum,
    hasSecond,
    capturedProbability: densitySum * voxelWidth ** 3,
    levels,
    points,
    pointValues,
  };
}
