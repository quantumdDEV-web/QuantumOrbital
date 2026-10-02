import { useMemo } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';
import { useOrbital } from '../hooks/useOrbital.js';

export default function OrbitalCloud({ pointCount }) {
  const positions = useOrbital(pointCount);
  const geometry = useMemo(() => {
    const value = new BufferGeometry();
    value.setAttribute('position', new BufferAttribute(positions, 3));
    return value;
  }, [positions]);
  return <points geometry={geometry}><pointsMaterial color="#63d9ff" size={0.035} transparent opacity={0.34} sizeAttenuation depthWrite={false} /></points>;
}
