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

## Scientific validation and limits

The orbital evaluator uses normalized hydrogenic radial eigenfunctions and normalized real spherical harmonics in atomic units (`a₀` coordinates; `a₀⁻³/²` wavefunction). Its radial curve is `r²|Rₙₗ(r)|²` per `a₀`; the 3D slice shows `|ψ|²`, with color normalized to the maximum within that slice. Nodes come from the associated Laguerre and Legendre factors. The browser does not solve a new many-electron Schrödinger equation.

Tests compare the 1s and 2p functions and nodes with their analytic solutions, integrate radial distributions for every `(n,l)` through `n = 6`, check real-harmonic normalization, and compare radial CDF results at two grid resolutions.

The NIST H I handbook level for 1s→2p₃/₂ is 82,259.2850 cm⁻¹. The nonrelativistic infinite-nuclear-mass Schrödinger result, using the CODATA 2022 Rydberg constant, is 82,302.9868 cm⁻¹. The 43.70 cm⁻¹ difference is expected: that model omits finite nuclear mass, fine structure, and QED corrections. This comparison is a scope check; it is not a claim that the simple model reproduces precision hydrogen spectroscopy. [NIST H I levels](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable5_a.htm) · [NIST CODATA Rydberg constant](https://physics.nist.gov/cgi-bin/cuu/Value?ryd%7Csearch_for=Rydberg)

## Reference-code review

- PySCF is Apache-2.0 licensed. Its `cubegen` implementation evaluates orbitals and densities on regular Cartesian grids and writes Gaussian CUBE files. This is a useful future interchange format for computed reference orbitals; no PySCF code or dependency is bundled here.
- Psi4 is distributed under LGPL-3.0 with GPL-3.0 components. `cubeprop()` exports molecular orbitals, density, and electrostatic potential to cube files. It is suitable for offline reference calculations, but not a browser runtime dependency.
- CCCBDB (NIST SRD 101, Release 22) pairs computed and experimental properties for selected gas-phase atoms and small molecules. Its basis/method-qualified results could support a future comparison mode; they are not interchangeable with exact hydrogenic orbitals.
- abTEM is GPL-3.0 and models electron microscopy scattering potentials/waves, including GPAW-derived charge-density potentials. That is a different physical quantity and problem from bound atomic orbitals, so it was not adapted.
- The Three.js examples and `MarchingCubes` addon show useful grid-based rendering approaches. A dense 3D field or marching-cubes surface is not added yet: the current analytic cloud plus a computed 2D slice keeps the page light and avoids presenting an arbitrary isovalue as a probability boundary.

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
