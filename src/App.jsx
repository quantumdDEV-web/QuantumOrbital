import { useState } from 'react';
import OrbitalViewer from './components/OrbitalViewer.jsx';
import './styles/orbital.css';

export default function App() {
  const [state, setState] = useState({ n: 3, l: 2, m: 1, nuclearCharge: 1 });
  const [exposure, setExposure] = useState(0);

  function updateQuantumNumbers(change) {
    setState(current => {
      const next = { ...current, ...change };
      if ('n' in change) {
        next.l = Math.min(current.l, next.n - 1);
        next.m = Math.max(-next.l, Math.min(next.l, current.m));
      }
      if ('l' in change) next.m = Math.max(-next.l, Math.min(next.l, current.m));
      return next;
    });
  }

  return <main className="app-shell">
    <header className="app-header">
      <div className="brand">
        <img src={`${import.meta.env.BASE_URL}quantum-orbital-mark.svg`} alt=""/>
        <div><strong>QuantumOrbital</strong><span>HYDROGENIC ORBITAL EXPLORER</span></div>
      </div>
      <div className="header-model">ANALYTICAL COULOMB EIGENSTATES <span>·</span> ONE ELECTRON</div>
      <div className="header-state">{state.n}{['s','p','d','f','g','h','i','k'][state.l]}{state.m > 0 ? ` +${state.m}` : ` ${state.m}`}</div>
    </header>

    <OrbitalViewer
      {...state}
      onQuantumNumbersChange={updateQuantumNumbers}
      exposure={exposure}
      onExposureChange={setExposure}
    />

    <footer className="app-footer">
      <span>STATIONARY-STATE DENSITY <b>|ψ<sub>nℓm</sub>|²</b></span>
      <span>Normalized hydrogenic solutions · infinite nuclear mass</span>
    </footer>
  </main>;
}
