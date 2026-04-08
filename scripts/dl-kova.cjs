const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/kova';
fs.mkdirSync(OUT, { recursive: true });

const items = [
  ['specialty coffee shop interior wooden counter barista', 'hero.jpg', 'landscape'],
  ['barista pouring latte art white cup close up', 'about-barista.jpg', 'landscape'],
  ['espresso shot glass crema close up dark', 'menu-espresso.jpg', 'square'],
  ['cappuccino latte art top view wooden table', 'menu-cappuccino.jpg', 'square'],
  ['pour over coffee glass dripper hand brewing', 'menu-pourover.jpg', 'portrait'],
  ['iced cold brew coffee glass ice cubes summer', 'menu-coldbrew.jpg', 'portrait'],
  ['roasted coffee beans burlap sack close up', 'beans-hero.jpg', 'landscape'],
  ['single origin coffee bag packaging craft paper', 'beans-bag.jpg', 'square'],
  ['fresh baked banana bread slice cafe plate', 'food-banana-bread.jpg', 'square'],
  ['avocado toast poached egg breakfast plate cafe', 'food-avotoast.jpg', 'square'],
  ['coffee shop menu board chalkboard', 'menu-hero.jpg', 'landscape'],
  ['coffee beans roasting machine copper drum', 'beans-roasting.jpg', 'landscape'],
  ['cozy cafe corner window sunlight morning empty', 'contact-hero.jpg', 'landscape'],
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Authorization: API } }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filepath).then(resolve, reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

const usedIds = new Set();

(async () => {
  for (const [query, filename, orientation] of items) {
    try {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10&orientation=${orientation}&size=large`;
      const data = await fetchJson(url);
      const photos = data.photos || [];
      let chosen;
      for (const p of photos) {
        if (!usedIds.has(p.id)) { chosen = p; break; }
      }
      if (!chosen) {
        console.log(`  ✗ no photo for "${query}"`);
        continue;
      }
      usedIds.add(chosen.id);
      const src = chosen.src.large2x || chosen.src.original;
      await download(src, path.join(OUT, filename));
      console.log(`  ✓ ${filename} — id:${chosen.id}`);
      await new Promise((r) => setTimeout(r, 200));
    } catch (e) {
      console.log(`  ✗ ${filename}: ${e.message}`);
    }
  }
  console.log('done');
})();
