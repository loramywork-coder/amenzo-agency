const https = require('https');
const fs = require('fs');
const path = require('path');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = path.join(__dirname, '..', 'public', 'images', 'dental');
fs.mkdirSync(OUT, { recursive: true });

const queries = [
  { q: 'dental office exterior building', file: 'contact-hero.jpg' },
  { q: 'dental clinic reception lobby', file: 'impressum-banner.jpg' },
  { q: 'services hero banner teeth', file: 'services-hero.jpg' },
  { q: 'dental team group photo', file: 'team-hero.jpg' },
  { q: 'smiling woman healthy teeth', file: 'gallery-7.jpg' },
  { q: 'dental model teeth close up', file: 'gallery-8.jpg' },
  { q: 'dentist working on patient', file: 'gallery-9.jpg' },
  { q: 'dental instrument tray', file: 'gallery-10.jpg' },
  { q: 'dental hygienist cleaning', file: 'service-prevention.jpg' },
  { q: 'porcelain veneer smile', file: 'service-veneer.jpg' },
  { q: 'dental crown ceramic', file: 'service-crown.jpg' },
  { q: 'dentist consultation desk', file: 'home-about.jpg' },
  { q: 'dental anxiety calm patient', file: 'home-comfort.jpg' },
  { q: 'reviews smiling patient happy', file: 'reviews-hero.jpg' },
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
