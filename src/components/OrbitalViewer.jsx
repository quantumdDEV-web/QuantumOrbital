import { useCallback, useEffect, useMemo, useState } from 'react';
import DensityViewport, { BEAT_SECONDS } from './DensityViewport.jsx';
import EnergyLevels from './EnergyLevels.jsx';
import RadialPlot from './RadialPlot.jsx';
import { ROCKET_COLORS } from '../visualization/rocket.js';
import { ELEMENT_DATA } from '../physics/elements.js';
import { HYBRID_TYPES, buildStateGroups, orbitalLetter } from '../physics/states.js';
import { stateExtent, stateGridSize } from '../visualization/stateVolume.js';
import { clampQuantumNumbers, physicsConfig } from '../state/urlState.js';

const SHAPE_PREVIEWS = [
  ['orbital-1s-slice.png', '1s', 'Spherical, with no angular nodes.', 'Cross-section of a 1s orbital: a bright centre, the same in every direction'],
  ['orbital-2p-slice.png', '2p', 'Two lobes separated by a node.', 'Cross-section of a 2p orbital with two lobes'],
  ['orbital-3d-slice.png', '3d', 'Four lobes in a plane through the nucleus.', 'Cross-section of a 3d orbital with four bright regions'],
  ['orbital-4f-slice.png', '4f', 'More angular nodes, more intricate pattern.', 'Cross-section of a 4f orbital with several lobes'],
];

const VIEW_LABELS = [['iso', 'Isometric'], ['xy', 'Top'], ['xz', 'Front'], ['yz', 'Side']];
const KIND_HELP = {
  complex: 'Pure states with a definite m. +m and −m look the same.',
  real: 'Real combinations of +m and −m: the lobed shapes from chemistry class.',
  hybrid: 'Mixes of s and p orbitals (sp, sp² or sp³) that point toward bonds.',
};
const SUPERSCRIPT = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };

function ionLabel(symbol, z) {
  const charge = z - 1;
  if (charge === 0) return symbol;
  const digits = charge === 1 ? '' : String(charge).split('').map(digit => SUPERSCRIPT[digit]).join('');
  return `${symbol}${digits}⁺`;
}

function makeColorMapLegend() {
  return [0, 42, 85, 128, 170, 213, 255].map(index => ROCKET_COLORS[index]);
}

/** CSS gradient of the cyclic arg-ψ palette used by the shaders. */
function phaseGradient(count = 25) {
  const stops = [];
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI + 2 * Math.PI * i / (count - 1);
    const rgb = [0, 2.0943951, 4.1887902].map(offset => Math.round(255 * (0.56 + 0.44 * Math.cos(angle + offset))));
    stops.push(`rgb(${rgb.join(',')}) ${(100 * i / (count - 1)).toFixed(1)}%`);
  }
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}

const PHASE_GRADIENT = phaseGradient();
const PHASE_POSITIVE = 'rgb(255,87,87)';
const PHASE_NEGATIVE = 'rgb(31,199,199)';

function Choice({ label, value, options, onChange, hint }) {
  return <div className="field">
    <span className="field-label" id={`label-${label}`}>{label}</span>
    <div className="choice" role="group" aria-labelledby={`label-${label}`}>
      {options.map(([key, text]) => <button key={key} type="button" aria-pressed={value === key} onClick={() => onChange(key)}>{text}</button>)}
    </div>
    {hint && <p className="field-hint">{hint}</p>}
  </div>;
}

