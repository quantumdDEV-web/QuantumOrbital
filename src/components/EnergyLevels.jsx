import { useMemo, useState } from 'react';
import { orbitalLetter } from '../physics/states.js';
import {
  allowedTransitions, isDipoleAllowed, levelEnergyEv, transitionInfo, transitionKey,
} from '../physics/transitions.js';

const MAX_N = 5;
const WIDTH = 560;
const HEIGHT = 340;
const LEFT = 92;
const RIGHT = 14;
const TOP = 40;
const SPAN = 280;
const BAR_HALF = 31;
const MIN_LABEL_GAP = 14;
const IDLE_LINE = '#9aa1ab';
const LEVEL_COLOR = '#5f6670';
const FIRST_COLOR = '#2347b8';
const SECOND_COLOR = '#c2570c';

// Real energies go as 1/n², which squeezes every level above n = 2 into a few pixels.
// Spacing here follows 1/n instead; the labels still give the true energies.
const levelY = n => TOP + SPAN / n;
const columnX = l => LEFT + ((WIDTH - LEFT - RIGHT) / MAX_N) * (l + 0.5);

export function formatEnergy(ev) {
  const sign = ev < 0 ? '−' : '';
  const size = Math.abs(ev);
  const digits = size < 100 ? 2 : size < 1000 ? 1 : 0;
  return `${sign}${size.toFixed(digits)}`;
}

function formatWavelength(nm) {
  if (nm >= 1000) return `${(nm / 1000).toFixed(2)} µm`;
  return `${nm.toFixed(nm < 100 ? 2 : 1)} nm`;
}

function formatPeriod(fs) {
  if (fs >= 1000) return `${(fs / 1000).toFixed(2)} ps`;
  return `${fs.toFixed(fs < 10 ? 2 : 1)} fs`;
}

/** Labels keep their order along the axis but are nudged apart where the levels crowd together. */
function axisLabelPositions() {
  const positions = [];
  let previous = -Infinity;
  for (let n = MAX_N; n >= 1; n -= 1) {
    const y = Math.max(levelY(n), previous + MIN_LABEL_GAP);
    positions[n] = y;
    previous = y;
  }
  return positions;
}

function arrowHead(x1, y1, x2, y2, size = 5.5) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const spread = 0.42;
  const points = [
    [x2, y2],
    [x2 - size * Math.cos(angle - spread), y2 - size * Math.sin(angle - spread)],
    [x2 - size * Math.cos(angle + spread), y2 - size * Math.sin(angle + spread)],
  ];
  return points.map(point => point.map(value => value.toFixed(1)).join(',')).join(' ');
}

function describeLevel(level) {
  return `${level.n}${orbitalLetter(level.l)}`;
}

function PhotonSummary({ info, displaySeconds, slowed }) {
  const slowdownExponent = slowed ? Math.round(Math.log10(displaySeconds / (info.periodFs * 1e-15))) : null;
  return <>
    <h3 className="readout-title">{describeLevel(info.upper)} → {describeLevel(info.lower)}</h3>
    <p className="readout-sub">
      {info.series ? `${info.series} series` : `Ends on n = ${info.lower.n}`}, {info.region.toLowerCase()} light
    </p>
    <dl className="readout-facts">
      <div><dt>Photon energy</dt><dd>{info.energyEv.toFixed(info.energyEv < 100 ? 3 : 1)} eV</dd></div>
      <div><dt>Wavelength</dt><dd>{info.color && <span className="swatch" style={{ backgroundColor: info.color }}/>}{formatWavelength(info.wavelengthNm)}</dd></div>
      <div><dt>Frequency</dt><dd>{info.frequencyThz.toFixed(info.frequencyThz < 100 ? 1 : 0)} THz</dd></div>
      <div><dt>Cloud repeats every</dt><dd>{formatPeriod(info.periodFs)}</dd></div>
    </dl>
    {slowed && <p className="readout-note">
      In the viewer this plays about 10<sup>{slowdownExponent}</sup> times slower than it really happens.
    </p>}
  </>;
}

/**
 * Energy diagram laid out by ℓ (a Grotrian diagram). Clicking a level shows that orbital;
 * clicking an arrow sets up the two-state superposition for that transition, whose density
 * oscillates at the photon frequency.
 */
