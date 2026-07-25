import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const masterDir = path.join(scriptDir, "masters");
const printDir = path.join(scriptDir, "print");
const previewDir = path.join(scriptDir, "previews");
const assetDir = path.join(scriptDir, "assets");

for (const directory of [masterDir, printDir, previewDir, assetDir]) {
  fs.mkdirSync(directory, { recursive: true });
}

const events = [
  {
    order: "01",
    slug: "happy-hour-tuesdays",
    name: "Happy Hour + Tuesdays",
    day: "TUESDAY",
    cadence: "DAILY AT THE DEN",
    description:
      "All beers 50% off. Happy hour from Monday to Friday 4pm to 7pm. Not enough?? The first 10 people who come in on Tuesdays during happy hour will get their third beer for free!!!",
    image: "event-happy-wednesdays.png",
  },
  {
    order: "02",
    slug: "mani-wednesdays",
    name: "Mani Wednesdays",
    day: "WEDNESDAY",
    description:
      "Get your nails touched up. Enjoy 50% off your first drink with a purchase of a touch up manicure!",
    image: "event-mani-wednesdays.png",
  },
  {
    order: "03",
    slug: "ladies-thursdays",
    name: "Ladies Thursdays",
    day: "THURSDAY",
    description:
      "All drinks 50% off for all ladies! Thursday nights 8:30pm to 10:30pm.",
    image: "event-ladies-night.png",
  },
  {
    order: "04",
    slug: "jazzie-fridays",
    name: "Jazzie Fridays",
    day: "FRIDAY",
    description: "Live band Friday nights from 6pm to 10pm.",
    image: "event-music-night.png",
  },
  {
    order: "05",
    slug: "college-nights",
    name: "College Nights",
    day: "SATURDAY",
    description:
      "50% off all beers, for all our college students, every Saturday night! Must show your student ID.",
    image: "event-college-nights.png",
  },
];

fs.copyFileSync(
  path.join(projectDir, "wolf-den-events-qr.svg"),
  path.join(assetDir, "wolf-den-events-qr.svg"),
);

