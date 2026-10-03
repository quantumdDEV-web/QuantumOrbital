# QuantumOrbital

QuantumOrbital is an interactive atom and orbital visualizer built with React, Three.js, and Vite. Explore element data, select an occupied subshell, and compare its 3D probability cloud with a radial probability distribution graph.

## Features

- Periodic table with data for 118 elements, including atomic number, mass, electron configuration, shells, category, and first ionization energy where available.
- Element category or first-ionization-energy coloring for the periodic table. The energy color scale runs from 0 to 25 eV; unavailable values are shown in gray.
- Select an occupied orbital from an element's electron configuration and choose its magnetic quantum number, `m`.
- Interactive 3D orbital cloud on a dark background. The cyan glow shows the probability cloud; blue and red points mark positive and negative wavefunction phase. Points continuously resample and move.
- Pause and resume the particle motion, snap the camera to the X, Y, or Z axis, reset the view, or save the 3D canvas as a PNG.
- Radial probability distribution graph with the selected radius marked on the curve. The graph shows probability density by distance from the nucleus, not cumulative probability inside a sphere.
- Adjustable probability radius and cloud sample count, with a responsive layout for phones.
- Element profile with electron configuration, shell information, and first ionization energy.

## Physics model and limits

The selected subshell is visualized with a hydrogenic single-electron model. Its radial and angular probability distributions determine the sampled cloud. Red and blue encode the sign (phase) of the real wavefunction; they do not encode energy. The selected element's first ionization energy is shown as a numerical value, and can also be compared across elements using the periodic-table color scale.

For atoms with more than one electron, the visualization does not calculate electron screening, electron-electron interactions, or a full many-electron wavefunction. Element configurations use listed ground-state exceptions where provided and Aufbau filling for the remaining elements. Atomic data sources are linked in the element profile.

## Run locally

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Create a production build or run the physics tests:

```sh
npm run build
npm test
```

## GitHub Pages

The Vite base path is configured as `/QuantumOrbital/`. The Pages workflow in `.github/workflows/pages.yml` builds the app and deploys the generated `dist` directory when changes are pushed to `main`.

## Project layout

- `src/components/` — React interface, periodic table, radial graph, and 3D scene.
- `src/physics/` — hydrogenic orbital math, element data, and probability calculations.
- `src/visualization/` — probability-based particle sampling.
- `src/hooks/` — React hooks for orbital data.
- `src/styles/` — application and feature styles.
- `public/` — static assets, including the project logo.

See [LICENSE](LICENSE) for license terms.
