import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { buildOrbitalVolume, hydrogenicGridExtent } from '../src/visualization/orbitalVolume.js';
import { createHydrogenicDensityEvaluator } from '../src/physics/hydrogen/orbitalMath.js';
import { ROCKET_COLORS } from '../src/visualization/rocket.js';

const WIDTH = 360;
const HEIGHT = 360;
const BACKGROUND = [3, 5, 26];
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let value = n;
  for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  CRC_TABLE[n] = value >>> 0;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const name = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([length, name, data, checksum]);
}

function png(pixels) {
  const rows = Buffer.alloc((WIDTH * 4 + 1) * HEIGHT);
  for (let y = 0; y < HEIGHT; y += 1) {
    const rowStart = y * (WIDTH * 4 + 1);
    rows[rowStart] = 0;
    pixels.copy(rows, rowStart + 1, y * WIDTH * 4, (y + 1) * WIDTH * 4);
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(WIDTH, 0);
  header.writeUInt32BE(HEIGHT, 4);
  header[8] = 8;
  header[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(rows, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function hexRgb(hex) {
  return [1, 3, 5].map(offset => Number.parseInt(hex.slice(offset, offset + 2), 16));
}

function renderSlice({ n, l, m, filename }) {
  const nuclearCharge = 1;
  const extent = hydrogenicGridExtent(n, l, nuclearCharge, 2);
  const { vmax } = buildOrbitalVolume({ n, l, m, nuclearCharge, size: 72, extent });
  const evaluate = createHydrogenicDensityEvaluator(n, l, m, nuclearCharge);
  const pixels = Buffer.alloc(WIDTH * HEIGHT * 4);

  for (let row = 0; row < HEIGHT; row += 1) {
    const z = extent * (1 - 2 * (row + 0.5) / HEIGHT);
    for (let column = 0; column < WIDTH; column += 1) {
      const x = extent * (2 * (column + 0.5) / WIDTH - 1);
      const normalized = Math.max(0, Math.min(1, evaluate(x, 0, z) / vmax));
      const color = normalized <= 0.0001 ? BACKGROUND : hexRgb(ROCKET_COLORS[Math.floor(normalized * 255)]);
      const index = (row * WIDTH + column) * 4;
      pixels[index] = color[0];
      pixels[index + 1] = color[1];
      pixels[index + 2] = color[2];
      pixels[index + 3] = 255;
    }
  }

  writeFileSync(new URL(`../public/${filename}`, import.meta.url), png(pixels));
}

renderSlice({ n: 1, l: 0, m: 0, filename: 'orbital-1s-slice.png' });
renderSlice({ n: 3, l: 2, m: 1, filename: 'orbital-3d-slice.png' });
console.log('Generated exact hydrogenic y=0 slices with the project Rocket colormap.');