function QuantumSelects({ n, l, m, onChange, lmDisabled = false, idPrefix }) {
  const lOptions = Array.from({ length: n }, (_, value) => value);
  const mOptions = Array.from({ length: l * 2 + 1 }, (_, index) => index - l);
  return <div className="quantum-row">
    <label htmlFor={`${idPrefix}-n`}><span>n</span>
      <select id={`${idPrefix}-n`} value={n} onChange={event => onChange(clampQuantumNumbers(Number(event.target.value), l, m))}>
        {Array.from({ length: 8 }, (_, index) => index + 1).map(value => <option key={value} value={value}>{value}</option>)}
      </select></label>
    <label htmlFor={`${idPrefix}-l`}><span>ℓ</span>
      <select id={`${idPrefix}-l`} value={l} disabled={lmDisabled} onChange={event => onChange(clampQuantumNumbers(n, Number(event.target.value), m))}>
        {lOptions.map(value => <option key={value} value={value}>{value} ({orbitalLetter(value)})</option>)}
      </select></label>
    <label htmlFor={`${idPrefix}-m`}><span>m</span>
      <select id={`${idPrefix}-m`} value={m} disabled={lmDisabled} onChange={event => onChange(clampQuantumNumbers(n, l, Number(event.target.value)))}>
        {mOptions.map(value => <option key={value} value={value}>{value > 0 ? `+${value}` : value}</option>)}
      </select></label>
  </div>;
}

function Slider({ id, label, value, display, min, max, step, onChange, ends }) {
  return <div className="field">
    <label className="slider-label" htmlFor={id}><span>{label}</span><output htmlFor={id}>{display}</output></label>
    <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={event => onChange(Number(event.target.value))}/>
    {ends && <div className="slider-ends"><span>{ends[0]}</span><span>{ends[1]}</span></div>}
  </div>;
}

function Legend({ color, kind, swatches }) {
  if (color === 'density') {
    return <div className="legend" aria-label="Colour scale for probability density">
      <span>Low density</span>
      <div className="ramp">{swatches.map((swatch, index) => <i key={`${swatch}-${index}`} style={{ backgroundColor: swatch }}/>)}</div>
      <span>High density</span>
    </div>;
  }
  if (kind === 'complex') {
    return <div className="legend" aria-label="Colour scale for the phase of the wavefunction">
      <span>Phase −π</span>
      <div className="ramp" style={{ background: PHASE_GRADIENT }}/>
      <span>+π</span>
    </div>;
  }
  return <div className="legend" aria-label="Colours for the sign of the wavefunction">
    <span>ψ negative</span>
    <div className="ramp"><i style={{ backgroundColor: PHASE_NEGATIVE }}/><i style={{ backgroundColor: PHASE_POSITIVE }}/></div>
    <span>ψ positive</span>
  </div>;
}

