const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/casa';
fs.mkdirSync(OUT, { recursive: true });

const photos = [
  ['elegant restaurant interior warm lighting table setting dinner', 'hero.jpg', 'landscape'],
  ['chef plating dish kitchen professional restaurant', 'story-chef.jpg', 'landscape'],
  ['italian couple restaurant owners portrait', 'founders.jpg', 'landscape'],
  ['fresh burrata cheese peach appetizer plate restaurant', 'dish-burrata.jpg', 'square'],
  ['sea bass branzino fish plated dish herbs lemon', 'dish-fish.jpg', 'square'],
  ['handmade fresh pasta pappardelle ragu plate', 'dish-pasta.jpg', 'square'],
  ['tiramisu dessert elegant plating cocoa powder glass', 'dish-tiramisu.jpg', 'square'],
  ['red wine glass restaurant table candlelight', 'wine-glass.jpg', 'portrait'],
  ['wine cellar bottles rack wooden rustic', 'wine-cellar.jpg', 'landscape'],
  ['romantic restaurant terrace evening candles outdoor dining', 'reservation.jpg', 'landscape'],
  ['restaurant open kitchen flames chef cooking', 'about-kitchen.jpg', 'landscape'],
  ['restaurant bar counter stools modern elegant', 'about-bar.jpg', 'landscape'],
  ['bread basket olive oil restaurant table appetizer', 'gallery-bread.jpg', 'square'],
  ['fine dining table setting white plates elegant', 'gallery-table.jpg', 'landscape'],
  ['overhead shot food spread mediterranean dishes table', 'gallery-overhead.jpg', 'landscape'],
  ['private dining room restaurant elegant long table', 'events-private.jpg', 'landscape'],
  ['chef hands chopping fresh herbs cutting board', 'blog-cooking.jpg', 'landscape'],
  ['natural wine bottles selection organic', 'blog-wine.jpg', 'landscape'],
  ['restaurant menu leather table elegant', 'menu-hero.jpg', 'landscape'],
  ['sommelier pouring wine glass restaurant service', 'wine-sommelier.jpg', 'landscape'],
  ['pasta making rolling pin flour hands close up', 'insta-1.jpg', 'square'],
  ['espresso cup saucer restaurant after dinner', 'insta-2.jpg', 'square'],
  ['fresh tomatoes basil mozzarella caprese close up', 'insta-3.jpg', 'square'],
  ['restaurant kitchen pass food ready plate', 'insta-4.jpg', 'square'],
  ['chef portrait kitchen professional italian restaurant', 'team-1.jpg', 'portrait'],
  ['sous chef woman kitchen portrait restaurant', 'team-2.jpg', 'portrait'],
  ['sommelier portrait wine restaurant professional', 'team-3.jpg', 'portrait'],
  ['olive oil bottle rustic wooden table', 'gallery-oil.jpg', 'square'],
  ['wine glasses cheers restaurant celebration', 'gallery-cheers.jpg', 'landscape'],
  ['restaurant candlelight close up table', 'gallery-candle.jpg', 'portrait'],
  ['pasta carbonara plate close up', 'gallery-carbonara.jpg', 'square'],
  ['mediterranean seafood plate lemon herbs', 'gallery-seafood.jpg', 'square'],
  ['italian dessert panna cotta berry', 'gallery-dessert.jpg', 'square'],
  ['grilled octopus mediterranean dish plate', 'dish-octopus.jpg', 'square'],
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Authorization: API } }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
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
  for (const [query, filename, orientation] of photos) {
    try {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12&orientation=${orientation}&size=large`;
      const data = await fetchJson(url);
      let chosen;
      for (const p of (data.photos || [])) {
        if (!usedIds.has(p.id)) { chosen = p; break; }
      }
      if (!chosen) { console.log(`  ✗ no photo for "${query}"`); continue; }
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
