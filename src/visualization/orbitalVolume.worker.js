import { buildOrbitalVolume } from './orbitalVolume.js';

self.onmessage = event => {
  try {
    const volume = buildOrbitalVolume(event.data);
    self.postMessage(volume, [volume.density.buffer]);
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : String(error) });
  }
};
