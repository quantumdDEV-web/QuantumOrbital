import { useCallback, useEffect, useMemo, useState } from 'react';
import DensityViewport from './DensityViewport.jsx';
import RadialPlot from './RadialPlot.jsx';
import { ROCKET_COLORS } from '../visualization/rocket.js';
import { ELEMENT_DATA } from '../physics/elements.js';
import { HYBRID_TYPES, buildStateGroups, orbitalLetter } from '../physics/states.js';
import { stateExtent, stateGridSize } from '../visualization/stateVolume.js';
import { clampQuantumNumbers, physicsConfig } from '../state/urlState.js';

const MODE_TITLES = {
  volume: '3D PROBABILITY DENSITY',
  surface: 'PROBABILITY ISOSURFACE',
  slice: 'PROBABILITY SLICE',
  points: 'ELECTRON POSITION SAMPLES',
};

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

function Segmented({ label, value, options, onChange, disabled = false }) {
  return <div className="control-group">
    <span className="control-label">{label}</span>
    <div className="seg" role="group" aria-label={label}>
      {options.map(([key, text]) => <button key={key} type="button" disabled={disabled} aria-pressed={value === key} onClick={() => onChange(key)}>{text}</button>)}
    </div>
  </div>;
}

function QuantumSelects({ n, l, m, onChange, lmDisabled = false, idPrefix }) {
  const lOptions = Array.from({ length: n }, (_, value) => value);
  const mOptions = Array.from({ length: l * 2 + 1 }, (_, index) => index - l);
  return <div className="field-row">
    <label className="field-control compact"><span>n</span>
      <select id={`${idPrefix}-n`} value={n} onChange={event => onChange(clampQuantumNumbers(Number(event.target.value), l, m))}>
        {Array.from({ length: 8 }, (_, index) => index + 1).map(value => <option key={value} value={value}>{value}</option>)}
      </select></label>
    <label className="field-control compact"><span>ℓ</span>
      <select id={`${idPrefix}-l`} value={l} disabled={lmDisabled} onChange={event => onChange(clampQuantumNumbers(n, Number(event.target.value), m))}>
        {lOptions.map(value => <option key={value} value={value}>{value} · {orbitalLetter(value)}</option>)}
      </select></label>
    <label className="field-control compact"><span>m</span>
      <select id={`${idPrefix}-m`} value={m} disabled={lmDisabled} onChange={event => onChange(clampQuantumNumbers(n, l, Number(event.target.value)))}>
        {mOptions.map(value => <option key={value} value={value}>{value > 0 ? `+${value}` : value}</option>)}
      </select></label>
  </div>;
}

