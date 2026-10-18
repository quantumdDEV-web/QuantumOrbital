import { useEffect, useMemo, useRef } from 'react';
import { BufferAttribute, BufferGeometry, Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { useOrbital } from '../hooks/useOrbital.js';
import { hydrogenicWavefunctionSign } from '../physics/hydrogen/orbitalMath.js';
import { sampleOrbitalPositions } from '../visualization/particleSampling.js';

const POSITIVE_PHASE = new Color('#2e64e1');
const NEGATIVE_PHASE = new Color('#ff6666');
const VIRIDIS = ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'].map(value => new Color(value));
const COLOR_TEMP = new Color();

function densityColor(value, colors) {
  const scaled = Math.max(0, Math.min(0.9999, value)) * (colors.length - 1);
  const index = Math.floor(scaled);
  return COLOR_TEMP.copy(colors[index]).lerp(colors[index + 1], scaled - index);
}

function writePhaseColor(colors, pointIndex, x, y, z, n, l, m) {
  const offset = pointIndex * 3;
  const color = hydrogenicWavefunctionSign(n, l, m, x, y, z) >= 0 ? POSITIVE_PHASE : NEGATIVE_PHASE;
  colors[offset] = color.r;
  colors[offset + 1] = color.g;
  colors[offset + 2] = color.b;
}

export default function OrbitalCloud({ pointCount, n = 1, l = 0, m = 0, paused = false, colorMode = 'phase' }) {
  const positions = useOrbital(pointCount, n, l, m);
  const sampleFrame = useRef(0);
  const colors = useMemo(() => {
    const result = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      const amplitude = hydrogenicWavefunctionSign(n, l, m, positions[i], positions[i + 1], positions[i + 2]);
      if (colorMode === 'density') {
        const color = densityColor(Math.min(1, Math.log1p(amplitude * amplitude * 100) / Math.log(101)), VIRIDIS);
        result[i] = color.r; result[i + 1] = color.g; result[i + 2] = color.b;
      } else writePhaseColor(result, i / 3, positions[i], positions[i + 1], positions[i + 2], n, l, m);
    }
    return result;
  }, [positions, n, l, m, colorMode]);
  const geometry = useMemo(() => {
    const next = new BufferGeometry();
    next.setAttribute('position', new BufferAttribute(positions, 3));
    next.setAttribute('color', new BufferAttribute(colors, 3));
    return next;
  }, [positions, colors]);

  useEffect(() => {
    sampleFrame.current = 0;
  }, [positions]);

  const elapsed = useRef(0);
  useFrame((_, delta) => {
    if (paused) return;
    // A measured cadence keeps the cloud alive without resampling thousands of points at display refresh rate.
    elapsed.current += delta;
    if (elapsed.current < 0.16) return;
    elapsed.current = 0;
    const attribute = geometry.getAttribute('position');
    const animatedPositions = attribute.array;
    const colorAttribute = geometry.getAttribute('color');
    const animatedColors = colorAttribute.array;
    // Match the reference simulator by refreshing the full probability sample each frame.
    const samples = sampleOrbitalPositions(pointCount, n, l, m, 271828 + sampleFrame.current++);
    animatedPositions.set(samples);
    for (let point = 0; point < pointCount; point += 1) {
      const offset = point * 3;
      if (colorMode === 'density') {
        const amplitude = hydrogenicWavefunctionSign(n, l, m, samples[offset], samples[offset + 1], samples[offset + 2]);
        const color = densityColor(Math.min(1, Math.log1p(amplitude * amplitude * 100) / Math.log(101)), VIRIDIS);
        animatedColors[offset] = color.r; animatedColors[offset + 1] = color.g; animatedColors[offset + 2] = color.b;
      } else writePhaseColor(animatedColors, point, samples[offset], samples[offset + 1], samples[offset + 2], n, l, m);
    }
    colorAttribute.needsUpdate = true;
    attribute.needsUpdate = true;
  });

  useEffect(() => () => geometry.dispose(), [geometry]);

  return <>
    <points geometry={geometry} renderOrder={1}>
      <pointsMaterial color="#54d9ff" size={0.085} transparent opacity={0.2} sizeAttenuation depthWrite={false}/>
    </points>
    <points geometry={geometry} renderOrder={2}>
      <pointsMaterial vertexColors size={0.035} transparent opacity={0.82} sizeAttenuation depthWrite={false}/>
    </points>
  </>;
}
