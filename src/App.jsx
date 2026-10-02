import { useMemo, useState } from 'react';
import { Activity, Atom, CircleHelp, Orbit, Search, Zap } from 'lucide-react';
import AtomScene from './components/AtomScene.jsx';
import PeriodicTable from './components/PeriodicTable.jsx';
import ProbabilityPanel from './components/ProbabilityPanel.jsx';
import { ELEMENT_DATA } from './physics/elements.js';

const LETTERS=['s','p','d','f'];
const LMAX={s:0,p:1,d:2,f:3};

function orbitalFromElement(element){
 const token=element.configuration.trim().split(' ').filter(Boolean).at(-1)||'1s1';
 const match=token.match(/(\d+)([spdf])(\d+)/);
 return match?{n:Number(match[1]),l:LMAX[match[2]],m:0,label:match[1]+match[2]}:{n:1,l:0,m:0,label:'1s'};
}
function shellText(shells){return Object.entries(shells).map(([n,e])=>e).join(' · ')}

export default function App(){
 const [selected,setSelected]=useState(ELEMENT_DATA[0]);
 const [query,setQuery]=useState('');
 const [pointCount,setPointCount]=useState(16000);
 const [radiusA0,setRadiusA0]=useState(1);
 const initial=useMemo(()=>orbitalFromElement(selected),[selected]);
 const [orbital,setOrbital]=useState(initial);
 const [m,setM]=useState(0);
 const [orbitalChoice,setOrbitalChoice]=useState(initial.label);
 const changeElement=e=>{setSelected(e);const o=orbitalFromElement(e);setOrbital(o);setOrbitalChoice(o.label);setM(0)};
 const chooseOrbital=token=>{const match=token.match(/(\d+)([spdf])/);if(!match)return;const o={n:Number(match[1]),l:LMAX[match[2]],m:0,label:match[0]};setOrbital(o);setOrbitalChoice(o.label);setM(0)};
 const configTokens=selected.configuration.split(' ').filter(x=>/\\d+[spdf]\\d+/.test(x));
 const currentOrbital=orbital.label;
 const mChoices=Array.from({length:orbital.l*2+1},(_,i)=>i-orbital.l);
 return <main className="app-shell">
  <header className="topbar"><div className="brand-mark"><Atom size={20}/></div><div className="brand-name">Quantum<span>Orbital</span><small>QUANTUM VISUALIZATION LAB</small></div><div className="topbar-center"><span className="status-pulse"/> ATOMIC EXPLORER <span className="topbar-slash">/</span> 118 ELEMENTS</div><button className="help-button"><CircleHelp size={15}/> Physics guide</button></header>
  <section className="page-title"><div><div className="eyebrow title-eyebrow"><Orbit size={13}/> ATOMIC WAVEFUNCTION EXPLORER</div><h1>{selected.name} <span>{selected.symbol} · Z {selected.z}</span></h1><p>Explore atomic structure, electron configuration and an interactive orbital probability model.</p></div><div className="title-badge"><Activity size={15}/><span>SELECTED ELEMENT<br/><b>{selected.category.toUpperCase()}</b></span></div></section>
  <PeriodicTable elements={ELEMENT_DATA} selected={selected} onSelect={changeElement} query={query} setQuery={setQuery}/>
  <div className="workspace">
   <aside className="left-column">
    <section className="panel controls-panel"><div className="panel-heading"><span className="icon-box"><Zap size={16}/></span><div><div className="eyebrow">ORBITAL STATE</div><h2>Electron configuration</h2></div></div>
      <div className="element-mini"><strong>{selected.symbol}</strong><span>{selected.name}</span><b>Z {selected.z}</b></div>
      <div className="configuration">{selected.configuration}</div>
      <div className="orbital-list">{configTokens.map(token=><button key={token} className={orbitalChoice===token.replace(/\\d+$/,'')?'active':''} onClick={()=>chooseOrbital(token)}>{token}</button>)}</div>
      <div className="control-divider"/>
      <label className="range-label"><span>Magnetic quantum number m</span><strong>{m}</strong></label>
      <div className="m-buttons">{mChoices.map(v=><button key={v} className={m===v?'active':''} onClick={()=>{setM(v);setOrbital(o=>({...o,m:v}))}}>{v}</button>)}</div>
      <div className="control-divider"/>
      <label className="range-label"><span>Probability radius</span><strong>{radiusA0.toFixed(1)} a₀</strong></label>
      <input type="range" min=".1" max="6" step=".1" value={radiusA0} onChange={e=>setRadiusA0(Number(e.target.value))}/>
      <div className="range-ends"><span>.1 a₀</span><span>6 a₀</span></div>
      <div className="control-divider"/>
      <label className="range-label"><span>Cloud samples</span><strong>{(pointCount/1000).toFixed(0)}k</strong></label>
      <input type="range" min="4000" max="32000" step="4000" value={pointCount} onChange={e=>setPointCount(Number(e.target.value))}/>
      <div className="range-ends"><span>4k</span><span>32k</span></div>
    </section>
   </aside>
   <section className="center-column"><div className="scene-toolbar"><span><i/> 3D ORBITAL PROBABILITY DENSITY</span><span>DRAG TO ROTATE <b>·</b> SCROLL TO ZOOM</span></div><AtomScene pointCount={pointCount} n={orbital.n} l={orbital.l} m={m} radiusA0={radiusA0}/><div className="scene-metrics"><div><small>ORBITAL</small><strong>{currentOrbital}{orbital.l>0?' · m = '+m:''}</strong></div><div><small>ELECTRON SHELLS</small><strong>{shellText(selected.shells)}</strong></div><div><small>BOHR RADIUS</small><strong>5.292 × 10⁻¹¹ m</strong></div></div></section>
   <aside className="right-column">
    <section className="panel probability-panel"><div className="panel-heading"><span className="icon-box green"><Atom size={15}/></span><div><div className="eyebrow">ELEMENT PROFILE</div><h2>{selected.name}</h2></div></div>
      <div className="stats-grid"><div><small>ATOMIC NUMBER</small><strong>{selected.z}</strong></div><div><small>ATOMIC MASS</small><strong>{selected.mass}</strong><em>u</em></div><div><small>ELECTRONS</small><strong>{selected.electrons}</strong></div><div><small>IONIZATION</small><strong>{selected.ionizationEnergy??'N/A'}</strong><em>eV</em></div></div>
      <div className="profile-row"><span>Category</span><b>{selected.category}</b></div><div className="profile-row"><span>Period / group</span><b>{selected.period} / {selected.group??'f block'}</b></div><div className="profile-row"><span>Valence shell</span><b>{Math.max(...Object.keys(selected.shells).map(Number))} · {selected.shells[Math.max(...Object.keys(selected.shells).map(Number))]} e⁻</b></div>
    </section>
    <ProbabilityPanel radiusA0={radiusA0} probability={Math.min(1,radiusA0/6)}/>
    <section className="panel info-panel"><div className="panel-heading"><span className="icon-box"><Search size={15}/></span><div><div className="eyebrow">MODEL NOTE</div><h2>What you are seeing</h2></div></div><p>The cloud represents sampled probability density for the selected hydrogenic orbital shape. For multi electron atoms it is a visualization model of the selected subshell, not a full many body wavefunction.</p><p className="info-note">Element properties are based on NIST periodic table data. Atomic configurations can differ in detail from simplified textbook Aufbau filling for some elements.</p></section>
   </aside>
  </div>
  <footer><span>QuantumOrbital <i>·</i> {selected.name} atomic explorer</span><span>PHYSICS ENGINE <b>{currentOrbital} / HYDROGENIC MODEL</b></span></footer>
 </main>
}