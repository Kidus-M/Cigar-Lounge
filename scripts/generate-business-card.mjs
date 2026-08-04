import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const outputDir = path.join(projectDir, "business-card");
const assetDir = path.join(outputDir, "assets");

fs.mkdirSync(assetDir, { recursive: true });
fs.copyFileSync(
  path.join(projectDir, "wolf-den-welcome-qr.png"),
  path.join(assetDir, "wolf-den-welcome-qr.png"),
);

const sharedDefs = `
  <defs>
    <radialGradient id="coffeeGlow" cx="50%" cy="42%" r="78%">
      <stop offset="0" stop-color="#806048"/>
      <stop offset="0.58" stop-color="#6f4e37"/>
      <stop offset="1" stop-color="#52382b"/>
    </radialGradient>
    <pattern id="grain" width="54" height="54" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="13" r="1.2" fill="#f7ead8" opacity="0.026"/>
      <circle cx="39" cy="19" r="0.9" fill="#f7ead8" opacity="0.018"/>
      <circle cx="20" cy="46" r="1" fill="#f7ead8" opacity="0.02"/>
      <circle cx="49" cy="43" r="1.1" fill="#f7ead8" opacity="0.018"/>
    </pattern>
    <filter id="qrShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#1c100c" flood-opacity="0.45"/>
    </filter>
  </defs>`;

const base = `
  <rect width="1125" height="675" fill="url(#coffeeGlow)"/>
  <rect width="1125" height="675" fill="url(#grain)"/>
  <rect x="58" y="58" width="1009" height="559" rx="8" fill="none"
    stroke="#c79a6b" stroke-width="2" opacity="0.82"/>
  <rect x="70" y="70" width="985" height="535" rx="5" fill="none"
    stroke="#f7ead8" stroke-width="1" opacity="0.2"/>`;

const frontBody = `${base}
  <text x="562.5" y="330" text-anchor="middle" fill="#f7ead8"
    font-family="'Segoe Script', 'Brush Script MT', cursive" font-size="126"
    font-weight="700">Wolf Den</text>
  <text x="562.5" y="410" text-anchor="middle" fill="#ddb786"
    font-family="'Segoe UI', Arial, sans-serif" font-size="34" font-weight="700"
    letter-spacing="14">LOUNGE</text>`;

const backBody = `${base}
  <rect x="396.5" y="171.5" width="332" height="332" rx="22"
    fill="#ffffff" filter="url(#qrShadow)"/>
  <image href="./assets/wolf-den-welcome-qr.png" x="412.5" y="187.5"
    width="300" height="300" image-rendering="pixelated"/>`;

function cardSvg(body, { bleed, title, description }) {
  const width = bleed ? 1125 : 1050;
  const height = bleed ? 675 : 600;
  const viewBox = bleed ? "0 0 1125 675" : "37.5 37.5 1050 600";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
  viewBox="${viewBox}" role="img" aria-labelledby="title description">
  <title id="title">${title}</title>
  <desc id="description">${description}</desc>
  ${sharedDefs}
  ${body}
</svg>`;
}

const cards = [
  {
    name: "front",
    body: frontBody,
    title: "Wolf Den Lounge business card front",
    description: "Coffee brown card with centered Wolf Den script and Lounge below.",
  },
  {
    name: "back",
    body: backBody,
    title: "Wolf Den Lounge business card back",
    description: "Coffee brown card with a centered QR code for the welcome page.",
  },
];

for (const card of cards) {
  fs.writeFileSync(
    path.join(outputDir, `wolf-den-business-card-${card.name}.svg`),
    cardSvg(card.body, { ...card, bleed: false }),
  );
  fs.writeFileSync(
    path.join(outputDir, `wolf-den-business-card-${card.name}-bleed.svg`),
    cardSvg(card.body, { ...card, bleed: true }),
  );
}

fs.writeFileSync(
  path.join(outputDir, "README.txt"),
  `WOLF DEN LOUNGE BUSINESS CARD\n\nTrim size: 3.5 x 2 inches (1050 x 600 px at 300 DPI)\nBleed size: 3.75 x 2.25 inches (1125 x 675 px at 300 DPI)\nBleed: 0.125 inch on every edge\nColor direction: coffee brown with warm cream and caramel details\nQR destination: https://orit-backend.vercel.app/wolf-den-welcome\nThe QR route redirects visitors to /welcome.\n`,
);

console.log("Generated front and back business-card SVG masters.");
