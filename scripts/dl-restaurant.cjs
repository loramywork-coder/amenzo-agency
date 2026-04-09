const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const IMG_OUT = 'public/images/restaurant-new';
const VID_OUT = 'public/videos';
fs.mkdirSync(IMG_OUT, { recursive: true });
fs.mkdirSync(VID_OUT, { recursive: true });

const photos = [
  ['fine dining restaurant interior dark moody elegant', 'hero-poster.jpg', 'landscape'],
  ['chef cooking pan flames mediterranean kitchen', 'story-chef.jpg', 'landscape'],
  ['restaurant open kitchen pass chef plating', 'kitchen-pass.jpg', 'landscape'],
  ['handmade fresh pasta flour rolling pin', 'pasta-making.jpg', 'landscape'],
  ['grilled octopus mediterranean dish dark', 'dish-octopus.jpg', 'square'],
  ['sea bass branzino plated dish herbs', 'dish-sea-bass.jpg', 'square'],
  ['ravioli hand made dish parmesan', 'dish-ravioli.jpg', 'square'],
  ['panna cotta berries dessert plate', 'dish-dessert.jpg', 'square'],
  ['beef carpaccio plate elegant appetizer', 'dish-carpaccio.jpg', 'square'],
  ['wine cellar rack bottles dark ambient', 'wine-cellar.jpg', 'landscape'],
  ['sommelier pouring wine glass restaurant', 'wine-pour.jpg', 'landscape'],
  ['restaurant table candlelight close up glass', 'table-candle.jpg', 'landscape'],
  ['michelin star chef portrait professional', 'chef-portrait.jpg', 'portrait'],
  ['sous chef kitchen portrait woman', 'sous-chef.jpg', 'portrait'],
  ['sommelier portrait wine glass restaurant', 'sommelier.jpg', 'portrait'],
  ['restaurant private dining room long table', 'events-private.jpg', 'landscape'],
  ['restaurant terrace outdoor dining evening', 'events-terrace.jpg', 'landscape'],
  ['wedding restaurant dinner setup elegant', 'events-wedding.jpg', 'landscape'],
  ['bread sourdough restaurant close up', 'gal-bread.jpg', 'square'],
  ['olive oil pouring bread close up', 'gal-oil.jpg', 'square'],
  ['tomatoes basil burrata caprese close up', 'gal-caprese.jpg', 'square'],
  ['restaurant bar counter stools ambient', 'gal-bar.jpg', 'landscape'],
  ['restaurant detail cutlery linen elegant', 'gal-cutlery.jpg', 'square'],
  ['tiramisu coffee dessert close up', 'gal-tiramisu.jpg', 'square'],
  ['chef blow torch creme brulee', 'gal-torch.jpg', 'square'],
  ['restaurant flame pan fire kitchen', 'gal-flame.jpg', 'landscape'],
  ['sommelier book wine list table', 'menu-book.jpg', 'landscape'],
];

const videos = [
  ['restaurant fine dining slow motion chef', 'restaurant-hero.mp4'],
];

function fetchJson(url, base = 'https://api.pexels.com/v1') { return new Promise((resolve, reject) => { https.get(`${base}${url}`, { headers: { Authorization: API } }, (res) => { let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } }); }).on('error', reject); }); }
function download(url, filepath) { return new Promise((resolve, reject) => { const file = fs.createWriteStream(filepath); https.get(url, (res) => { if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return download(res.headers.location, filepath).then(resolve, reject); res.pipe(file); file.on('finish', () => file.close(resolve)); }).on('error', reject); }); }

const usedIds = new Set();
(async () => {
  for (const [q, filename, orientation] of photos) {
    try {
      const data = await fetchJson(`/search?query=${encodeURIComponent(q)}&per_page=12&orientation=${orientation}&size=large`);
      let chosen;
      for (const p of (data.photos || [])) { if (!usedIds.has(p.id)) { chosen = p; break; } }
      if (!chosen) { console.log(`  ✗ ${filename}`); continue; }
      usedIds.add(chosen.id);
      await download(chosen.src.large2x || chosen.src.original, path.join(IMG_OUT, filename));
      console.log(`  ✓ ${filename}`);
      await new Promise((r) => setTimeout(r, 180));
    } catch (e) { console.log(`  ✗ ${filename}: ${e.message}`); }
  }

  // Videos (use videos api endpoint)
  for (const [q, filename] of videos) {
    try {
      const data = await new Promise((resolve, reject) => {
        https.get(`https://api.pexels.com/videos/search?query=${encodeURIComponent(q)}&per_page=10&size=medium&orientation=landscape`, { headers: { Authorization: API } }, (res) => {
          let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
        }).on('error', reject);
      });
      const vids = data.videos || [];
      let chosen;
      for (const v of vids) {
        if (usedIds.has(v.id)) continue;
        // find an HD file under 20MB
        const files = (v.video_files || []).filter(f => f.quality === 'hd' && f.width >= 1280 && f.width <= 1920);
        if (files.length) { chosen = { video: v, file: files[0] }; break; }
      }
      if (!chosen) { console.log(`  ✗ video ${filename}`); continue; }
      usedIds.add(chosen.video.id);
      await download(chosen.file.link, path.join(VID_OUT, filename));
      console.log(`  ✓ video ${filename}`);
    } catch (e) { console.log(`  ✗ video ${filename}: ${e.message}`); }
  }
  console.log('done');
})();
