const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/flux';
fs.mkdirSync(OUT, { recursive: true });

const items = [
  ['man lifting barbell dark gym dramatic lighting', 'hero.jpg', 'landscape'],
  ['personal trainer coaching client dumbbell gym', 'programs-pt.jpg', 'landscape'],
  ['small group fitness class kettlebell workout', 'programs-group.jpg', 'landscape'],
  ['man using laptop fitness app home workout', 'programs-online.jpg', 'landscape'],
  ['dark modern gym interior equipment moody', 'gym-interior.jpg', 'landscape'],
  ['athlete doing box jump crossfit dark gym', 'testimonial-1.jpg', 'portrait'],
  ['woman doing deadlift barbell gym dark', 'testimonial-2.jpg', 'portrait'],
  ['battle ropes exercise dark gym intense', 'testimonial-3.jpg', 'portrait'],
  ['athlete sprinting track dark dramatic', 'programs-hero.jpg', 'landscape'],
  ['personal trainer showing exercise form client', 'program-detail-1.jpg', 'landscape'],
  ['man doing pull ups bar dark gym back muscles', 'program-detail-2.jpg', 'landscape'],
  ['medicine ball slam exercise gym floor dark', 'program-detail-3.jpg', 'landscape'],
  ['woman doing squats gym mirror dark', 'program-detail-4.jpg', 'landscape'],
  ['man running treadmill gym dark moody', 'program-detail-5.jpg', 'landscape'],
  ['male fitness trainer portrait confident professional', 'trainer-portrait.jpg', 'portrait'],
  ['modern gym locker room bench dark interior', 'studio-1.jpg', 'landscape'],
  ['gym dumbbells rack dark close up metal', 'studio-2.jpg', 'landscape'],
  ['squat rack barbell dark gym interior', 'studio-3.jpg', 'landscape'],
  ['gym reception desk front area modern', 'contact-hero.jpg', 'landscape'],
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
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&orientation=${orientation}&size=large`;
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
