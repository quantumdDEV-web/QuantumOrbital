/**
 * Orbital state descriptions built from the complex hydrogenic basis |n l m>.
 *
 * Every displayable state is a linear combination of orthonormal complex
 * eigenstates, grouped by principal quantum number (one group per energy):
 *
 *   ψ(t) = Σ_groups e^{-iE_n t} Σ_terms c_i R_{n l_i}(r) Y_{l_i}^{m_i}(θ, φ)
 *
 * - Complex orbitals are a single term.
 * - Real orbitals (p_x, d_xy, ...) are ±m combinations at one energy.
 * - Hybrids (sp, sp², sp³) are s/p real-orbital combinations at one energy.
 * - Superpositions of two states with different n beat in time.
 */

const SQRT1_2 = Math.SQRT1_2;
const L_LETTERS = ['s', 'p', 'd', 'f', 'g', 'h', 'i', 'k'];

export const HYBRID_TYPES = Object.freeze({
  sp: { label: 'sp', count: 2 },
  sp2: { label: 'sp²', count: 3 },
  sp3: { label: 'sp³', count: 4 },
});

export function orbitalLetter(l) {
  return L_LETTERS[l] ?? String(l);
}

/** Energy of a hydrogenic level in hartree: E_n = -Z²/(2n²). */
export function hydrogenicEnergyHartree(n, nuclearCharge = 1) {
  return -(nuclearCharge ** 2) / (2 * n * n);
}

function assertQuantumNumbers(n, l, m) {
  if (!Number.isInteger(n) || !Number.isInteger(l) || !Number.isInteger(m)
      || n < 1 || l < 0 || l >= n || Math.abs(m) > l) {
    throw new RangeError(`Invalid quantum numbers n=${n}, l=${l}, m=${m}`);
  }
}

/**
 * Real spherical harmonic S_lm as complex-basis terms, using the standard
 * convention where p_x, p_y, p_z point along +x, +y, +z:
 *   m > 0: ((-1)^m Y_l^m + Y_l^-m) / √2        (cosine type)
 *   m < 0: ((-1)^k Y_l^k - Y_l^-k) / (i√2), k=|m|  (sine type)
 */
export function realOrbitalTerms(l, m) {
  if (m === 0) return [{ l, m: 0, re: 1, im: 0 }];
  const k = Math.abs(m);
  const sign = k % 2 ? -1 : 1;
  if (m > 0) {
    return [
      { l, m: k, re: sign * SQRT1_2, im: 0 },
      { l, m: -k, re: SQRT1_2, im: 0 },
    ];
  }
  return [
    { l, m: k, re: 0, im: -sign * SQRT1_2 },
    { l, m: -k, re: 0, im: SQRT1_2 },
  ];
}

function complexOrbitalTerms(l, m) {
  return [{ l, m, re: 1, im: 0 }];
}

function addScaled(target, terms, scale) {
  for (const term of terms) {
    const key = `${term.l},${term.m}`;
    const entry = target.get(key) ?? { l: term.l, m: term.m, re: 0, im: 0 };
    entry.re += term.re * scale;
    entry.im += term.im * scale;
    target.set(key, entry);
  }
}

function termsFromMap(map) {
  return [...map.values()].filter(term => Math.hypot(term.re, term.im) > 1e-12);
}

/** Coefficients (s, p_x, p_y, p_z) of hybrid number `index` for sp, sp², sp³. */
export function hybridCoefficients(type, index) {
  const spec = HYBRID_TYPES[type];
  if (!spec) throw new RangeError(`Unknown hybrid type ${type}`);
  if (!Number.isInteger(index) || index < 0 || index >= spec.count) {
    throw new RangeError(`Hybrid index ${index} out of range for ${type}`);
  }
  if (type === 'sp') {
    return { s: SQRT1_2, px: 0, py: 0, pz: index === 0 ? SQRT1_2 : -SQRT1_2 };
  }
  if (type === 'sp2') {
    const angle = index * 2 * Math.PI / 3;
    const p = Math.sqrt(2 / 3);
    return { s: Math.sqrt(1 / 3), px: p * Math.cos(angle), py: p * Math.sin(angle), pz: 0 };
  }
  const signs = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]][index];
  return { s: 0.5, px: 0.5 * signs[0], py: 0.5 * signs[1], pz: 0.5 * signs[2] };
}

