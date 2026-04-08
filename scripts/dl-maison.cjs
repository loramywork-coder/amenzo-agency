const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/maison';
fs.mkdirSync(OUT, { recursive: true });

const photos = [
  ['fashion editorial model black outfit studio dramatic lighting', 'hero.jpg', 'landscape'],
  ['fashion model walking minimal white background editorial', 'hero-alt.jpg', 'portrait'],
  ['fashion woman minimal outfit neutral tones editorial', 'cat-women.jpg', 'portrait'],
  ['fashion man minimal neutral outfit editorial', 'cat-men.jpg', 'portrait'],
  ['luxury leather handbag minimal background product', 'cat-accessories.jpg', 'square'],
  // Products — Women
  ['woman wearing oversized blazer neutral color fashion', 'p-blazer-1.jpg', 'portrait'],
  ['oversized black blazer product shot minimal', 'p-blazer-2.jpg', 'portrait'],
  ['silk camisole top cream color fashion flat lay', 'p-camisole-1.jpg', 'portrait'],
  ['silk top neutral color product shot', 'p-camisole-2.jpg', 'portrait'],
  ['woman wearing wide leg trousers neutral minimal', 'p-trousers-1.jpg', 'portrait'],
  ['wide leg trousers product shot fashion', 'p-trousers-2.jpg', 'portrait'],
  ['elegant minimal column dress woman fashion', 'p-dress-1.jpg', 'portrait'],
  ['black minimal dress product shot', 'p-dress-2.jpg', 'portrait'],
  ['linen shirt dress woman summer fashion', 'p-shirtdress-1.jpg', 'portrait'],
  ['shirt dress product shot minimal', 'p-shirtdress-2.jpg', 'portrait'],
  // Products — Men
  ['man wearing merino knit sweater minimal neutral', 'p-knit-1.jpg', 'portrait'],
  ['merino sweater product shot neutral', 'p-knit-2.jpg', 'portrait'],
  ['relaxed chino pants man fashion editorial', 'p-chinos-1.jpg', 'portrait'],
  ['tailored pants product shot minimal', 'p-chinos-2.jpg', 'portrait'],
  ['man cotton overshirt jacket fashion editorial', 'p-overshirt-1.jpg', 'portrait'],
  ['overshirt jacket product shot neutral', 'p-overshirt-2.jpg', 'portrait'],
  // Accessories
  ['designer tote bag leather minimal product', 'p-tote-1.jpg', 'square'],
  ['leather tote bag close up detail', 'p-tote-2.jpg', 'square'],
  ['cashmere scarf folded neutral beige product', 'p-scarf-1.jpg', 'square'],
  ['wool scarf product shot fashion', 'p-scarf-2.jpg', 'square'],
  ['minimal leather card holder wallet product', 'p-cardholder-1.jpg', 'square'],
  ['leather wallet close up product', 'p-cardholder-2.jpg', 'square'],
  ['structured leather shoulder bag product neutral', 'p-shoulder-1.jpg', 'square'],
  ['small leather bag product shot minimal', 'p-shoulder-2.jpg', 'square'],
  // Lookbook
  ['fashion editorial couple walking city street', 'lookbook-1.jpg', 'landscape'],
  ['fashion model sitting stairs minimal outfit', 'lookbook-2.jpg', 'portrait'],
  ['fashion editorial model natural light window', 'lookbook-3.jpg', 'portrait'],
  ['fashion model portrait outdoor sunlight minimal', 'lookbook-4.jpg', 'landscape'],
  ['fashion editorial model coat walking street urban', 'lookbook-5.jpg', 'landscape'],
  ['fashion editorial pair models minimal', 'lookbook-6.jpg', 'portrait'],
  // About & brand
  ['fashion atelier sewing machine hands close up', 'about-atelier.jpg', 'landscape'],
  ['fashion designer working pattern cutting table', 'about-designer.jpg', 'landscape'],
  ['woman fashion designer portrait confident', 'founder.jpg', 'portrait'],
  ['minimal fashion store interior clothing rack white', 'store-interior.jpg', 'landscape'],
  ['clothing rack neutral tones fashion store', 'store-rack.jpg', 'landscape'],
  // Sustainability
  ['organic cotton fabric rolls textile close up', 'sustain-fabric.jpg', 'landscape'],
  ['sustainable packaging cardboard tissue paper', 'sustain-packaging.jpg', 'landscape'],
  ['cotton plant field nature organic', 'sustain-cotton.jpg', 'landscape'],
  ['natural dyeing fabric process traditional', 'sustain-dye.jpg', 'landscape'],
  ['sustainable fashion production workshop', 'sustain-production.jpg', 'landscape'],
  // Journal
  ['fashion photoshoot behind the scenes studio lights', 'journal-bts.jpg', 'landscape'],
  ['fabric swatches color palette fashion mood board', 'journal-swatches.jpg', 'landscape'],
  ['fashion sketch drawing designer table', 'journal-sketch.jpg', 'landscape'],
  ['vintage sewing machine fashion workshop', 'journal-vintage.jpg', 'landscape'],
  ['fashion magazine pages editorial close up', 'journal-magazine.jpg', 'landscape'],
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
