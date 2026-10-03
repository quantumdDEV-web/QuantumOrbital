# QuantumOrbital

<<<<<<< HEAD
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
=======
> **See quantum mechanics instead of just reading about it.**

QuantumOrbital is an interactive 3D visualization of atomic orbitals, built to make the mathematics behind quantum mechanics something you can actually explore.

The project connects the hydrogen 1s wavefunction to a sampled three dimensional probability distribution, radial probability curves, and probability calculations.

## ✨ What you can explore

• Interactive 3D probability cloud  
• Hydrogen 1s quantum state  
• Radial probability distribution  
• Enclosed probability calculations  
• Quantum numbers and their physical meaning  
• Deterministic probability sampling  
• A physics layer separated from the visual interface  

## 🧠 The idea

An orbital is not a tiny path followed by an electron.

It is a quantum state described by a wavefunction. The quantity \`|ψ(r,θ,φ)|²\` gives the probability density for finding the electron at a particular location.

QuantumOrbital turns that mathematical description into a visual representation you can explore in three dimensions.

> **The cloud is a probability distribution, not a literal electron cloud and not a classical trajectory.**
>>>>>>> 5d0adf4e1b733417d190c72072a53cc76d57c22a

## ⚛️ Physics

The current implementation uses the hydrogen ground state:

\`n = 1, l = 0, m = 0\`

The wavefunction is

\`ψ₁₀₀ = 1 / √(πa₀³) · exp(−r/a₀)\`

and the probability density is

\`|ψ₁₀₀|² = 1 / (πa₀³) · exp(−2r/a₀)\`

where \`a₀\` is the Bohr radius:

\`a₀ = 5.29177210903 × 10⁻¹¹ m\`

The radial probability distribution is \`P(r) = 4πr²|ψ|²\`.

## 🛠️ Built with

| Technology | Purpose |
| --- | --- |
| React | User interface |
| Vite | Development tooling |
| Three.js | 3D rendering |
| React Three Fiber | React based Three.js integration |
| Drei | 3D utilities |
| Recharts | Scientific plotting |
| Vitest | Physics testing |

## 🏗️ Architecture

The project keeps the physics and presentation layers separated.

\`src/physics\`  
Quantum mechanical models, probability calculations and validation.

\`src/visualization\`  
Three dimensional rendering and probability cloud generation.

\`src/components\`  
Interactive interface components.

\`src/hooks\`  
Shared application state and quantum state handling.

\`src/styles\`  
Visual presentation and responsive UI.

## 🚀 Run locally

\`\`\`bash
git clone https://github.com/quantumdDEV-web/QuantumOrbital.git
cd QuantumOrbital
npm install
npm run dev
\`\`\`

<<<<<<< HEAD
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
=======
Build for production with \`npm run build\`.

Run the physics tests with \`npm test\`.

## 🔬 Current scope

The current release implements the hydrogen 1s orbital.

The probability cloud is sampled deterministically and displayed up to 12 Bohr radii. The omitted tail is approximately \`1.2 × 10⁻⁸\` of the total probability.

The project intentionally avoids fake placeholder orbitals. New states are added only when their underlying radial functions, angular functions, probability calculations and sampling logic are implemented.

## 🗺️ Roadmap

The long term goal is to turn QuantumOrbital into a broader atomic orbital laboratory.

• More hydrogen orbitals such as 2s, 2p and higher states  
• Interactive quantum number controls  
• Orbital comparisons  
• More atomic states and elements  
• Improved probability sampling  
• Energy level visualization  
• More scientific analysis tools  
• Educational explanations alongside the simulations  

## 🤝 Contributing

Ideas, improvements and scientific corrections are welcome.

If you find a bug or have an idea for a better visualization, open an issue or submit a pull request.

## 📚 Why build this?

Quantum mechanics is full of ideas that are easy to describe mathematically but difficult to visualize.

QuantumOrbital is an experiment in making those ideas tangible.

**Explore the state. Change the parameters. Watch the mathematics become a picture.**

---

Built with curiosity, physics and code. ⚛️
>>>>>>> 5d0adf4e1b733417d190c72072a53cc76d57c22a