function DensityLegend({ color, kind, legend }) {
  if (color === 'density') {
    return <div className="density-legend" aria-label="Seaborn Rocket density colour scale">
      <span className="legend-label">LOWER DENSITY</span>
      <div className="rocket-ramp">{legend.map((swatch, index) => <i key={`${swatch}-${index}`} style={{ backgroundColor: swatch }}/>)}</div>
      <span className="legend-label">HIGHER DENSITY</span>
      <span className="legend-name">ROCKET · |ψ|²</span>
    </div>;
  }
  if (kind === 'complex') {
    return <div className="density-legend" aria-label="Phase colour scale">
      <span className="legend-label">−π</span>
      <div className="phase-ramp" style={{ background: PHASE_GRADIENT }}/>
      <span className="legend-label">+π</span>
      <span className="legend-name">PHASE · arg ψ</span>
    </div>;
  }
  return <div className="density-legend" aria-label="Wavefunction sign colours">
    <span className="legend-label">ψ &lt; 0</span>
    <div className="rocket-ramp"><i style={{ backgroundColor: PHASE_NEGATIVE }}/><i style={{ backgroundColor: PHASE_POSITIVE }}/></div>
    <span className="legend-label">ψ &gt; 0</span>
    <span className="legend-name">SIGN · real ψ</span>
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
  const [legend] = useState(makeColorMapLegend);

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
    const accent = '#d88a8d';
    const secondary = '#7aa7d9';
    if (config.kind === 'hybrid') {
      return [{ n: config.n, l: 0, color: accent }, { n: config.n, l: 1, color: secondary, dashed: true }];
    }
    const list = [{ n: config.n, l: config.l, color: accent }];
    const second = config.second;
    if (second?.enabled && !(second.n === config.n && second.l === config.l)) {
      list.push({ n: second.n, l: second.l, color: secondary, dashed: true });
    }
    return list;
  }, [config]);

  const setRendererErrorStable = useCallback(message => setRendererError(message), []);
  const copyLink = useCallback(async () => {
    let message = 'LINK COPIED';
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      message = 'COPY FAILED';
    }
    setToast(message);
    window.setTimeout(() => setToast(''), 1800);
  }, []);

  const kind = config.kind;
  const hybridBlocked = state.kind === 'hybrid' && state.n < 2;
  const isHybrid = kind === 'hybrid';
  const extent = volume?.extent ?? 0;
  const gamma = 1 / (1 + state.exposure);
  const snapshotName = `quantum-orbital-${(model.label || 'state').toLowerCase().replace(/[^a-z0-9+]+/g, '-').replace(/^-|-$/g, '')}.png`;
  const status = rendererError ? 'RENDERER ERROR' : error ? 'FIELD ERROR' : computing ? 'SAMPLING FIELD' : volume ? 'FIELD READY' : 'SAMPLING FIELD';
  const showTimeControls = state.second.enabled && !isHybrid && volume?.hasSecond;

  return <section className="orbital-workspace" aria-label="Interactive hydrogenic probability density">
    <div className="orbital-stage">
      <div className="stage-toolbar">
        <div className="stage-readout"><span className="stage-status"/><span>{MODE_TITLES[state.render]}</span><b>{toast || status}</b></div>
        <div className="view-controls" aria-label="Camera controls">
          {['iso', 'xy', 'xz', 'yz'].map(preset => <button key={preset} type="button" className={view === preset ? 'selected' : ''} onClick={() => setView(preset)} aria-pressed={view === preset} title={`${preset.toUpperCase()} camera view`}>{preset.toUpperCase()}</button>)}
          <button type="button" onClick={() => { setView('iso'); setResetKey(value => value + 1); }} title="Reset camera to the initial view">RESET</button>
          <span className="toolbar-divider"/>
          <button type="button" className={autoRotate ? 'selected' : ''} aria-pressed={autoRotate} onClick={() => setAutoRotate(value => !value)} title="Slowly rotate around the z axis">ROTATE</button>
          <button type="button" onClick={() => setSnapshotKey(value => value + 1)} title="Download the current view as a PNG">PNG</button>
          <button type="button" onClick={copyLink} title="Copy a link to this exact state and camera">LINK</button>
        </div>
      </div>
      <div className="volume-stage">
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
        {(!volume || error || rendererError) && <div className={`volume-message ${error || rendererError ? 'has-error' : ''}`} role={error || rendererError ? 'alert' : 'status'}>{rendererError || error || 'Calculating normalized wavefunction volume…'}</div>}
        <div className="volume-domain">{volume ? `x, y, z ∈ [−${extent.toFixed(2)}, ${extent.toFixed(2)}] a₀` : ''}{state.render === 'slice' && volume ? ` · ${state.sliceAxis} = ${(state.slicePos * extent).toFixed(2)} a₀` : ''}</div>
        <div className="volume-help">DRAG ROTATE <span>·</span> RIGHT DRAG PAN <span>·</span> SCROLL ZOOM <span>·</span> ZOOM IN TO ENTER</div>
      </div>
      <DensityLegend color={state.color} kind={kind} legend={legend}/>
    </div>

    <aside className="orbital-controls">
      <div className="controls-header"><div className="eyebrow">HYDROGENIC EIGENSTATE</div><h1>Orbital field</h1></div>
      <label className="field-control"><span>Nuclear charge, Z</span><select value={state.nuclearCharge} onChange={event => onChange({ nuclearCharge: Number(event.target.value) })}>
        {ELEMENT_DATA.map(({ z, symbol }) => {
          const charge = z === 1 ? '' : `${z - 1}+`;
          return <option key={z} value={z}>{symbol}{charge ? ` ${charge}` : ''} · Z = {z}</option>;
        })}
      </select></label>

      <Segmented label="Orbital type" value={state.kind} onChange={next => onChange({ kind: next })} options={[['complex', 'Complex'], ['real', 'Real'], ['hybrid', 'Hybrid']]}/>
      {hybridBlocked && <p className="control-note">Hybrids need n ≥ 2, so the real orbital is shown.</p>}

      <QuantumSelects idPrefix="primary" n={state.n} l={state.l} m={state.m} lmDisabled={isHybrid} onChange={next => onChange(next)}/>

      {isHybrid && <div className="field-row two">
        <label className="field-control compact"><span>Hybrid type</span>
          <select value={state.hybrid} onChange={event => onChange({ hybrid: event.target.value, hybridIndex: 0 })}>
            {Object.entries(HYBRID_TYPES).map(([key, spec]) => <option key={key} value={key}>{spec.label}</option>)}
          </select></label>
        <label className="field-control compact"><span>Lobe</span>
          <select value={state.hybridIndex} onChange={event => onChange({ hybridIndex: Number(event.target.value) })}>
            {Array.from({ length: HYBRID_TYPES[state.hybrid].count }, (_, index) => <option key={index} value={index}>#{index + 1}</option>)}
          </select></label>
      </div>}

      {!isHybrid && <>
        <label className="check-control"><input type="checkbox" checked={state.second.enabled} onChange={event => onChange({ second: { ...state.second, enabled: event.target.checked } })}/><span>Superpose a second state</span></label>
        {state.second.enabled && <>
          <QuantumSelects idPrefix="second" n={state.second.n} l={state.second.l} m={state.second.m} onChange={next => onChange({ second: { ...state.second, ...next } })}/>
          <label className="range-label" htmlFor="mix"><span>Weight of second state</span><strong>{Math.round(state.mix * 100)}%</strong></label>
          <input id="mix" type="range" min="0" max="1" step="0.05" value={state.mix} onChange={event => onChange({ mix: Number(event.target.value) })}/>
          {showTimeControls ? <div className="time-controls">
            <button type="button" className="mini-button" aria-pressed={playing} onClick={() => setPlaying(value => !value)}>{playing ? 'PAUSE' : 'PLAY'}</button>
            <label className="time-speed" htmlFor="speed"><span>Beat speed</span><strong>{state.speed.toFixed(1)}×</strong></label>
            <input id="speed" type="range" min="0" max="4" step="0.1" value={state.speed} onChange={event => onChange({ speed: Number(event.target.value) })}/>
          </div> : <p className="control-note">Same n: the states share one energy, so the mixture is static.</p>}
        </>}
      </>}

      <div className="control-rule"/>
      <Segmented label="Render mode" value={state.render} onChange={next => onChange({ render: next })} options={[['volume', 'Volume'], ['surface', 'Surface'], ['slice', 'Slice'], ['points', 'Points']]}/>
      <Segmented label="Colour by" value={state.color} onChange={next => onChange({ color: next })} options={[['density', 'Density'], ['phase', kind === 'complex' ? 'Phase' : 'Sign']]}/>

      {state.render === 'surface' && <>
        <label className="range-label" htmlFor="iso"><span>Surface encloses</span><strong>{state.isoPercent}%</strong></label>
        <input id="iso" type="range" min="50" max="99" step="1" value={state.isoPercent} onChange={event => onChange({ isoPercent: Number(event.target.value) })}/>
        <div className="range-ends"><span>50% · tight</span><span>99% · wide</span></div>
      </>}
      {state.render === 'slice' && <>
        <Segmented label="Slice plane normal" value={state.sliceAxis} onChange={next => onChange({ sliceAxis: next })} options={[['x', 'X'], ['y', 'Y'], ['z', 'Z']]}/>
        <label className="range-label" htmlFor="slice-position"><span>Plane position</span><strong>{(state.slicePos * extent).toFixed(2)} a₀</strong></label>
        <input id="slice-position" type="range" min="-1" max="1" step="0.01" value={state.slicePos} onChange={event => onChange({ slicePos: Number(event.target.value) })}/>
        <div className="range-ends"><span>−{extent.toFixed(1)}</span><span>+{extent.toFixed(1)}</span></div>
      </>}

      {state.render !== 'surface' && <>
        <label className="range-label" htmlFor="exposure"><span>Exposure</span><strong>{state.exposure.toFixed(1)}×</strong></label>
        <input id="exposure" type="range" min="0" max="2" step="0.1" value={state.exposure} onChange={event => onChange({ exposure: Number(event.target.value) })}/>
        <div className="range-ends"><span>0 · linear</span><span>2</span></div>
      </>}

      <div className="state-equation">
        <div className="eyebrow">RADIAL DISTRIBUTION r²R²</div>
        <RadialPlot curves={curves} nuclearCharge={state.nuclearCharge}/>
        <div className="equation">ψ<sub>nℓm</sub> = R<sub>nℓ</sub> Y<sub>ℓ</sub><sup>m</sup></div>
        <div className="equation">E<sub>n</sub> = −13.6057 Z²/n² eV</div>
        <div className="state-meta">Z {state.nuclearCharge} · {model.label || '—'}</div>
      </div>

      <div className="normalization-note">
        <span className="eyebrow">DISPLAY NORMALIZATION</span>
        <span>v<sub>min</sub> = 0 · v<sub>max</sub> = q<sub>99.9%</sub></span>
        <span>v<sub>max</sub> = {volume ? volume.vmax.toExponential(2) : '—'} a₀⁻³ · grid probability {volume ? `${(volume.capturedProbability * 100).toFixed(2)}%` : '—'}</span>
        <span>PowerNorm γ = {gamma.toFixed(3)} · grid {volume?.size ?? '—'}³</span>
      </div>
      <p className="model-note">Exact non-relativistic, one-electron Coulomb eigenstates with an infinite-mass nucleus. For Z &gt; 1 this is a hydrogen-like ion, not a neutral multi-electron atom. Complex states show the same density for +m and −m; real orbitals are real combinations of ±m, and hybrids and superpositions are linear combinations of exact eigenstates. Superpositions of different n beat at the energy difference (time is rescaled for display). Surface levels and sampled points use the initial phase.</p>
    </aside>
  </section>;
}
