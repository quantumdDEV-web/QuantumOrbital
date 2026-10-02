/** Closed form integral of 4 r²/a0³ exp(-2r/a0) from zero to R. */
export function probabilityInsideRadius1s(radius, a0) {
  if (radius < 0 || a0 <= 0) throw new RangeError('Radius must be non-negative and a0 positive');
  const x = radius / a0;
  return 1 - Math.exp(-2 * x) * (1 + 2 * x + 2 * x * x);
}
