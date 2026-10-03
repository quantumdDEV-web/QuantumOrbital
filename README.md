# QuantumOrbital

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
