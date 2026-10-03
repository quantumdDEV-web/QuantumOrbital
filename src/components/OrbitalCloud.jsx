import { useEffect, useMemo, useRef } from 'react';
import { BufferAttribute, BufferGeometry, Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { useOrbital } from '../hooks/useOrbital.js';
import { hydrogenicWavefunctionSign } from '../physics/hydrogen/orbitalMath.js';
import { sampleOrbitalPositions } from '../visualization/particleSampling.js';

const POSITIVE_PHASE = new Color('#2e64e1');
const NEGATIVE_PHASE = new Color('#ff6666');

function writePhaseColor(colors, pointIndex, x, y, z, n, l, m) {
  const offset = pointIndex * 3;
  const color = hydrogenicWavefunctionSign(n, l, m, x, y, z) >= 0 ? POSITIVE_PHASE : NEGATIVE_PHASE;
  colors[offset] = color.r;
  colors[offset + 1] = color.g;
  colors[offset + 2] = color.b;
}

export default function OrbitalCloud({ pointCount, n = 1, l = 0, m = 0, paused = false }) {
  const positions = useOrbital(pointCount, n, l, m);
  const sampleFrame = useRef(0);
  const colors = useMemo(() => {
    const result = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      writePhaseColor(result, i / 3, positions[i], positions[i + 1], positions[i + 2], n, l, m);
    }
    return result;
  }, [positions, n, l, m]);
  const geometry = useMemo(() => {
    const next = new BufferGeometry();
    next.setAttribute('position', new BufferAttribute(positions, 3));
    next.setAttribute('color', new BufferAttribute(colors, 3));
    return next;
  }, [positions, colors]);

  useEffect(() => {
    sampleFrame.current = 0;
  }, [positions]);

  useFrame(() => {
    if (paused) return;
    const attribute = geometry.getAttribute('position');
    const animatedPositions = attribute.array;
    const colorAttribute = geometry.getAttribute('color');
    const animatedColors = colorAttribute.array;
    // Match the reference simulator by refreshing the full probability sample each frame.
    const samples = sampleOrbitalPositions(pointCount, n, l, m, 271828 + sampleFrame.current++);
    animatedPositions.set(samples);
    for (let point = 0; point < pointCount; point += 1) {
      const offset = point * 3;
      writePhaseColor(animatedColors, point, samples[offset], samples[offset + 1], samples[offset + 2], n, l, m);
    }
    colorAttribute.needsUpdate = true;
    attribute.needsUpdate = true;
  });

  useEffect(() => () => geometry.dispose(), [geometry]);

  return <>
    <points geometry={geometry} renderOrder={1}>
      <pointsMaterial color="#54d9ff" size={2.6} transparent opacity={0.2} sizeAttenuation={false} depthWrite={false}/>
    </points>
    <points geometry={geometry} renderOrder={2}>
      <pointsMaterial vertexColors size={1.35} transparent opacity={0.82} sizeAttenuation={false} depthWrite={false}/>
    </points>
  </>;
}
