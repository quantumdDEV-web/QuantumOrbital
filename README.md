# QuantumOrbital

**Explore the shape of hydrogenic orbitals in an interactive 3D viewer.**

[Open QuantumOrbital on GitHub Pages](https://quantumddev-web.github.io/QuantumOrbital/)

QuantumOrbital calculates hydrogenic wavefunctions and turns their probability density into a rotatable volume. Choose a quantum state, orbit the camera, and inspect how the density changes across space.

## See the calculated orbitals

These images are generated from QuantumOrbital's analytical wavefunction code and sampled 3D density grid. Each image shows the exact `y = 0` cross-section, colored with the project's Seaborn Rocket lookup table and normalized to the sampled 3D field's 99.9th percentile. They are calculated previews, not photographs or measured atomic images. The website shows the same representative `s`, `p`, `d`, and `f` examples below the interactive camera.

<p align="center">
  <img src="public/orbital-1s-slice.png" alt="Calculated x-z probability-density slice for hydrogen 1s" width="360" />
  <img src="public/orbital-2p-slice.png" alt="Calculated x-z probability-density slice for hydrogen 2p, m equals 0" width="360" />
  <img src="public/orbital-3d-slice.png" alt="Calculated x-z probability-density slice for hydrogen 3d, m equals 1" width="360" />
  <img src="public/orbital-4f-slice.png" alt="Calculated x-z probability-density slice for hydrogen 4f, m equals 0" width="360" />
</p>

| State | Quantum numbers | What the slice shows |
| --- | --- | --- |
| Hydrogen 1s | `n = 1, ℓ = 0, m = 0` | Spherically symmetric density; the plane appears as a central peak. |
| Hydrogen 2p | `n = 2, ℓ = 1, m = 0` | Two lobes separated by an angular node. |
| Hydrogen 3d | `n = 3, ℓ = 2, m = 1` | Four bright pockets in this plane slice; the full 3D density forms two toroidal lobes above and below the equatorial node. |
| Hydrogen 4f | `n = 4, ℓ = 3, m = 0` | A higher-angular-momentum example with several regions separated by angular nodes. |

The viewer samples the full 3D field; these 2D previews are just sections through that calculated volume.

## What the model calculates

The app evaluates the normalized, non-relativistic hydrogenic solution

\[
\psi_{n\ell m}(r,\theta,\phi) = R_{n\ell}(r)Y_\ell^m(\theta,\phi),
\qquad \rho = |\psi_{n\ell m}|^2.
\]

- `n`, `ℓ`, and `m` obey the usual hydrogenic quantum-number rules.
- The nucleus is treated as a point with infinite mass. `Z = 1` is hydrogen; `Z > 1` describes a one-electron hydrogen-like ion, not a neutral multi-electron atom.
- The density is evaluated on a cubic grid in a Web Worker and displayed as a WebGL 3D volume.
- Density color uses the Seaborn Rocket map. The display scale uses the 99.9th percentile of the sampled 3D field; exposure adjusts the transfer curve for visibility.
- The displayed opacity is a rendering choice, not a physical absorption coefficient or another probability model.

## Using the viewer

- Drag to rotate, right-drag to pan, and scroll or pinch to zoom.
- Use `ISO`, `XY`, `XZ`, and `YZ` for standard camera views; `RESET` restores the initial framing.
- Select nuclear charge and quantum numbers to explore different hydrogenic states. The exposure slider changes density contrast.

## Run locally

```sh
npm ci
npm run dev
```

Run the scientific checks and production build with:

```sh
npm test
npm run build
```

The preview images can be regenerated from the same orbital functions and color map used by the app:

```sh
node scripts/generate-readme-previews.js
```

GitHub Pages deployment uses the repository's Pages workflow and `/QuantumOrbital/` base path.

## Collaborate

I'm open to collaborating with others. If you're interested in improving the physics, validating calculations, refining the 3D rendering, or making the app easier to use, feel free to open an issue or a pull request. A small reproducible example or a clear description of the idea is a great place to start.

## References and licenses

The hydrogenic formulas and original 2D plotting approach were informed by the [hydrogen-wavefunctions reference project](https://github.com/ssebastianmag/hydrogen-wavefunctions) and its [plotting source](https://github.com/ssebastianmag/hydrogen-wavefunctions/blob/main/hwf_plots.py). That project is GPL-3.0; QuantumOrbital does not copy its implementation code. The Rocket lookup-table data comes from Seaborn and is covered by BSD-3-Clause terms recorded in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). QuantumOrbital's source is MIT licensed.
