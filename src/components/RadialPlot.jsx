import { useMemo } from 'react';
import {
  createRadialCdf, hydrogenicRadialDensity, radiusAtCdf,
} from '../physics/hydrogen/orbitalMath.js';
import { radialNodes } from '../physics/radialNodes.js';
import { orbitalLetter } from '../physics/states.js';

const WIDTH = 520;
const HEIGHT = 230;
const PAD = { left: 10, right: 14, top: 14, bottom: 42 };
const SAMPLES = 200;
const COLORS = { first: '#5b82f0', second: '#f0883a' };

function buildCurves(curves, nuclearCharge) {
  const tables = curves.map(curve => createRadialCdf(curve.n, curve.l, 2048, nuclearCharge));
  const maxRadius = Math.max(1, ...tables.map(table => radiusAtCdf(table, 0.995) * 1.08));
  const series = curves.map(curve => {
    const values = Array.from({ length: SAMPLES + 1 }, (_, i) => (
      hydrogenicRadialDensity(curve.n, curve.l, maxRadius * i / SAMPLES, nuclearCharge)
    ));
    return { ...curve, values, nodes: radialNodes(curve.n, curve.l, nuclearCharge, maxRadius) };
  });
  const peak = Math.max(...series.flatMap(item => item.values)) || 1;
  return { series, maxRadius, peak };
}

function plural(count, word) {
  return `${count} ${word}${count === 1 ? '' : 's'}`;
}

function niceStep(range) {
  const rough = range / 4;
  const power = 10 ** Math.floor(Math.log10(rough));
  const scaled = rough / power;
  return (scaled < 1.5 ? 1 : scaled < 3.5 ? 2 : scaled < 7.5 ? 5 : 10) * power;
}

/** r²R² against r, with radial nodes marked; a second state is drawn dashed. */
export default function RadialPlot({ curves, nuclearCharge }) {
  const key = curves.map(curve => `${curve.n},${curve.l}`).join('|');
  const model = useMemo(() => buildCurves(curves, nuclearCharge), [key, nuclearCharge]); // eslint-disable-line react-hooks/exhaustive-deps
  const plotWidth = WIDTH - PAD.left - PAD.right;
  const plotHeight = HEIGHT - PAD.top - PAD.bottom;
  const x = r => PAD.left + (r / model.maxRadius) * plotWidth;
  const y = value => PAD.top + plotHeight * (1 - value / model.peak);
  const primary = model.series[0];
  const step = niceStep(model.maxRadius);
  const ticks = [];
  for (let r = 0; r <= model.maxRadius; r += step) ticks.push(r);
  const radialCount = primary.n - primary.l - 1;

  return <figure className="radial-plot">
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`Radial probability of ${primary.n}${orbitalLetter(primary.l)}: ${plural(radialCount, 'radial node')} and ${plural(primary.l, 'angular node')}`}>
      <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y(0)} y2={y(0)} className="axis-line"/>
      {ticks.map(r => <g key={r}>
        <line x1={x(r)} x2={x(r)} y1={y(0)} y2={y(0) + 4} className="axis-line"/>
        <text x={x(r)} y={y(0) + 18} textAnchor="middle" className="plot-text">{Number(r.toFixed(2))}</text>
      </g>)}
      <text x={PAD.left + plotWidth / 2} y={HEIGHT - 6} textAnchor="middle" className="plot-text">distance from the nucleus, r (a₀)</text>
      {model.series.map((item, index) => {
        const color = COLORS[item.role] ?? COLORS.first;
        const path = item.values.map((value, i) => `${i === 0 ? 'M' : 'L'}${x(model.maxRadius * i / SAMPLES).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
        return <g key={`${item.n}-${item.l}-${index}`}>
          {index === 0 && <path d={`${path} L${x(model.maxRadius)},${y(0)} L${x(0)},${y(0)} Z`} fill={color} opacity="0.1"/>}
          <path d={path} fill="none" stroke={color} strokeWidth="2" strokeDasharray={index > 0 ? '6 4' : undefined}/>
          {item.nodes.map(node => <g key={node}>
            <line x1={x(node)} x2={x(node)} y1={y(0)} y2={y(0) - 14} stroke={color} strokeWidth="1.5"/>
            <circle cx={x(node)} cy={y(0)} r="3" fill="var(--page)" stroke={color} strokeWidth="1.5"/>
          </g>)}
        </g>;
      })}
    </svg>
    <figcaption>
      <span className="radial-key">
        {model.series.map((item, index) => <span key={`${item.n}-${item.l}-${index}`}>
          <i className={`key-line${index > 0 ? ' dashed' : ''}`} style={{ '--key-color': COLORS[item.role] ?? COLORS.first }}/>{item.n}{orbitalLetter(item.l)}
        </span>)}
      </span>
      Chance of finding the electron at each distance. The {primary.n}{orbitalLetter(primary.l)} orbital has {plural(radialCount, 'radial node')} (circles) and {plural(primary.l, 'angular node')}.
    </figcaption>
  </figure>;
}
