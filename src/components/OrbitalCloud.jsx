import { useEffect, useMemo } from 'react';
import { BufferAttribute, BufferGeometry, Color, ShaderMaterial } from 'three';
import { useOrbital } from '../hooks/useOrbital.js';
import { hydrogenicWavefunction, hydrogenicProbabilityDensity } from '../physics/hydrogen/orbitalMath.js';

const POSITIVE_PHASE = new Color('#c5d2cb');
const NEGATIVE_PHASE = new Color('#9c8e80');
const DENSITY_LOW = new Color('#405b59');
const DENSITY_HIGH = new Color('#e3d6b7');
const COLOR_WORK = new Color();
const VERTEX_SHADER = `
  attribute vec3 color;
  varying vec3 vColor;
  uniform float pointSize;
  void main() {
    vColor = color;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(pointSize * (280.0 / max(1.0, -viewPosition.z)), 2.0, 10.0);
  }
`;
const FRAGMENT_SHADER = `
  varying vec3 vColor;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5)) * 2.0;
    float alpha = exp(-radius * radius * 4.5) * (1.0 - smoothstep(0.18, 1.0, radius));
    if (alpha < 0.012) discard;
    gl_FragColor = vec4(vColor, alpha * 0.24);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export default function OrbitalCloud({ pointCount = 16000, n = 1, l = 0, m = 0, colorMode = 'density' }) {
  // A single fixed Monte Carlo sample makes the density read as a probability
  // field. Resampling every frame made individual points look like particles.
  const positions = useOrbital(pointCount, n, l, m);
  const colors = useMemo(() => {
    const result = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i], y = positions[i + 1], z = positions[i + 2];
      const color = colorMode === 'phase'
        ? (hydrogenicWavefunction(n, l, m, x, y, z) >= 0 ? POSITIVE_PHASE : NEGATIVE_PHASE)
        : COLOR_WORK.copy(DENSITY_LOW).lerp(DENSITY_HIGH, Math.min(1, Math.sqrt(hydrogenicProbabilityDensity(n, l, m, x, y, z) / 0.08)));
      result[i] = color.r; result[i + 1] = color.g; result[i + 2] = color.b;
    }
    return result;
  }, [positions, n, l, m, colorMode]);
  const geometry = useMemo(() => {
    const result = new BufferGeometry();
    result.setAttribute('position', new BufferAttribute(positions, 3));
    result.setAttribute('color', new BufferAttribute(colors, 3));
    return result;
  }, [positions, colors]);
  const material = useMemo(() => new ShaderMaterial({
    uniforms: { pointSize: { value: 0.9 } },
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
  }), []);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => () => material.dispose(), [material]);
  return <points geometry={geometry} material={material} frustumCulled={false} renderOrder={1}/>;
}
