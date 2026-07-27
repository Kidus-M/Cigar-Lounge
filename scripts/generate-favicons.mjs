import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "public");
const sourcePath = path.join(publicDir, "alphawolf.png");

const GREEN = "#22c55e";
const BLACK = "#050807";

await mkdir(publicDir, { recursive: true });

async function createIcon(size) {
  const borderWidth = Math.max(1, Math.round(size * 0.035));
  const inset = Math.max(1, Math.round(size * 0.055));
  const radius = Math.round(size * 0.22);
  const wolfWidth = Math.round(size * 0.82);
  const wolfHeight = Math.round(size * 0.7);

  const background = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="42%" r="70%">
          <stop offset="0" stop-color="#123322" />
          <stop offset="1" stop-color="${BLACK}" />
        </radialGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${radius}" fill="url(#bg)" />
      <rect x="${inset}" y="${inset}" width="${size - inset * 2}" height="${size - inset * 2}"
        rx="${Math.max(1, radius - inset)}" fill="none" stroke="${GREEN}" stroke-width="${borderWidth}" />
    </svg>
  `);

  const wolf = await sharp(sourcePath)
    .trim()
    .resize({ width: wolfWidth, height: wolfHeight, fit: "contain" })
    .greyscale()
    .normalize()
    .tint("#dcfce7")
    .sharpen()
    .png()
    .toBuffer();

  const metadata = await sharp(wolf).metadata();
  const left = Math.round((size - metadata.width) / 2);
  const top = Math.round((size - metadata.height) / 2 - size * 0.01);

  return sharp(background)
    .composite([{ input: wolf, left, top }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(images.length * 16);
  let offset = header.length + directory.length;

  images.forEach(({ size, data }, index) => {
    const entry = index * 16;
    directory.writeUInt8(size === 256 ? 0 : size, entry);
    directory.writeUInt8(size === 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2);
    directory.writeUInt8(0, entry + 3);
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...images.map(({ data }) => data)]);
}

const sizes = [16, 32, 48, 180, 192, 512];
const icons = new Map();

for (const size of sizes) {
  icons.set(size, await createIcon(size));
}

await Promise.all([
  writeFile(path.join(publicDir, "favicon-16x16.png"), icons.get(16)),
  writeFile(path.join(publicDir, "favicon-32x32.png"), icons.get(32)),
  writeFile(path.join(publicDir, "apple-touch-icon.png"), icons.get(180)),
  writeFile(path.join(publicDir, "android-chrome-192x192.png"), icons.get(192)),
  writeFile(path.join(publicDir, "android-chrome-512x512.png"), icons.get(512)),
  writeFile(
    path.join(publicDir, "favicon.ico"),
    createIco([16, 32, 48].map((size) => ({ size, data: icons.get(size) }))),
  ),
]);

const source = await readFile(sourcePath);
console.log(`Generated Wolf Den favicons from ${path.basename(sourcePath)} (${source.length} source bytes).`);
