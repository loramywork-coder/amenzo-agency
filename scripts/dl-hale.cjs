const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/hale';
fs.mkdirSync(OUT, { recursive: true });

const photos = [
  ['modern concrete building facade minimal architecture', 'hero.jpg', 'landscape'],
  ['luxury modern villa lake exterior architecture', 'p1-1.jpg', 'landscape'],
  ['modern house interior living room large windows', 'p1-2.jpg', 'landscape'],
  ['minimal bedroom white concrete walls natural light', 'p1-3.jpg', 'landscape'],
  ['modern bathroom freestanding tub concrete wall', 'p1-4.jpg', 'landscape'],
  ['modern house kitchen island minimal', 'p1-5.jpg', 'landscape'],
  ['modern villa staircase architecture', 'p1-6.jpg', 'portrait'],
  ['converted warehouse office space brick modern', 'p2-1.jpg', 'landscape'],
  ['open plan office interior industrial concrete', 'p2-2.jpg', 'landscape'],
  ['modern office meeting room glass walls minimal', 'p2-3.jpg', 'landscape'],
  ['minimalist office lobby interior', 'p2-4.jpg', 'landscape'],
  ['modern office kitchen pantry minimal', 'p2-5.jpg', 'portrait'],
  ['office corridor modern minimal light', 'p2-6.jpg', 'landscape'],
  ['white minimal interior showroom gallery', 'p3-1.jpg', 'landscape'],
  ['fashion showroom interior white walls', 'p3-2.jpg', 'landscape'],
  ['minimal white interior corridor natural light', 'p3-3.jpg', 'landscape'],
  ['gallery white walls artwork modern', 'p3-4.jpg', 'landscape'],
  ['minimalist white room window light', 'p3-5.jpg', 'portrait'],
  ['modern garden landscape architecture pathway', 'p4-1.jpg', 'landscape'],
  ['outdoor garden pavilion modern wooden', 'p4-2.jpg', 'landscape'],
  ['contemporary garden water feature', 'p4-3.jpg', 'landscape'],
  ['modern garden minimal stone path', 'p4-4.jpg', 'landscape'],
  ['zen garden minimalist landscape', 'p4-5.jpg', 'landscape'],
  ['architect drawing blueprints desk professional', 'studio-work.jpg', 'landscape'],
  ['architecture office interior clean desk', 'studio-interior.jpg', 'landscape'],
  ['architectural model miniature buildings', 'studio-model.jpg', 'landscape'],
  ['professional man portrait suit architect', 'team-1.jpg', 'portrait'],
  ['professional woman portrait architect confident', 'team-2.jpg', 'portrait'],
  ['young architect woman glasses professional', 'team-3.jpg', 'portrait'],
  ['young professional man creative office', 'team-4.jpg', 'portrait'],
  ['woman architect hard hat construction', 'team-5.jpg', 'portrait'],
  ['man designer creative professional beard', 'team-6.jpg', 'portrait'],
  ['concrete texture wall surface close up', 'detail-concrete.jpg', 'landscape'],
  ['wooden staircase modern interior detail', 'detail-stairs.jpg', 'landscape'],
  ['building under construction scaffolding modern', 'journal-construction.jpg', 'landscape'],
  ['architect drafting table drawing', 'journal-drafting.jpg', 'landscape'],
  ['minimal architecture detail window', 'journal-window.jpg', 'landscape'],
  ['architecture book interior photography', 'journal-book.jpg', 'landscape'],
];

function fetchJson(url) { return new Promise((resolve, reject) => { https.get(url, { headers: { Authorization: API } }, (res) => { let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } }); }).on('error', reject); }); }
function download(url, filepath) { return new Promise((resolve, reject) => { const file = fs.createWriteStream(filepath); https.get(url, (res) => { if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return download(res.headers.location, filepath).then(resolve, reject); res.pipe(file); file.on('finish', () => file.close(resolve)); }).on('error', reject); }); }

const usedIds = new Set();
(async () => {
  for (const [query, filename, orientation] of photos) {
    try {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12&orientation=${orientation}&size=large`;
      const data = await fetchJson(url);
      let chosen;
      for (const p of (data.photos || [])) { if (!usedIds.has(p.id)) { chosen = p; break; } }
      if (!chosen) { console.log(`  ✗ no photo for "${query}"`); continue; }
      usedIds.add(chosen.id);
      await download(chosen.src.large2x || chosen.src.original, path.join(OUT, filename));
      console.log(`  ✓ ${filename}`);
      await new Promise((r) => setTimeout(r, 180));
    } catch (e) { console.log(`  ✗ ${filename}: ${e.message}`); }
  }
  console.log('done');
})();
