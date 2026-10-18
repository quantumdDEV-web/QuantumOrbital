# QuantumOrbital

An interactive 3D density viewer for analytical hydrogenic eigenstates.

The model evaluates normalized hydrogenic radial functions and orthonormal complex spherical harmonics, then samples
\[
  \rho_{n\ell m}(x,y,z)=|R_{n\ell}(r)Y_\ell^m(\theta,\phi)|^2
\]
on a cubic volume grid. The grid is rendered in WebGL with front-to-back volume integration. Drag to orbit, right-drag to pan, scroll or pinch to zoom, or choose an `XY`, `XZ`, `YZ`, or isometric camera preset.

## Viewer features

- **Orbital types:** complex eigenstates, real orbitals (p_x, d_z², ...), and sp / sp² / sp³ hybrids.
- **Superposition:** mix any two states; different n beat at the energy difference (animated, time rescaled for display).
- **Render modes:** volume, isosurface enclosing a chosen share of the probability, slice plane, and Monte Carlo electron positions.
- **Colouring:** density (Rocket) or phase / sign of the wavefunction.
- **Camera:** animated presets, auto-rotate, fly inside the cloud, PNG export, and a shareable link that stores the state and camera in the URL hash.
- **Radial plot:** r²R² with radial nodes marked, plus node counts.

## Model and display

- `n`, `ℓ`, `m`, and nuclear charge `Z` follow the hydrogenic rules: `n ≥ 1`, `0 ≤ ℓ < n`, and `|m| ≤ ℓ`.
- The model is the exact non-relativistic one-electron Coulomb solution with an infinite-mass point nucleus. `Z = 1` is hydrogen; `Z > 1` is a hydrogen-like ion. It does not approximate neutral multielectron atoms.
- Radial and angular factors are normalized analytically. `m` changes the complex wavefunction phase; in a stationary state, the complex-harmonic density is independent of the sign of `m`.
- Grid framing follows the reference plotting rule with `k = 2`: `extent = k(3n² − ℓ(ℓ+1))/(2Z)` in Bohr radii.
- Density colors use Seaborn's 256-sample `rocket` lookup table. The renderer uses `vmin = 0`, the sampled-volume 99.9th percentile as `vmax`, and `γ = 1/(1 + exposure)`, matching the reference plot's `PowerNorm` mapping. Values above `vmax` are clipped.
- The opacity integration is specific to the 3D volume display; it is not a physical absorption coefficient or an additional probability model.
- Density fields are sampled in a Web Worker at 72³, 88³, or 96³ voxels depending on `n`, then linearly reconstructed by the GPU.

The [reference project](https://github.com/ssebastianmag/hydrogen-wavefunctions) shows 2D plane plots, not 3D volume plots. This viewer extends its analytical density definition and display normalization to a three-dimensional field.

## Development

```sh
npm ci
npm run dev
npm test
npm run build
```

GitHub Pages deployment uses the existing `.github/workflows/pages.yml` workflow and the `/QuantumOrbital/` Vite base path.

## Sources and licenses

The mathematical definition and plot settings are documented in the reference project's [README](https://github.com/ssebastianmag/hydrogen-wavefunctions#readme) and [plotting module](https://github.com/ssebastianmag/hydrogen-wavefunctions/blob/main/hwf_plots.py). Its source code is licensed under [GPL-3.0](https://github.com/ssebastianmag/hydrogen-wavefunctions/blob/main/LICENSE); no implementation code from it is included here. The Rocket colormap data is from Seaborn and is covered by the BSD-3-Clause terms in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). QuantumOrbital's own source remains under the repository's MIT license.
