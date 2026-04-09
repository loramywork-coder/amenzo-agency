const https = require('https');
const fs = require('fs');
const path = require('path');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = path.join(__dirname, '..', 'public', 'images', 'fitness');

// Files where people are visible — re-download with "caucasian" queries
const queries = [
  { q: 'caucasian man gym workout', file: 'classes-hero.jpg' },
  { q: 'caucasian personal trainer gym', file: 'trainers-hero.jpg' },
  { q: 'caucasian woman gym membership', file: 'pricing-hero.jpg' },
  { q: 'caucasian man lifting weights', file: 'schedule-hero.jpg' },
  { q: 'caucasian gym interior woman', file: 'gallery-hero.jpg' },
  { q: 'caucasian woman fitness gym', file: 'contact-hero.jpg' },
  { q: 'caucasian man running fitness', file: 'blog-hero.jpg' },
  { q: 'caucasian woman gym training', file: 'membership-hero.jpg' },

  { q: 'caucasian hiit workout man', file: 'class-hiit.jpg' },
  { q: 'caucasian woman yoga class', file: 'class-yoga.jpg' },
  { q: 'caucasian crossfit workout', file: 'class-crossfit.jpg' },
  { q: 'caucasian spin cycling class', file: 'class-spin.jpg' },
  { q: 'caucasian woman pilates', file: 'class-pilates.jpg' },
  { q: 'caucasian man boxing training', file: 'class-boxing.jpg' },

  { q: 'caucasian male fitness trainer portrait', file: 'trainer-1.jpg' },
  { q: 'caucasian female fitness trainer portrait', file: 'trainer-2.jpg' },
  { q: 'caucasian woman yoga instructor', file: 'trainer-3.jpg' },
  { q: 'caucasian athletic man fitness coach', file: 'trainer-4.jpg' },

  { q: 'caucasian woman lifting barbell', file: 'gal-4.jpg' },
  { q: 'caucasian man pullup', file: 'gal-5.jpg' },
  { q: 'caucasian gym mirror workout', file: 'gal-6.jpg' },
  { q: 'caucasian kettlebell workout', file: 'gal-8.jpg' },

  { q: 'caucasian healthy meal fitness', file: 'blog-1.jpg' },
  { q: 'caucasian running outdoor', file: 'blog-2.jpg' },
  { q: 'caucasian fitness motivation', file: 'blog-3.jpg' },
  { q: 'caucasian protein shake', file: 'blog-4.jpg' },
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Authorization: API } }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve, reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (e) => { fs.unlink(dest, () => reject(e)); });
  });
}

(async () => {
  const used = new Set();
  for (const { q, file } of queries) {
    try {
      const data = await fetchJson(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=20&orientation=landscape`);
      const photo = data.photos.find((p) => !used.has(p.id));
      if (!photo) { console.log('skip', file); continue; }
      used.add(photo.id);
      await download(photo.src.large2x, path.join(OUT, file));
      console.log('✓', file);
    } catch (e) { console.log('✗', file, e.message); }
  }
})();
