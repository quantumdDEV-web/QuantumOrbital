import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import OrbitalViewer from './components/OrbitalViewer.jsx';
import { buildStateGroups } from './physics/states.js';
import {
  clampQuantumNumbers, decodeState, encodeState, physicsConfig, sanitizeState,
} from './state/urlState.js';
import './styles/orbital.css';

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

  return <div className="app">
    <header className="site-header">
      <div>
        <h1>Hydrogen orbitals</h1>
        <p>Where a single electron is likely to be found around a nucleus, calculated exactly instead of approximated.</p>
      </div>
      <p className="current-state" aria-live="polite">{label}</p>
    </header>

    <main>
      <OrbitalViewer
        state={state}
        onChange={updateState}
        initialCamera={initialCamera}
        onCameraEnd={handleCameraEnd}
      />
    </main>

    <footer className="site-footer">
      <p>
        Orbitals are exact solutions for one electron and a fixed nucleus. Density colours use Seaborn&rsquo;s rocket map.
        {' '}<a href="https://github.com/quantumdDEV-web/QuantumOrbital">Source code on GitHub</a>.
      </p>
    </footer>
  </div>;
}
