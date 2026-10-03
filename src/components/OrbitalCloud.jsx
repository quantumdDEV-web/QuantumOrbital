import { useEffect, useMemo } from 'react';
import { BufferAttribute, BufferGeometry, Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { useOrbital } from '../hooks/useOrbital.js';

const MAX_IONIZATION_ENERGY_EV = 25;

export default function OrbitalCloud({ pointCount, n = 1, l = 0, m = 0, ionizationEnergy = null }) {
  const positions = useOrbital(pointCount, n, l, m);
  const basePositions = useMemo(() => positions.slice(), [positions]);
  const colors = useMemo(() => {
    const result = new Float32Array(positions.length);
    const color = new Color();
    if (Number.isFinite(ionizationEnergy)) {
      const amount = Math.min(1, Math.max(0, ionizationEnergy / MAX_IONIZATION_ENERGY_EV));
      color.setHSL(0.66 - 0.64 * amount, 0.82, 0.54);
    } else {
      color.set('#697681');
    }
    for (let i = 0; i < positions.length; i += 3) {
      result[i] = color.r;
      result[i + 1] = color.g;
      result[i + 2] = color.b;
    }
    return result;
  }, [positions, ionizationEnergy]);
  const geometry = useMemo(() => {
    const next = new BufferGeometry();
    next.setAttribute('position', new BufferAttribute(positions, 3));
    next.setAttribute('color', new BufferAttribute(colors, 3));
    return next;
  }, [positions, colors]);

  useFrame(({ clock }) => {
    const attribute = geometry.getAttribute('position');
    const animatedPositions = attribute.array;
    const time = clock.elapsedTime;
    const amplitude = 0.045 * n * n;

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
