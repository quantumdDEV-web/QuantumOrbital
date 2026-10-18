import { useMemo } from 'react';
import {
  createRadialCdf, hydrogenicRadialDensity, radiusAtCdf,
} from '../physics/hydrogen/orbitalMath.js';
import { radialNodes } from '../physics/radialNodes.js';
import { orbitalLetter } from '../physics/states.js';

const WIDTH = 224;
const HEIGHT = 112;
const PAD = { left: 6, right: 6, top: 8, bottom: 20 };
const SAMPLES = 160;

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

/** r²|R_nl(r)|² against r, with radial nodes marked; extra curves are drawn dashed. */
export default function RadialPlot({ curves, nuclearCharge }) {
  const key = curves.map(curve => `${curve.n},${curve.l}`).join('|');
  const model = useMemo(() => buildCurves(curves, nuclearCharge), [key, nuclearCharge]); // eslint-disable-line react-hooks/exhaustive-deps
  const plotWidth = WIDTH - PAD.left - PAD.right;
  const plotHeight = HEIGHT - PAD.top - PAD.bottom;
  const x = r => PAD.left + (r / model.maxRadius) * plotWidth;
  const y = value => PAD.top + plotHeight * (1 - value / model.peak);
  const primary = model.series[0];

  return <div className="radial-plot">
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`Radial probability distribution of ${primary.n}${orbitalLetter(primary.l)}`}>
      <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y(0)} y2={y(0)} stroke="#3a3550" strokeWidth="1"/>
      {[0, 0.5, 1].map(fraction => {
        const r = model.maxRadius * fraction;
        return <g key={fraction}>
          <line x1={x(r)} x2={x(r)} y1={y(0)} y2={y(0) + 3} stroke="#4a4560" strokeWidth="1"/>
          <text x={x(r)} y={HEIGHT - 6} fill="#7d788a" fontSize="7" textAnchor={fraction === 0 ? 'start' : fraction === 1 ? 'end' : 'middle'} fontFamily="ui-monospace, Consolas, monospace">{r.toFixed(r < 10 ? 1 : 0)}{fraction === 1 ? ' a₀' : ''}</text>
        </g>;
      })}
      {model.series.map((item, index) => {
        const path = item.values.map((value, i) => `${i === 0 ? 'M' : 'L'}${x(model.maxRadius * i / SAMPLES).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
        return <g key={`${item.n}-${item.l}-${index}`}>
          {index === 0 && <path d={`${path} L${x(model.maxRadius)},${y(0)} L${x(0)},${y(0)} Z`} fill={item.color} opacity="0.13"/>}
          <path d={path} fill="none" stroke={item.color} strokeWidth="1.3" strokeDasharray={item.dashed ? '4 3' : undefined}/>
          {item.nodes.map(node => <line key={node} x1={x(node)} x2={x(node)} y1={y(0)} y2={PAD.top + 4} stroke={item.color} strokeWidth="0.8" strokeDasharray="1.5 2.5" opacity="0.8"/>)}
        </g>;
      })}
    </svg>
    <div className="radial-legend">
      {model.series.map((item, index) => <span key={`${item.n}-${item.l}-${index}`} style={{ color: item.color }}>{item.dashed ? '╌╌' : '──'} {item.n}{orbitalLetter(item.l)}</span>)}
    </div>
    <div className="radial-nodes">radial nodes {primary.n - primary.l - 1} · angular nodes {primary.l}</div>
  </div>;
}