export default function OrbitalViewer({ state, onChange, initialCamera, onCameraEnd }) {
  const [volume, setVolume] = useState(null);
  const [error, setError] = useState('');
  const [computing, setComputing] = useState(true);
  const [rendererError, setRendererError] = useState('');
  const [view, setView] = useState(initialCamera ? 'custom' : 'iso');
  const [resetKey, setResetKey] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [snapshotKey, setSnapshotKey] = useState(0);
  const [toast, setToast] = useState('');
  const [swatches] = useState(makeColorMapLegend);

  const configKey = JSON.stringify(physicsConfig(state));
  const config = useMemo(() => JSON.parse(configKey), [configKey]);
  const model = useMemo(() => {
    try {
      return { ...buildStateGroups(config), error: '' };
    } catch (caught) {
      return { groups: null, label: '', hasSecond: false, error: caught.message };
    }
  }, [config]);

  useEffect(() => {
    if (!model.groups) {
      setError(model.error);
      setComputing(false);
      return undefined;
    }
    setError('');
    setComputing(true);
    let worker;
    const timer = window.setTimeout(() => {
      worker = new Worker(new URL('../visualization/orbitalVolume.worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = event => {
        setComputing(false);
        if (event.data.error) {
          setError(event.data.error);
          return;
        }
        setVolume(event.data);
      };
      worker.onerror = event => {
        setComputing(false);
        setError(event.message || 'Could not calculate the density volume.');
      };
      worker.postMessage({
        groups: model.groups,
        nuclearCharge: state.nuclearCharge,
        size: stateGridSize(model.groups),
        extent: stateExtent(model.groups, state.nuclearCharge),
      });
    }, 160);
    return () => {
      window.clearTimeout(timer);
      worker?.terminate();
    };
  }, [model, state.nuclearCharge]);

  const display = useMemo(() => ({
    render: state.render,
    color: state.color,
    isoPercent: state.isoPercent,
    sliceAxis: state.sliceAxis,
    slicePos: state.slicePos,
    exposure: state.exposure,
  }), [state.render, state.color, state.isoPercent, state.sliceAxis, state.slicePos, state.exposure]);

  const curves = useMemo(() => {
    if (config.kind === 'hybrid') {
      return [{ n: config.n, l: 0, role: 'first' }, { n: config.n, l: 1, role: 'second' }];
    }
    const list = [{ n: config.n, l: config.l, role: 'first' }];
    const second = config.second;
    if (second?.enabled && !(second.n === config.n && second.l === config.l)) {
      list.push({ n: second.n, l: second.l, role: 'second' });
    }
    return list;
  }, [config]);

  const setRendererErrorStable = useCallback(message => setRendererError(message), []);
  const copyLink = useCallback(async () => {
    let message = 'Link copied';
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      message = 'Could not copy. The address bar has the link.';
    }
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  }, []);

  const keepKind = state.kind === 'hybrid' ? 'complex' : state.kind;
  const selectLevel = useCallback((n, l) => onChange({ n, l, kind: keepKind }), [onChange, keepKind]);
  const selectTransition = useCallback((upper, lower) => {
    setPlaying(true);
    onChange({
      n: upper.n, l: upper.l, m: 0, kind: keepKind, mix: 0.5,
      // The inner shells are far denser than the outer ones; brighten so the swinging cloud stays visible.
      exposure: Math.max(state.exposure, 1),
      second: { enabled: true, n: lower.n, l: lower.l, m: 0 },
    });
  }, [onChange, keepKind, state.exposure]);

  const kind = config.kind;
  const hybridBlocked = state.kind === 'hybrid' && state.n < 2;
  const isHybrid = kind === 'hybrid';
  const extent = volume?.extent ?? 0;
  const gamma = 1 / (1 + state.exposure);
  const snapshotName = `orbital-${(model.label || 'state').toLowerCase().replace(/[^a-z0-9+]+/g, '-').replace(/^-|-$/g, '')}.png`;
  const showTimeControls = state.second.enabled && !isHybrid && volume?.hasSecond;
  const firstLevel = { n: state.n, l: isHybrid ? 0 : state.l };
  const secondLevel = state.second.enabled && !isHybrid ? { n: state.second.n, l: state.second.l } : null;

  return <div className="workspace">
    <section className="stage" aria-label="3D view of the orbital">
      <div className="toolbar">
        <div className="button-row" role="group" aria-label="Camera view">
          {VIEW_LABELS.map(([key, text]) => <button key={key} type="button" aria-pressed={view === key} onClick={() => setView(key)}>{text}</button>)}
          <button type="button" onClick={() => { setView('iso'); setResetKey(value => value + 1); }}>Reset view</button>
        </div>
        <div className="button-row">
          <button type="button" aria-pressed={autoRotate} onClick={() => setAutoRotate(value => !value)}>Auto-rotate</button>
          <button type="button" onClick={() => setSnapshotKey(value => value + 1)}>Save image</button>
          <button type="button" onClick={copyLink}>Copy link</button>
        </div>
      </div>

      <div className="viewport">
        <DensityViewport
          volume={volume}
          display={display}
          view={view}
          resetKey={resetKey}
          autoRotate={autoRotate}
          playing={playing}
          speed={state.speed}
          snapshotKey={snapshotKey}
          snapshotName={snapshotName}
          initialCamera={initialCamera}
          onError={setRendererErrorStable}
          onCameraEnd={onCameraEnd}
        />
        {(!volume || error || rendererError) && <div className={`viewport-message${error || rendererError ? ' is-error' : ''}`} role={error || rendererError ? 'alert' : 'status'}>
          {rendererError || error || 'Computing the orbital…'}
        </div>}
        {computing && volume && <div className="viewport-busy" role="status">Updating…</div>}
        {toast && <div className="viewport-toast" role="status">{toast}</div>}
      </div>

      <div className="caption">
        <Legend color={state.color} kind={kind} swatches={swatches}/>
        <p className="caption-extent">
          {volume ? `The box spans ±${extent.toFixed(extent < 10 ? 2 : 1)} a₀.` : ''}
          {state.render === 'slice' && volume ? ` Slice at ${state.sliceAxis} = ${(state.slicePos * extent).toFixed(2)} a₀.` : ''}
        </p>
      </div>
      <p className="hint">Drag to rotate, right-drag to pan, scroll to zoom. Zoom all the way in to go inside the cloud.</p>
    </section>

    <section className="energy" aria-labelledby="energy-heading">
      <h2 id="energy-heading">Energy levels and transitions</h2>
      <EnergyLevels
        nuclearCharge={state.nuclearCharge}
        first={firstLevel}
        second={secondLevel}
        displaySeconds={BEAT_SECONDS / Math.max(state.speed, 0.1)}
        onSelectLevel={selectLevel}
        onSelectTransition={selectTransition}
      />
    </section>

    <section className="radial" aria-labelledby="radial-heading">
      <h2 id="radial-heading">Radial probability</h2>
      <RadialPlot curves={curves} nuclearCharge={state.nuclearCharge}/>
    </section>

    <section className="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">A guide to orbital shapes</h2>
      <div className="gallery-grid">
        {SHAPE_PREVIEWS.map(([image, title, description, alt]) => <figure key={image}>
          <img src={`${import.meta.env.BASE_URL}${image}`} alt={alt} width="360" height="360" loading="lazy" decoding="async"/>
          <figcaption><strong>{title}</strong> {description}</figcaption>
        </figure>)}
      </div>
      <p className="diagram-note">Each image is the y = 0 cross-section of the calculated probability density. Brightness shows density; the real orbital is three-dimensional.</p>
    </section>

    <aside className="panel" aria-label="Orbital settings">
      <h2>Orbital</h2>
      <div className="field">
        <label className="field-label" htmlFor="nucleus">Nucleus</label>
        <select id="nucleus" value={state.nuclearCharge} onChange={event => onChange({ nuclearCharge: Number(event.target.value) })}>
          {ELEMENT_DATA.map(({ z, symbol }) => <option key={z} value={z}>{ionLabel(symbol, z)} (Z = {z})</option>)}
        </select>
      </div>

      <Choice label="Kind" value={state.kind} onChange={next => onChange({ kind: next })} options={[['complex', 'Complex'], ['real', 'Real'], ['hybrid', 'Hybrid']]} hint={hybridBlocked ? 'Hybrids need n of 2 or more, so the real orbital is shown.' : KIND_HELP[state.kind]}/>

      {!isHybrid && <QuantumSelects idPrefix="primary" n={state.n} l={state.l} m={state.m} onChange={next => onChange(next)}/>}
      {isHybrid && <>
        <QuantumSelects idPrefix="primary" n={state.n} l={0} m={0} lmDisabled onChange={next => onChange({ n: next.n })}/>
        <div className="quantum-row two">
          <label htmlFor="hybrid-type"><span>Type</span>
            <select id="hybrid-type" value={state.hybrid} onChange={event => onChange({ hybrid: event.target.value, hybridIndex: 0 })}>
              {Object.entries(HYBRID_TYPES).map(([key, spec]) => <option key={key} value={key}>{spec.label}</option>)}
            </select></label>
          <label htmlFor="hybrid-lobe"><span>Lobe</span>
            <select id="hybrid-lobe" value={state.hybridIndex} onChange={event => onChange({ hybridIndex: Number(event.target.value) })}>
              {Array.from({ length: HYBRID_TYPES[state.hybrid].count }, (_, index) => <option key={index} value={index}>{index + 1}</option>)}
            </select></label>
        </div>
      </>}

      {!isHybrid && <>
        <label className="check"><input type="checkbox" checked={state.second.enabled} onChange={event => onChange({ second: { ...state.second, enabled: event.target.checked } })}/><span>Mix in a second state</span></label>
        {state.second.enabled && <div className="indent">
          <QuantumSelects idPrefix="second" n={state.second.n} l={state.second.l} m={state.second.m} onChange={next => onChange({ second: { ...state.second, ...next } })}/>
          <Slider id="mix" label="Share of the second state" value={state.mix} display={`${Math.round(state.mix * 100)}%`} min="0" max="1" step="0.05" onChange={value => onChange({ mix: value })}/>
          {showTimeControls
            ? <div className="field">
              <div className="inline-row">
                <button type="button" className="plain" aria-pressed={playing} onClick={() => setPlaying(value => !value)}>{playing ? 'Pause' : 'Play'}</button>
                <Slider id="speed" label="Speed" value={state.speed} display={`${state.speed.toFixed(1)}×`} min="0" max="4" step="0.1" onChange={value => onChange({ speed: value })}/>
              </div>
            </div>
            : <p className="field-hint">Both states have the same n, so they share one energy and the shape does not change over time.</p>}
        </div>}
      </>}

      <h2>Display</h2>
      <Choice label="Show as" value={state.render} onChange={next => onChange({ render: next })} options={[['volume', 'Cloud'], ['surface', 'Surface'], ['slice', 'Slice'], ['points', 'Dots']]}/>
      <Choice label="Colour by" value={state.color} onChange={next => onChange({ color: next })} options={[['density', 'Density'], ['phase', kind === 'complex' ? 'Phase' : 'Sign']]}/>

      {state.render === 'surface' && <Slider id="iso" label="Surface encloses" value={state.isoPercent} display={`${state.isoPercent}% of the probability`} min="50" max="99" step="1" onChange={value => onChange({ isoPercent: value })}/>}
      {state.render === 'slice' && <>
        <Choice label="Slice plane is perpendicular to" value={state.sliceAxis} onChange={next => onChange({ sliceAxis: next })} options={[['x', 'x'], ['y', 'y'], ['z', 'z']]}/>
        <Slider id="slice-position" label="Slice position" value={state.slicePos} display={`${(state.slicePos * extent).toFixed(2)} a₀`} min="-1" max="1" step="0.01" onChange={value => onChange({ slicePos: value })}/>
      </>}
      {state.render !== 'surface' && <Slider id="exposure" label="Brighten faint regions" value={state.exposure} display={state.exposure === 0 ? 'off' : `${state.exposure.toFixed(1)}`} min="0" max="2" step="0.1" onChange={value => onChange({ exposure: value })}/>}

      <details className="about">
        <summary>How this is calculated</summary>
        <p>Each orbital is an exact solution of the Schr&ouml;dinger equation for one electron around a nucleus that does not move. For Z above 1 that is a hydrogen-like ion (He&#8314;, Li&sup2;&#8314; and so on), not a neutral atom with several electrons.</p>
        <p>Real orbitals, hybrids and mixtures are sums of those exact solutions. Two different shells beat at the energy difference between them, which is what the energy diagram shows.</p>
        <p>Brightness is scaled to the 99.9th percentile of the density, so a few very bright voxels do not wash out the rest. Surfaces and dots use the state at the start of the animation.</p>
        <p className="numbers">
          Grid {volume?.size ?? '–'}³, {volume ? `${(volume.capturedProbability * 100).toFixed(2)}%` : '–'} of the probability inside the box,
          peak display value {volume ? volume.vmax.toExponential(2) : '–'} a₀⁻³, gamma {gamma.toFixed(2)}.
        </p>
      </details>
    </aside>
  </div>;
}
