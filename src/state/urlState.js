import { HYBRID_TYPES } from '../physics/states.js';

export const MAX_N = 8;
export const MAX_Z = 118;
export const RENDER_MODES = ['volume', 'surface', 'slice', 'points'];
export const COLOR_MODES = ['density', 'phase'];
export const ORBITAL_KINDS = ['complex', 'real', 'hybrid'];
export const SLICE_AXES = ['x', 'y', 'z'];

export const DEFAULT_STATE = Object.freeze({
  n: 3,
  l: 2,
  m: 1,
  nuclearCharge: 1,
  kind: 'complex',
  hybrid: 'sp3',
  hybridIndex: 0,
  second: Object.freeze({ enabled: false, n: 2, l: 1, m: 0 }),
  mix: 0.5,
  render: 'volume',
  color: 'density',
  isoPercent: 90,
  sliceAxis: 'z',
  slicePos: 0,
  speed: 1,
  exposure: 0,
});

const clamp = (value, low, high) => Math.min(high, Math.max(low, value));

function integer(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) ? parsed : fallback;
}

function number(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function oneOf(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

/** Clamp (n, l, m) to a physically valid triple, keeping as much of the input as possible. */
export function clampQuantumNumbers(n, l, m) {
  const validN = clamp(integer(n, 1), 1, MAX_N);
  const validL = clamp(integer(l, 0), 0, validN - 1);
  const validM = clamp(integer(m, 0), -validL, validL);
  return { n: validN, l: validL, m: validM };
}

/** Merge a partial state over the defaults and force every field into its valid range. */
export function sanitizeState(partial = {}) {
  const base = DEFAULT_STATE;
  const { n, l, m } = clampQuantumNumbers(partial.n ?? base.n, partial.l ?? base.l, partial.m ?? base.m);
  const secondInput = partial.second ?? base.second;
  const second = clampQuantumNumbers(secondInput.n ?? base.second.n, secondInput.l ?? base.second.l, secondInput.m ?? base.second.m);
  const hybrid = oneOf(partial.hybrid, Object.keys(HYBRID_TYPES), base.hybrid);
  return {
    n,
    l,
    m,
    nuclearCharge: clamp(integer(partial.nuclearCharge, base.nuclearCharge), 1, MAX_Z),
    kind: oneOf(partial.kind, ORBITAL_KINDS, base.kind),
    hybrid,
    hybridIndex: clamp(integer(partial.hybridIndex, base.hybridIndex), 0, HYBRID_TYPES[hybrid].count - 1),
    second: { enabled: Boolean(secondInput.enabled), ...second },
    mix: clamp(number(partial.mix, base.mix), 0, 1),
    render: oneOf(partial.render, RENDER_MODES, base.render),
    color: oneOf(partial.color, COLOR_MODES, base.color),
    isoPercent: clamp(Math.round(number(partial.isoPercent, base.isoPercent)), 50, 99),
    sliceAxis: oneOf(partial.sliceAxis, SLICE_AXES, base.sliceAxis),
    slicePos: clamp(number(partial.slicePos, base.slicePos), -1, 1),
    speed: clamp(number(partial.speed, base.speed), 0, 4),
    exposure: clamp(number(partial.exposure, base.exposure), 0, 2),
  };
}

/** The config handed to buildStateGroups: hybrids need n ≥ 2 and exclude superposition. */
export function physicsConfig(state) {
  const hybridPossible = state.kind === 'hybrid' && state.n >= 2;
  const kind = state.kind === 'hybrid' && !hybridPossible ? 'real' : state.kind;
  return {
    n: state.n,
    l: state.l,
    m: state.m,
    kind,
    hybrid: state.hybrid,
    hybridIndex: state.hybridIndex,
    second: kind === 'hybrid' ? undefined : state.second,
    mix: state.mix,
  };
}

const round = (value, digits) => Number(value.toFixed(digits));

/** Serialize the shareable parts of the state (and optionally the camera) for the URL hash. */
export function encodeState(state, camera) {
  const params = new URLSearchParams();
  params.set('n', state.n);
  params.set('l', state.l);
  params.set('m', state.m);
  params.set('z', state.nuclearCharge);
  params.set('k', state.kind);
  if (state.kind === 'hybrid') {
    params.set('hy', state.hybrid);
    params.set('hi', state.hybridIndex);
  }
  if (state.second.enabled && state.kind !== 'hybrid') {
    params.set('s2', `${state.second.n},${state.second.l},${state.second.m}`);
    params.set('mx', round(state.mix, 2));
    params.set('sd', round(state.speed, 2));
  }
  params.set('r', state.render);
  params.set('c', state.color);
  if (state.render === 'surface') params.set('iso', state.isoPercent);
  if (state.render === 'slice') {
    params.set('ax', state.sliceAxis);
    params.set('sp', round(state.slicePos, 3));
  }
  params.set('ex', round(state.exposure, 1));
  if (Array.isArray(camera) && camera.length === 3 && camera.every(Number.isFinite)) {
    params.set('cam', camera.map(value => round(value, 3)).join(','));
  }
  return params.toString();
}

/** Parse a URL hash (with or without the leading #) into a sanitized state and optional camera. */
export function decodeState(hash) {
  const params = new URLSearchParams(String(hash ?? '').replace(/^#/, ''));
  const partial = {};
  const read = (key, target, parse) => {
    if (params.has(key)) partial[target] = parse(params.get(key));
  };
  read('n', 'n', Number);
  read('l', 'l', Number);
  read('m', 'm', Number);
  read('z', 'nuclearCharge', Number);
  read('k', 'kind', String);
  read('hy', 'hybrid', String);
  read('hi', 'hybridIndex', Number);
  read('mx', 'mix', Number);
  read('sd', 'speed', Number);
  read('r', 'render', String);
  read('c', 'color', String);
  read('iso', 'isoPercent', Number);
  read('ax', 'sliceAxis', String);
  read('sp', 'slicePos', Number);
  read('ex', 'exposure', Number);
  if (params.has('s2')) {
    const [n, l, m] = params.get('s2').split(',').map(Number);
    partial.second = { enabled: true, n, l, m };
  }
  let camera = null;
  if (params.has('cam')) {
    const values = params.get('cam').split(',').map(Number);
    if (values.length === 3 && values.every(Number.isFinite)) camera = values;
  }
  return { state: sanitizeState(partial), camera };
}
