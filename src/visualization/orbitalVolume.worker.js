import { buildStateVolume } from './stateVolume.js';

self.onmessage = event => {
  try {
    const volume = buildStateVolume(event.data);
    self.postMessage(volume, [
      volume.psi.buffer,
      volume.levels.buffer,
      volume.points.buffer,
      volume.pointValues.buffer,
    ]);
  } catch (error) {
    self.postMessage({ error: error instanceof Error ? error.message : String(error) });
  }
};