export default function EnergyLevels({
  nuclearCharge, first, second, displaySeconds, onSelectLevel, onSelectTransition,
}) {
  const [hovered, setHovered] = useState(null);
  const transitions = useMemo(() => allowedTransitions(MAX_N).map(item => ({
    ...item,
    key: transitionKey(item.upper, item.lower),
    info: transitionInfo(item.upper, item.lower, nuclearCharge),
  })), [nuclearCharge]);
  const labels = useMemo(axisLabelPositions, []);

  let selected = null;
  let pairProblem = '';
  if (second) {
    const [upper, lower] = first.n >= second.n ? [first, second] : [second, first];
    if (upper.n === lower.n) pairProblem = 'These two levels have the same energy here, so the mixture stays the same over time.';
    else if (!isDipoleAllowed(upper.l, lower.l)) pairProblem = `No photon is emitted directly between ${describeLevel(upper)} and ${describeLevel(lower)}: ℓ has to change by exactly 1.`;
    else selected = transitionKey(upper, lower);
  }

  const shown = transitions.find(item => item.key === (hovered ?? selected)) ?? null;
  const ordered = [...transitions].sort((a, b) => {
    const rank = item => (item.key === selected ? 2 : item.key === hovered ? 3 : item.info.color ? 1 : 0);
    return rank(a) - rank(b);
  });

  const levelState = (n, l) => {
    if (first.n === n && first.l === l) return 'first';
    if (second && second.n === n && second.l === l) return 'second';
    return 'idle';
  };
  const levelColor = state => (state === 'first' ? FIRST_COLOR : state === 'second' ? SECOND_COLOR : LEVEL_COLOR);

  return <div className="energy-levels">
    <div className="energy-diagram">
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="group" aria-label="Energy levels of the electron, arranged by subshell. Arrows are allowed transitions.">
      <text x={LEFT - 10} y={14} textAnchor="end" className="plot-text">Energy (eV)</text>
      {Array.from({ length: MAX_N }, (_, l) => <text key={l} x={columnX(l)} y={14} textAnchor="middle" className="plot-text plot-text-strong">{orbitalLetter(l)}</text>)}

      <line x1={LEFT} x2={WIDTH - RIGHT} y1={TOP} y2={TOP} className="limit-line"/>
      <text x={WIDTH - RIGHT} y={TOP - 7} textAnchor="end" className="plot-text">free electron, 0 eV</text>

      {Array.from({ length: MAX_N }, (_, index) => {
        const n = index + 1;
        return <g key={n}>
          <line x1={LEFT - 4} x2={WIDTH - RIGHT} y1={levelY(n)} y2={levelY(n)} className="guide-line"/>
          <text x={4} y={labels[n] + 4} className="plot-text plot-text-strong">n = {n}</text>
          <text x={LEFT - 10} y={labels[n] + 4} textAnchor="end" className="plot-text">{formatEnergy(levelEnergyEv(n, nuclearCharge))}</text>
        </g>;
      })}

      {ordered.map(({ key, upper, lower, info }) => {
        const x1 = columnX(upper.l);
        const y1 = levelY(upper.n) + 2;
        const x2 = columnX(lower.l);
        const y2 = levelY(lower.n) - 2;
        const active = key === selected || key === hovered;
        const color = info.color ?? IDLE_LINE;
        const dim = (hovered || selected) && !active;
        return <g
          key={key}
          className="transition"
          role="button"
          tabIndex={0}
          aria-label={`${describeLevel(upper)} to ${describeLevel(lower)}, ${formatWavelength(info.wavelengthNm)}${key === selected ? ', selected' : ''}`}
          aria-pressed={key === selected}
          onClick={() => onSelectTransition(upper, lower)}
          onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelectTransition(upper, lower); } }}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(key)}
          onBlur={() => setHovered(null)}
        >
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={active ? 2.6 : info.color ? 1.5 : 1} opacity={active ? 1 : dim ? 0.18 : info.color ? 0.85 : 0.55}/>
          <polygon points={arrowHead(x1, y1, x2, y2, active ? 7 : 5)} fill={color} opacity={active ? 1 : dim ? 0.18 : info.color ? 0.85 : 0.55}/>
          <line x1={x1} y1={y1} x2={x2} y2={y2} className="hit-line"/>
        </g>;
      })}

      {Array.from({ length: MAX_N }, (_, index) => {
        const n = index + 1;
        return Array.from({ length: n }, (_, l) => {
          const state = levelState(n, l);
          const y = levelY(n);
          const x = columnX(l);
          return <g
            key={`${n}-${l}`}
            className="level"
            role="button"
            tabIndex={0}
            aria-label={`${describeLevel({ n, l })}, ${formatEnergy(levelEnergyEv(n, nuclearCharge))} eV${state === 'idle' ? '' : ', shown'}`}
            onClick={() => onSelectLevel(n, l)}
            onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelectLevel(n, l); } }}
          >
            <rect x={x - BAR_HALF} y={y - 8} width={BAR_HALF * 2} height={16} className="level-hit"/>
            <line x1={x - BAR_HALF} x2={x + BAR_HALF} y1={y} y2={y} stroke={levelColor(state)} strokeWidth={state === 'idle' ? 2.5 : 4} strokeLinecap="round"/>
            <title>{describeLevel({ n, l })}, {formatEnergy(levelEnergyEv(n, nuclearCharge))} eV</title>
          </g>;
        });
      })}
    </svg>
    <p className="diagram-note">Levels are spaced for readability, not to scale: the real gaps shrink quickly as n grows. The numbers give the true energies.</p>
    </div>

    <div className="transition-readout" aria-live="polite">
      {shown && <PhotonSummary info={shown.info} displaySeconds={displaySeconds} slowed={shown.key === selected}/>}
      {!shown && <>
        <h3 className="readout-title">{second ? `${describeLevel(first)} and ${describeLevel(second)}` : describeLevel(first)}</h3>
        {pairProblem
          ? <p className="readout-sub">{pairProblem}</p>
          : <p className="readout-sub">
            {formatEnergy(levelEnergyEv(first.n, nuclearCharge))} eV, so {Math.abs(levelEnergyEv(first.n, nuclearCharge)).toFixed(2)} eV would free the electron.
          </p>}
        <p className="readout-note">Click a level to draw that orbital. Click an arrow to watch the electron jump: the cloud swings back and forth at the photon&rsquo;s frequency.</p>
      </>}
    </div>
  </div>;
}
