import { useState } from 'react';
import { Activity, Atom, ChevronDown, CircleHelp, Orbit } from 'lucide-react';
import AtomScene from './components/AtomScene.jsx';
import QuantumControls from './components/QuantumControls.jsx';
import ProbabilityPanel from './components/ProbabilityPanel.jsx';
import { useQuantumState } from './hooks/useQuantumState.js';

export default function App() {
  const state = useQuantumState();
  const [pointCount, setPointCount] = useState(16000);
  return <main className="app-shell"><header className="topbar"><div className="brand-mark"><Atom size={20}/></div><div className="brand-name">Quantum<span>Orbital</span><small>QUANTUM VISUALIZATION LAB</small></div><div className="topbar-center"><span className="status-pulse"/> HYDROGEN SIMULATOR <span className="topbar-slash">/</span> MODEL 01</div><button className="help-button"><CircleHelp size={15}/> Physics guide</button></header><section className="page-title"><div><div className="eyebrow title-eyebrow"><Orbit size={13}/> WAVEFUNCTION EXPLORER</div><h1>Hydrogen <span>1s orbital</span></h1><p>Explore the spatial probability distribution of the hydrogen ground state.</p></div><div className="title-badge"><Activity size={15}/><span>TIME INDEPENDENT<br/><b>GROUND STATE</b></span><ChevronDown size={14}/></div></section><div className="workspace"><aside className="left-column"><QuantumControls {...state} pointCount={pointCount} setPointCount={setPointCount}/></aside><section className="center-column"><div className="scene-toolbar"><span><i/> 3D PROBABILITY DENSITY</span><span>DRAG TO ROTATE <b>·</b> SCROLL TO ZOOM</span></div><AtomScene pointCount={pointCount} radiusA0={state.radiusA0}/><div className="scene-metrics"><div><small>WAVEFUNCTION</small><strong>ψ₁₀₀(r) = <i>1</i> / √(πa₀³) · e<sup>−r/a₀</sup></strong></div><div><small>PEAK RADIAL PROBABILITY</small><strong>r = a₀ <em>5.292 × 10⁻¹¹ m</em></strong></div></div></section><aside className="right-column"><ProbabilityPanel radiusA0={state.radiusA0} probability={state.probability}/></aside></div><footer><span>QuantumOrbital <i>·</i> Hydrogen ground state</span><span>PHYSICS ENGINE <b>1s / ANALYTIC</b></span></footer></main>;
}
