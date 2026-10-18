import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import OrbitalViewer from './components/OrbitalViewer.jsx';
import { buildStateGroups } from './physics/states.js';
import {
  clampQuantumNumbers, decodeState, encodeState, physicsConfig, sanitizeState,
} from './state/urlState.js';
import './styles/orbital.css';
import './styles/controls.css';

function readInitialHash() {
  try {
    return decodeState(window.location.hash);
  } catch {
    return { state: sanitizeState({}), camera: null };
  }
}

export default function App() {
  const initial = useRef(null);
  if (initial.current === null) initial.current = readInitialHash();
  const [state, setState] = useState(initial.current.state);
  const [camera, setCamera] = useState(initial.current.camera);
  const initialCamera = initial.current.camera;

  const updateState = useCallback(change => {
    setState(current => {
      const next = { ...current, ...change };
      // Keep (n, l, m) valid when any of them changes, preferring the field the user just edited.
      if ('n' in change || 'l' in change || 'm' in change) {
        Object.assign(next, clampQuantumNumbers(next.n, next.l, next.m));
      }
      if (change.second) {
        next.second = { ...current.second, ...change.second };
        Object.assign(next.second, clampQuantumNumbers(next.second.n, next.second.l, next.second.m));
      }
      return sanitizeState(next);
    });
  }, []);

  const handleCameraEnd = useCallback(position => setCamera(position), []);

  useEffect(() => {
    // Debounced: dragging a slider would otherwise hit browser limits on history updates.
    const timer = window.setTimeout(() => {
      try {
        window.history.replaceState(null, '', `#${encodeState(state, camera)}`);
      } catch {
        // History can be unavailable in sandboxed frames; sharing then simply stays off.
      }
    }, 250);
    return () => window.clearTimeout(timer);
  }, [state, camera]);

  const label = useMemo(() => {
    try {
      return buildStateGroups(physicsConfig(state)).label;
    } catch {
      return '';
    }
  }, [state]);

  return <main className="app-shell">
    <header className="app-header">
      <div className="brand">
        <img src={`${import.meta.env.BASE_URL}quantum-orbital-mark.svg`} alt=""/>
        <div><strong>QuantumOrbital</strong><span>HYDROGENIC ORBITAL EXPLORER</span></div>
      </div>
      <div className="header-model">ANALYTICAL COULOMB EIGENSTATES <span>·</span> ONE ELECTRON</div>
      <div className="header-state">{label}</div>
    </header>

    <OrbitalViewer
      state={state}
      onChange={updateState}
      initialCamera={initialCamera}
      onCameraEnd={handleCameraEnd}
    />

    <footer className="app-footer">
      <span>STATIONARY-STATE DENSITY <b>|ψ<sub>nℓm</sub>|²</b></span>
      <span>Normalized hydrogenic solutions · infinite nuclear mass</span>
    </footer>
  </main>;
}
