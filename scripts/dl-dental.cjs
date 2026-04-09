const https = require('https');
const fs = require('fs');
const path = require('path');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = path.join(__dirname, '..', 'public', 'images', 'dental');
fs.mkdirSync(OUT, { recursive: true });

const queries = [
  { q: 'dentist smile patient', file: 'services-hero.jpg' },
  { q: 'dental cleaning teeth', file: 'service-cleaning.jpg' },
  { q: 'dental implant', file: 'service-implant.jpg' },
  { q: 'teeth whitening', file: 'service-whitening.jpg' },
  { q: 'invisalign braces', file: 'service-ortho.jpg' },
  { q: 'pediatric dentist child', file: 'service-kids.jpg' },
  { q: 'dental emergency', file: 'service-emergency.jpg' },
  { q: 'dentist portrait woman professional', file: 'team-1.jpg' },
  { q: 'dentist portrait man professional', file: 'team-2.jpg' },
  { q: 'hygienist dental assistant', file: 'team-3.jpg' },
  { q: 'dental receptionist smile', file: 'team-4.jpg' },
  { q: 'modern dental clinic interior', file: 'gallery-1.jpg' },
  { q: 'dental chair modern', file: 'gallery-2.jpg' },
  { q: 'dental waiting room', file: 'gallery-3.jpg' },
  { q: 'dental equipment xray', file: 'gallery-4.jpg' },
  { q: 'clean white tooth close up', file: 'gallery-5.jpg' },
  { q: 'happy dental patient woman', file: 'gallery-6.jpg' },
  { q: 'dental consultation', file: 'pricing-hero.jpg' },
  { q: 'smiling woman portrait natural', file: 'review-1.jpg' },
  { q: 'smiling man portrait natural', file: 'review-2.jpg' },
  { q: 'smiling older woman portrait', file: 'review-3.jpg' },
  { q: 'faq dental question', file: 'faq-hero.jpg' },
  { q: 'dental clinic reception desk', file: 'impressum-hero.jpg' },
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
    }).on('error', (e) => {
      fs.unlink(dest, () => reject(e));
    });
  });
}

(async () => {
  const used = new Set();
  for (const { q, file } of queries) {
    try {
      const data = await fetchJson(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=15&orientation=landscape`);
      const photo = data.photos.find((p) => !used.has(p.id));
      if (!photo) { console.log('skip', file); continue; }
      used.add(photo.id);
      const dest = path.join(OUT, file);
      await download(photo.src.large2x, dest);
      console.log('✓', file, '—', photo.photographer);
    } catch (e) {
      console.log('✗', file, e.message);
    }
  }
})();
