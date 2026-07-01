// Generates social/SEO image assets from the brand logo.
//
//   node scripts/generate-og-assets.mjs
//
// Outputs (committed to public/):
//   - og-image.png        1200x630 social share card (Open Graph / Twitter)
//   - favicon-32.png      32x32 browser tab icon
//   - apple-touch-icon.png 180x180 iOS home-screen icon
//
// Re-run whenever the logo or business name/tagline changes.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('..', import.meta.url);
const pub = (p) => fileURLToPath(new URL(`public/${p}`, root));

const business = JSON.parse(
  readFileSync(fileURLToPath(new URL('src/data/business.json', root)), 'utf8'),
);

const logoPath = pub(business.brand.logoFilename);
const NAVY = '#1e2a8a';
const RED = '#e8312a';
const MUTED = '#475569';

// ---------- og-image.png (1200x630) ----------
const W = 1200;
const H = 630;
const logoW = 400;

const logo = await sharp(logoPath)
  .resize({ width: logoW })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();
const logoH = logoMeta.height;
const logoTop = 96;

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${NAVY}"/>
  <rect x="0" y="${H - 16}" width="${W}" height="16" fill="${RED}"/>
  <text x="${W / 2}" y="372" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="74" font-weight="700" fill="${NAVY}">${esc(business.name)}</text>
  <text x="${W / 2}" y="436" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="${MUTED}">${esc(business.slogan)}</text>
  <text x="${W / 2}" y="516" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="${NAVY}">${esc(`${business.address.city}, ${business.address.state}`)}  ·  Nationwide  ·  ${esc(business.phone)}</text>
</svg>`;

await sharp(Buffer.from(card, 'utf8'))
  .composite([{ input: logo, left: Math.round((W - logoW) / 2), top: logoTop }])
  .png()
  .toFile(pub('og-image.png'));

// ---------- favicons (square, logo on white) ----------
const square = async (size, pad, file) => {
  const inner = size - pad * 2;
  const mark = await sharp(logoPath)
    .resize({ width: inner, fit: 'inside' })
    .toBuffer();
  const m = await sharp(mark).metadata();
  await sharp({
    create: { width: size, height: size, channels: 4, background: '#ffffff' },
  })
    .composite([
      {
        input: mark,
        left: Math.round((size - m.width) / 2),
        top: Math.round((size - m.height) / 2),
      },
    ])
    .png()
    .toFile(pub(file));
};

await square(32, 2, 'favicon-32.png');
await square(180, 18, 'apple-touch-icon.png');

console.log(`og-image.png ${W}x${H} (logo ${logoW}x${logoH}), favicon-32.png, apple-touch-icon.png written to public/`);
