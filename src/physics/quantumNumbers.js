import { ORBITALS } from './constants.js';

export function isValidQuantumNumbers(n, l, m) {
  return Number.isInteger(n) && Number.isInteger(l) && Number.isInteger(m) && n >= 1 && l >= 0 && l < n && Math.abs(m) <= l;
}

export function getImplementedOrbital(n, l, m) {
  return ORBITALS.find((orbital) => orbital.n === n && orbital.l === l && orbital.m === m) ?? null;
}
