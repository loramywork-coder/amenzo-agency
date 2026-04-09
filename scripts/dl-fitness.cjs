const https = require('https');
const fs = require('fs');
const path = require('path');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = path.join(__dirname, '..', 'public', 'images', 'fitness');
fs.mkdirSync(OUT, { recursive: true });

const queries = [
  // Hero banners
  { q: 'gym workout dark moody', file: 'classes-hero.jpg' },
  { q: 'personal trainer gym', file: 'trainers-hero.jpg' },
  { q: 'gym membership fitness', file: 'pricing-hero.jpg' },
  { q: 'gym schedule calendar', file: 'schedule-hero.jpg' },
  { q: 'gym interior equipment dark', file: 'gallery-hero.jpg' },
  { q: 'fitness contact gym reception', file: 'contact-hero.jpg' },
  { q: 'fitness blog writing', file: 'blog-hero.jpg' },
  { q: 'gym membership card', file: 'membership-hero.jpg' },
  // Classes
  { q: 'hiit training', file: 'class-hiit.jpg' },
  { q: 'yoga class studio', file: 'class-yoga.jpg' },
  { q: 'crossfit workout', file: 'class-crossfit.jpg' },
  { q: 'spin cycling class', file: 'class-spin.jpg' },
  { q: 'pilates class', file: 'class-pilates.jpg' },
  { q: 'boxing gym training', file: 'class-boxing.jpg' },
  // Trainers
  { q: 'male personal trainer portrait', file: 'trainer-1.jpg' },
  { q: 'female personal trainer portrait', file: 'trainer-2.jpg' },
  { q: 'yoga instructor woman', file: 'trainer-3.jpg' },
  { q: 'fitness coach athletic', file: 'trainer-4.jpg' },
  // Gallery
  { q: 'weightlifting barbell gym', file: 'gal-1.jpg' },
  { q: 'treadmill cardio', file: 'gal-2.jpg' },
  { q: 'dumbbells rack gym', file: 'gal-3.jpg' },
  { q: 'woman lifting weights', file: 'gal-4.jpg' },
  { q: 'man pullup bar', file: 'gal-5.jpg' },
  { q: 'gym mirror workout', file: 'gal-6.jpg' },
  { q: 'gym locker room', file: 'gal-7.jpg' },
  { q: 'kettlebell workout', file: 'gal-8.jpg' },
  // Blog
  { q: 'healthy meal prep', file: 'blog-1.jpg' },
  { q: 'running outdoor fitness', file: 'blog-2.jpg' },
  { q: 'fitness motivation', file: 'blog-3.jpg' },
  { q: 'protein shake nutrition', file: 'blog-4.jpg' },
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
