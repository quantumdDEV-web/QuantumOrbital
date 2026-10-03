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
  const basePositions = useMemo(() => positions.slice(), [positions]);
  const animationTime = useRef(0);
  const sampleFrame = useRef(0);
  const sampleCursor = useRef(0);
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
    animationTime.current = 0;
    sampleFrame.current = 0;
    sampleCursor.current = 0;
  }, [positions]);

  useFrame((_, delta) => {
    if (paused) return;
    const attribute = geometry.getAttribute('position');
    const animatedPositions = attribute.array;
    const colorAttribute = geometry.getAttribute('color');
    const animatedColors = colorAttribute.array;
    animationTime.current += delta;
    const time = animationTime.current;
    const amplitude = 0.045 * n * n;

    // Refresh a small batch each frame to create the flowing particle motion
    // used by the reference simulator without rebuilding the whole cloud.
    const resampleCount = Math.min(pointCount, Math.max(1, Math.ceil(pointCount * 0.05)));
    const samples = sampleOrbitalPositions(resampleCount, n, l, m, 271828 + sampleFrame.current++);
    for (let sample = 0; sample < resampleCount; sample += 1) {
      const pointIndex = (sampleCursor.current + sample) % pointCount;
      const offset = pointIndex * 3;
      const source = sample * 3;
      basePositions[offset] = samples[source];
      basePositions[offset + 1] = samples[source + 1];
      basePositions[offset + 2] = samples[source + 2];
      writePhaseColor(animatedColors, pointIndex, samples[source], samples[source + 1], samples[source + 2], n, l, m);
    }
    sampleCursor.current = (sampleCursor.current + resampleCount) % pointCount;
    colorAttribute.needsUpdate = true;

    for (let i = 0; i < animatedPositions.length; i += 3) {
      const particle = i / 3;
      const phase = particle * 2.39996;
      animatedPositions[i] = basePositions[i] + Math.sin(time * 3.2 + phase) * amplitude;
      animatedPositions[i + 1] = basePositions[i + 1] + Math.sin(time * 4.1 + phase * 1.37) * amplitude;
      animatedPositions[i + 2] = basePositions[i + 2] + Math.sin(time * 3.7 + phase * 1.79) * amplitude;
    }
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
