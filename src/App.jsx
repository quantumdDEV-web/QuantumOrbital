import { useMemo, useState } from 'react';
import { Atom, Orbit, Search, SlidersHorizontal } from 'lucide-react';
import AtomScene from './components/AtomScene.jsx';
import PeriodicTable from './components/PeriodicTable.jsx';
import ProbabilityPanel from './components/ProbabilityPanel.jsx';
import { ELEMENT_DATA, ELEMENT_DATA_SOURCES } from './physics/elements.js';
import './styles/features.css';
import './styles/workstation.css';

const LMAX = { s: 0, p: 1, d: 2, f: 3 };
const radiusLimitForOrbital = n => Math.max(6, 6 * n * n);

function orbitalFromElement(element) {
  const token = element.configuration.trim().split(' ').filter(Boolean).at(-1) || '1s1';
  const match = token.match(/(\d+)([spdf])(\d+)/);
  return match ? { n: Number(match[1]), l: LMAX[match[2]], m: 0, label: match[1] + match[2] } : { n: 1, l: 0, m: 0, label: '1s' };
}

function shellText(shells) { return Object.values(shells).join(' · '); }

export default function App() {
  const [selected, setSelected] = useState(ELEMENT_DATA[0]);
  const [query, setQuery] = useState('');
  const [pointCount, setPointCount] = useState(16000);
  const [radiusA0, setRadiusA0] = useState(1);
  const [slice, setSlice] = useState(false);
  const [sliceOffset, setSliceOffset] = useState(0);
  const [colorMode, setColorMode] = useState('phase');
  const initial = useMemo(() => orbitalFromElement(selected), [selected]);
  const [orbital, setOrbital] = useState(initial);
  const [m, setM] = useState(0);
  const [orbitalChoice, setOrbitalChoice] = useState(initial.label);
  const changeElement = element => {
    const next = orbitalFromElement(element);
    setSelected(element); setOrbital(next); setOrbitalChoice(next.label); setM(0); setSliceOffset(0);
    setRadiusA0(radius => Math.min(radius, radiusLimitForOrbital(next.n)));
  };
  const chooseOrbital = token => {
    const match = token.match(/(\d+)([spdf])/);
    if (!match) return;
    const next = { n: Number(match[1]), l: LMAX[match[2]], m: 0, label: match[0] };
    setOrbital(next); setOrbitalChoice(next.label); setM(0); setSliceOffset(0);
    setRadiusA0(radius => Math.min(radius, radiusLimitForOrbital(next.n)));
  };
  const configTokens = selected.configuration.split(' ').filter(token => /\d+[spdf]\d+/.test(token));
  const maxRadiusA0 = radiusLimitForOrbital(orbital.n);
  const mChoices = Array.from({ length: orbital.l * 2 + 1 }, (_, index) => index - orbital.l);
  const outerShell = Math.max(...Object.keys(selected.shells).map(Number));

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand-mark"><img src={`${import.meta.env.BASE_URL}quantum-orbital-mark.svg`} alt=""/></div>
      <div className="brand-name">Quantum<span>Orbital</span><small>ATOMIC ORBITAL WORKSTATION</small></div>
      <div className="topbar-center"><span className="status-pulse"/> NONRELATIVISTIC SINGLE-ELECTRON MODEL</div>
    </header>

    <section className="page-title">
      <div><div className="eyebrow title-eyebrow"><Orbit size={13}/> HYDROGENIC EIGENSTATE</div>
        <h1>{selected.name} <span>{selected.symbol} · Z {selected.z}</span></h1>
        <p>Wavefunction normalized in atomic units. The selected element supplies configuration context; the orbital uses Z = 1.</p>
      </div>
    </section>

    <div className="workspace">
      <aside className="left-column">
        <section className="panel controls-panel">
          <div className="panel-heading"><span className="icon-box"><SlidersHorizontal size={15}/></span><div><div className="eyebrow">STATE</div><h2>Occupied subshell</h2></div></div>
          <div className="element-mini"><strong>{selected.symbol}</strong><span>{selected.name}</span><b>Z {selected.z}</b></div>
          <div className="configuration">{selected.configuration}</div>
          <div className="orbital-list" aria-label="Select an occupied orbital">{configTokens.map(token => <button key={token} type="button" className={orbitalChoice === token.replace(/\d+$/, '') ? 'active' : ''} aria-pressed={orbitalChoice === token.replace(/\d+$/, '')} onClick={() => chooseOrbital(token)}>{token}</button>)}</div>

          <div className="control-divider"/>
          <label className="range-label"><span>Magnetic number m</span><strong>{m}</strong></label>
          <div className="m-buttons" aria-label="Select magnetic quantum number">{mChoices.map(value => <button type="button" key={value} className={m === value ? 'active' : ''} aria-pressed={m === value} onClick={() => { setM(value); setOrbital(state => ({ ...state, m: value })); }}>{value}</button>)}</div>

          <div className="control-divider"/>
          <label className="range-label"><span>Radius marker</span><strong>{radiusA0.toFixed(1)} a₀</strong></label>
          <input aria-label="Selected radius in Bohr radii" type="range" min=".1" max={maxRadiusA0} step={Math.max(.1, (maxRadiusA0 - .1) / 300)} value={radiusA0} onChange={event => setRadiusA0(Number(event.target.value))}/>
          <div className="range-ends"><span>0.1 a₀</span><span>{maxRadiusA0.toFixed(0)} a₀</span></div>

          {slice && <>
            <div className="control-divider"/>
            <label className="range-label"><span>XY section · z</span><strong>{sliceOffset.toFixed(1)} a₀</strong></label>
            <input aria-label="XY slice z position" type="range" min={-12 * orbital.n * orbital.n} max={12 * orbital.n * orbital.n} step="0.1" value={sliceOffset} onChange={event => setSliceOffset(Number(event.target.value))}/>
            <div className="range-ends"><span>−{(12 * orbital.n * orbital.n).toFixed(0)} a₀</span><span>+{(12 * orbital.n * orbital.n).toFixed(0)} a₀</span></div>
          </>}

          <div className="control-divider"/>
          <label className="range-label"><span>Cloud samples</span><strong>{(pointCount / 1000).toFixed(0)}k</strong></label>
          <input aria-label="Cloud sample count" type="range" min="4000" max="32000" step="4000" value={pointCount} onChange={event => setPointCount(Number(event.target.value))}/>
          <div className="range-ends"><span>4k</span><span>32k</span></div>
        </section>
      </aside>

      <section className="center-column">
        <div className="scene-toolbar"><span><i/> 3D ORBITAL FIELD</span><span>DRAG · PAN · SCROLL TO ZOOM</span></div>
        <AtomScene pointCount={pointCount} n={orbital.n} l={orbital.l} m={m} element={selected} slice={slice} sliceOffset={sliceOffset} colorMode={colorMode} onSliceToggle={() => setSlice(value => !value)} onColorModeChange={() => setColorMode(value => value === 'phase' ? 'density' : 'phase')}/>
        <div className="scene-metrics"><div><small>STATE</small><strong>{orbital.label}{orbital.l > 0 ? ` · m = ${m}` : ''}</strong></div><div><small>RADIAL CURVE</small><strong>r²|Rₙₗ(r)|²</strong></div><div><small>LENGTH UNIT</small><strong>Bohr radius a₀</strong></div></div>
      </section>

      <aside className="right-column">
        <section className="panel probability-panel">
          <div className="panel-heading"><span className="icon-box green"><Atom size={15}/></span><div><div className="eyebrow">ELEMENT CONTEXT</div><h2>{selected.name}</h2></div></div>
          <div className="stats-grid"><div><small>ATOMIC NUMBER</small><strong>{selected.z}</strong></div><div><small>ATOMIC MASS</small><strong>{selected.mass}</strong><em>u</em></div><div><small>ELECTRONS</small><strong>{selected.electrons}</strong></div><div><small>1ST IONIZATION</small><strong>{selected.ionizationEnergy == null ? 'N/A' : `${selected.ionizationEnergyEstimated ? '~' : ''}${selected.ionizationEnergy}`}</strong><em>eV</em></div></div>
          <div className="profile-row"><span>Category</span><b>{selected.category}</b></div><div className="profile-row"><span>Period / group</span><b>{selected.period} / {selected.group ?? 'f block'}</b></div><div className="profile-row"><span>Outer shell</span><b>{outerShell} · {selected.shells[outerShell]} e⁻</b></div>
          <div className="data-sources"><a href={ELEMENT_DATA_SOURCES.periodicTable} target="_blank" rel="noreferrer">NIST element data</a><a href="https://physics.nist.gov/PhysRefData/ASD/" target="_blank" rel="noreferrer">NIST spectra</a></div>
        </section>
        <ProbabilityPanel radiusA0={radiusA0} n={orbital.n} l={orbital.l}/>
        <section className="panel info-panel"><div className="eyebrow">MODEL SCOPE</div><p>Normalized nonrelativistic hydrogenic solution. For elements beyond hydrogen, this state is a shape reference, not a many-electron orbital prediction.</p><p className="info-note">No screening, electron correlation, spin-orbit, finite-nuclear-mass, or QED corrections.</p></section>
      </aside>
    </div>

    <PeriodicTable elements={ELEMENT_DATA} selected={selected} onSelect={changeElement} query={query} setQuery={setQuery}/>
    <footer><span>QuantumOrbital · {selected.name}</span><span>WAVEFUNCTIONS <b>NORMALIZED ANALYTICALLY</b></span></footer>
  </main>;
}
