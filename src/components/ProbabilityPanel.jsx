import { useMemo } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { hydrogenicRadialCurve } from '../physics/hydrogen/orbitalMath.js';

export default function ProbabilityPanel({ radiusA0, n = 1, l = 0 }) {
  const data = useMemo(() => hydrogenicRadialCurve(n, l, 180), [n, l]);
  const maxRadius = data[data.length - 1]?.radiusA0 ?? 8;
  const orbitalLabel = `${n}${['s', 'p', 'd', 'f'][l] ?? ''}`;

  return <>
    <section className="panel chart-panel">
      <div className="panel-heading chart-heading">
        <div>
          <div className="eyebrow">RADIAL PROBABILITY DISTRIBUTION</div>
          <h2>{orbitalLabel} probability by radius</h2>
        </div>
        <span className="units">per a₀</span>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="radialFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#55c8ec" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#55c8ec" stopOpacity={0.01}/>
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ffffff0b" vertical={false}/>
            <XAxis dataKey="radiusA0" type="number" domain={[0, maxRadius]} ticks={[0, maxRadius / 4, maxRadius / 2, maxRadius * 3 / 4, maxRadius]} stroke="#576575" tickLine={false} axisLine={false} tick={{ fill: '#8290a0', fontSize: 10 }}/>
            <YAxis stroke="#576575" tickLine={false} axisLine={false} tick={{ fill: '#8290a0', fontSize: 10 }}/>
            <Tooltip contentStyle={{ background: '#111923', border: '1px solid #283747', borderRadius: 8, color: '#eaf2f8' }} formatter={value => [Number(value).toFixed(4), 'probability / a₀']} labelFormatter={value => `${Number(value).toFixed(2)} a₀`}/>
            <Area type="monotone" dataKey="probabilityPerA0" stroke="#65d1f1" strokeWidth={2} fill="url(#radialFill)"/>
            <ReferenceLine x={radiusA0} stroke="#b7d98e" strokeDasharray="3 4"/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-legend"><span><i className="legend-blue"/> Radial probability</span><span><i className="legend-green"/> Selected radius</span></div>
    </section>
    <section className="panel info-panel">
      <div className="panel-heading">
        <span className="icon-box"><Info size={16}/></span>
        <div><div className="eyebrow">ABOUT THIS STATE</div><h2>Hydrogenic {orbitalLabel}</h2></div>
        <ArrowUpRight className="heading-end" size={16}/>
      </div>
      <p>The graph shows radial probability density: the relative likelihood of finding the electron at each distance from the nucleus. The selected radius is marked on the curve.</p>
      <p className="info-note">For atoms with more than one electron, this is a hydrogenic single-electron model for the selected subshell. It does not model electron screening, electron-electron interactions, or a full many-electron wavefunction.</p>
    </section>
  </>;
}