for (const event of events) {
  fs.copyFileSync(
    path.join(projectDir, "public", event.image),
    path.join(assetDir, event.image),
  );
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapText(text, maxCharacters) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxCharacters || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function flyerSvg(event) {
  const descriptionSize =
    event.description.length > 155 ? 43 : event.description.length > 115 ? 46 : 49;
  const maxCharacters =
    event.description.length > 155 ? 62 : event.description.length > 115 ? 58 : 54;
  const descriptionLines = wrapText(event.description, maxCharacters);
  const descriptionTspans = descriptionLines
    .map(
      (line, index) =>
        `<tspan x="90" dy="${index === 0 ? 0 : Math.round(descriptionSize * 1.34)}">${escapeXml(line)}</tspan>`,
    )
    .join("");
  const dayBadgeWidth = event.day === "WEDNESDAY" ? 340 : 278;
  const dayBadgeX = 1413 - dayBadgeWidth;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="1500" height="2400" viewBox="0 0 1500 2400" role="img"
  aria-labelledby="title description">
  <title id="title">${escapeXml(event.name)} — Wolf Den Lounge</title>
  <desc id="description">${escapeXml(event.description)}</desc>

  <defs>
    <clipPath id="photoClip">
      <rect x="0" y="180" width="1500" height="1000"/>
    </clipPath>
    <linearGradient id="headerGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#050806"/>
      <stop offset="0.72" stop-color="#0b140e"/>
      <stop offset="1" stop-color="#102d1b"/>
    </linearGradient>
    <linearGradient id="panelGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14251a"/>
      <stop offset="0.35" stop-color="#070a08"/>
      <stop offset="1" stop-color="#020302"/>
    </linearGradient>
    <pattern id="grain" width="64" height="64" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="12" r="1.5" fill="#ffffff" opacity="0.035"/>
      <circle cx="42" cy="21" r="1" fill="#ffffff" opacity="0.025"/>
      <circle cx="19" cy="53" r="1.2" fill="#ffffff" opacity="0.02"/>
      <circle cx="58" cy="47" r="1.4" fill="#ffffff" opacity="0.028"/>
    </pattern>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="1500" height="2400" fill="#020302"/>
  <rect width="1500" height="180" fill="url(#headerGlow)"/>
  <g transform="translate(90 42)">
    <text x="0" y="65" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif"
      font-size="58" font-weight="900" letter-spacing="7">WOLF DEN LOUNGE</text>
  </g>
  <g transform="translate(${dayBadgeX} 42)">
    <rect width="${dayBadgeWidth}" height="96" rx="48" fill="#16a34a"/>
    <text x="${dayBadgeWidth / 2}" y="62" text-anchor="middle" fill="#ffffff"
      font-family="'Arial Narrow', 'Segoe UI', Arial, sans-serif"
      font-size="38" font-weight="900" letter-spacing="4">${event.day}</text>
  </g>
  <rect x="0" y="174" width="1500" height="6" fill="#22c55e"/>
  <g clip-path="url(#photoClip)">
    <image href="../assets/${event.image}" x="0" y="180" width="1500" height="1000"
      preserveAspectRatio="xMidYMid meet"/>
  </g>

  <rect x="0" y="1180" width="1500" height="1220" fill="url(#panelGlow)"/>
  <rect x="0" y="1180" width="1500" height="1220" fill="url(#grain)"/>
  <rect x="0" y="1180" width="1500" height="8" fill="#d6ad60"/>

  <text x="90" y="1290" fill="#22c55e" font-family="'Segoe UI', Arial, sans-serif"
    font-size="30" font-weight="800" letter-spacing="10">${event.cadence ?? "WEEKLY AT THE DEN"}</text>
  <text x="90" y="1435" fill="#ffffff" font-family="'Arial Narrow', 'Segoe UI', Arial, sans-serif"
    font-size="92" font-weight="900" letter-spacing="-2">${escapeXml(event.name)}</text>
  <rect x="90" y="1482" width="1180" height="8" rx="4" fill="#16a34a"/>
  <rect x="1270" y="1482" width="140" height="8" rx="4" fill="#d6ad60"/>

  <text x="90" y="1578" fill="#e4e4e7" font-family="'Segoe UI', Arial, sans-serif"
    font-size="${descriptionSize}" font-weight="500">${descriptionTspans}</text>
  ${event.status ? `<g transform="translate(90 1715)">
    <rect width="310" height="72" rx="36" fill="#16a34a"/>
    <text x="155" y="48" text-anchor="middle" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif"
      font-size="29" font-weight="900" letter-spacing="4">${event.status}</text>
  </g>` : ""}

  <g transform="translate(988 1848)">
    <text x="216" y="0" text-anchor="middle" fill="#22c55e"
      font-family="'Segoe UI', Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="3">Events</text>
    <rect x="0" y="34" width="424" height="424" rx="24" fill="#ffffff" filter="url(#shadow)"/>
    <image href="../assets/wolf-den-events-qr.svg" x="16" y="50" width="392" height="392" image-rendering="pixelated"/>
  </g>

  <g transform="translate(90 1955)">
    <text x="0" y="0" fill="#ffffff" font-family="'Arial Narrow', 'Segoe UI', Arial, sans-serif"
      font-size="56" font-weight="900">See what’s happening</text>
    <text x="0" y="65" fill="#a1a1aa" font-family="'Segoe UI', Arial, sans-serif"
      font-size="34" font-weight="600">Scan the code for the full events page.</text>
  </g>

  <g transform="translate(90 2155)">
    <circle cx="18" cy="18" r="18" fill="#16a34a"/>
    <path d="M18 8 C12.5 8 8 12.5 8 18 C8 25.5 18 33 18 33 C18 33 28 25.5 28 18 C28 12.5 23.5 8 18 8 Z"
      fill="#ffffff"/>
    <circle cx="18" cy="18" r="4" fill="#16a34a"/>
    <text x="55" y="30" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif"
      font-size="32" font-weight="700" letter-spacing="2">BOLE MATEMIYA • ADDIS ABABA</text>
    <text x="55" y="92" fill="#a1a1aa" font-family="'Segoe UI', Arial, sans-serif"
      font-size="31" font-weight="600">+251 979 398 094</text>
  </g>

  <rect x="22" y="22" width="1456" height="2356" rx="16" fill="none" stroke="#22c55e" stroke-width="3" opacity="0.72"/>
  <rect x="38" y="38" width="1424" height="2324" rx="11" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.15"/>
</svg>`;
}

function printWrapper(svgFilename) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: 5in 8in; margin: 0; }
    html, body { width: 5in; height: 8in; margin: 0; padding: 0; background: #020302; overflow: hidden; }
    img { display: block; width: 5in; height: 8in; }
  </style>
</head>
<body><img src="../masters/${svgFilename}" alt=""></body>
</html>`;
}

for (const event of events) {
  const basename = `${event.order}-${event.slug}`;
  const svgFilename = `${basename}.svg`;
  fs.writeFileSync(path.join(masterDir, svgFilename), flyerSvg(event));
  fs.writeFileSync(
    path.join(printDir, `${basename}.html`),
    printWrapper(svgFilename),
  );
}

const combinedPages = events
  .map(
    (event) =>
      `<section><img src="../masters/${event.order}-${event.slug}.svg" alt="${escapeXml(event.name)}"></section>`,
  )
  .join("\n");

fs.writeFileSync(
  path.join(printDir, "wolf-den-five-flyers.html"),
  `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: 5in 8in; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #020302; }
    section { width: 5in; height: 8in; margin: 0; padding: 0; break-after: page; page-break-after: always; overflow: hidden; }
    section:last-child { break-after: auto; page-break-after: auto; }
    img { display: block; width: 5in; height: 8in; }
  </style>
</head>
<body>${combinedPages}</body>
</html>`,
);

console.log(`Generated ${events.length} SVG masters and print wrappers.`);