function hybridTerms(coefficients) {
  const map = new Map();
  addScaled(map, realOrbitalTerms(0, 0), coefficients.s);
  addScaled(map, realOrbitalTerms(1, 1), coefficients.px);
  addScaled(map, realOrbitalTerms(1, -1), coefficients.py);
  addScaled(map, realOrbitalTerms(1, 0), coefficients.pz);
  return termsFromMap(map);
}

const REAL_NAMES = {
  '0,0': 's',
  '1,0': 'p_z', '1,1': 'p_x', '1,-1': 'p_y',
  '2,0': 'd_z²', '2,1': 'd_xz', '2,-1': 'd_yz', '2,2': 'd_x²−y²', '2,-2': 'd_xy',
};

export function realOrbitalName(n, l, m) {
  const named = REAL_NAMES[`${l},${m}`];
  if (named) return `${n}${named}`;
  return `${n}${orbitalLetter(l)} ${m >= 0 ? 'cos' : 'sin'} ${Math.abs(m)}φ`;
}

function describe(kind, n, l, m) {
  if (kind === 'real') return realOrbitalName(n, l, m);
  return `${n}${orbitalLetter(l)} (m = ${m > 0 ? `+${m}` : m})`;
}

/**
 * Build the energy-grouped state description for the viewer and the worker.
 *
 * config: { n, l, m, kind: 'complex' | 'real' | 'hybrid', hybrid, hybridIndex,
 *           second?: { enabled, n, l, m }, mix }
 * returns { groups: [{ n, terms: [{ l, m, re, im }] }], label, hasSecond }
 */
export function buildStateGroups(config) {
  const { n, l, m, kind = 'complex' } = config;
  if (kind === 'hybrid') {
    if (n < 2) throw new RangeError('Hybrid orbitals need n ≥ 2');
    const type = config.hybrid ?? 'sp3';
    const index = config.hybridIndex ?? 0;
    const terms = hybridTerms(hybridCoefficients(type, index));
    return {
      groups: [{ n, terms }],
      label: `${HYBRID_TYPES[type].label} hybrid, lobe ${index + 1} (n = ${n})`,
      hasSecond: false,
    };
  }

  assertQuantumNumbers(n, l, m);
  const makeTerms = kind === 'real' ? realOrbitalTerms : complexOrbitalTerms;
  const first = config.second;
  const second = first?.enabled ? first : null;
  const sameState = second && second.n === n && second.l === l && second.m === m;
  if (!second || sameState) {
    return {
      groups: [{ n, terms: makeTerms(l, m) }],
      label: describe(kind, n, l, m),
      hasSecond: false,
    };
  }

  assertQuantumNumbers(second.n, second.l, second.m);
  const mix = Math.min(1, Math.max(0, config.mix ?? 0.5));
  const weightA = Math.sqrt(1 - mix);
  const weightB = Math.sqrt(mix);
  const label = `${describe(kind, n, l, m)} + ${describe(kind, second.n, second.l, second.m)}`;

  if (second.n === n) {
    const merged = new Map();
    addScaled(merged, makeTerms(l, m), weightA);
    addScaled(merged, makeTerms(second.l, second.m), weightB);
    return { groups: [{ n, terms: termsFromMap(merged) }], label, hasSecond: false };
  }

  const groupA = new Map();
  const groupB = new Map();
  addScaled(groupA, makeTerms(l, m), weightA);
  addScaled(groupB, makeTerms(second.l, second.m), weightB);
  return {
    groups: [
      { n, terms: termsFromMap(groupA) },
      { n: second.n, terms: termsFromMap(groupB) },
    ],
    label,
    hasSecond: true,
  };
}

/** Sum of |c|² over all terms of all groups; 1 for a normalized state. */
export function stateNorm(groups) {
  let total = 0;
  for (const group of groups) {
    for (const term of group.terms) total += term.re * term.re + term.im * term.im;
  }
  return total;
}

/** Inner product of two term lists in the same orthonormal complex basis. */
export function termInnerProduct(termsA, termsB) {
  const lookup = new Map(termsB.map(term => [`${term.l},${term.m}`, term]));
  let re = 0;
  let im = 0;
  for (const a of termsA) {
    const b = lookup.get(`${a.l},${a.m}`);
    if (!b) continue;
    // conj(a) * b
    re += a.re * b.re + a.im * b.im;
    im += a.re * b.im - a.im * b.re;
  }
  return { re, im };
}
