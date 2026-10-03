# QuantumOrbital

QuantumOrbital is an interactive atomic-orbital explorer built with React, Three.js, and Vite. It pairs a 3D probability cloud with a radial probability graph so you can explore how hydrogenic orbitals vary with their quantum numbers.

> An orbital is a quantum state, not a classical path followed by an electron. The visualization shows a sampled probability distribution for the selected state.

## Features

- Browse a periodic table containing data for 118 elements, including atomic number, atomic mass, electron configuration, shell populations, category, and first ionization energy where available.
- Search elements and color the table by category or first ionization energy.
- Choose an occupied subshell listed for an element and select its magnetic quantum number, `m`.
- Explore an interactive 3D cloud with positive and negative wavefunction phase shown in blue and red.
- Pause the cloud animation, view along the X, Y, or Z axis, reset the camera, and export the scene as a PNG.
- Compare the radial probability distribution with a selected radius, expressed in Bohr radii (`a₀`).
- Adjust the number of cloud samples and use the interface on mobile screens.

## Physics model and scope

The orbital cloud and radial graph use hydrogenic single-electron radial functions and real spherical-harmonic angular functions for the selected quantum numbers `n`, `l`, and `m`. The particle positions are sampled from the resulting radial and angular probability distributions. The colors indicate the sign (phase) of the real wavefunction; they do not indicate energy.

The selected element supplies context such as its electron configuration and ionization energy. The orbital calculation does not model that element's effective nuclear charge, electron screening, electron-electron interactions, or full many-electron wavefunction. Treat the selected subshell visualization as a hydrogenic model, not a prediction of the exact orbital in a many-electron atom.

The graph shows radial probability density by distance from the nucleus, not cumulative probability inside a sphere. The selected radius is marked on the curve.

## Data sources

Element data sources are linked in the app's element profile. The underlying source links are:

- [NIST Periodic Table (2024)](https://www.nist.gov/document/periodic-table-2024)
- [NIST Atomic Weights and Isotopic Compositions](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses)
- [NIST Ground Levels and Ionization Energies for Neutral Atoms](https://www.nist.gov/pml/ground-levels-and-ionization-energies-neutral-atoms)

Ground-state configuration exceptions are included where provided; remaining configurations use Aufbau filling. Some values may be unavailable or estimated in the dataset.

## Run locally

Requires Node.js 22 or later.

```sh
git clone https://github.com/quantumdDEV-web/QuantumOrbital.git
cd QuantumOrbital
npm ci
npm run dev
```

## Build and tests

```sh
npm run build
npm test
```

## Deploy to GitHub Pages

The Vite base path is configured for the repository name, `/QuantumOrbital/`. A GitHub Actions workflow builds the app and deploys the `dist` directory when changes are pushed to `main`; it can also be started manually from the repository's Actions tab. Enable GitHub Pages for the repository with **GitHub Actions** as the build and deployment source.

## Project structure

- `src/components/` — React interface, periodic table, radial graph, and 3D scene.
- `src/physics/` — hydrogenic orbital mathematics, element data, and probability calculations.
- `src/visualization/` — probability-based particle sampling.
- `src/hooks/` — React hooks for orbital data and state.
- `src/styles/` — application and feature styles.
- `public/` — static assets, including the project logo.

See [LICENSE](LICENSE) for license terms.
