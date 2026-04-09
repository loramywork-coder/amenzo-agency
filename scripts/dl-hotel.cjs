const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'ARizECVfUDXSjyZwyq0qO9OuFzBOlBf6P9T7UWgYW78DEn7MttFDA3Xg';
const OUT = 'public/images/hotel-new';
fs.mkdirSync(OUT, { recursive: true });

const photos = [
  // Hero & home
  ['luxury hotel facade mediterranean architecture exterior', 'hero.jpg', 'landscape'],
  ['luxury hotel lobby elegant marble chandelier', 'lobby.jpg', 'landscape'],
  ['grand harbour valletta malta view water', 'harbour-view.jpg', 'landscape'],
  ['hotel concierge professional staff portrait', 'concierge.jpg', 'portrait'],
  // Rooms
  ['luxury hotel suite bedroom elegant king bed', 'room-suite-1.jpg', 'landscape'],
  ['hotel suite bathroom marble freestanding tub', 'room-suite-2.jpg', 'landscape'],
  ['luxury hotel suite living area couch view', 'room-suite-3.jpg', 'landscape'],
  ['hotel deluxe room bed elegant lighting', 'room-deluxe-1.jpg', 'landscape'],
  ['luxury hotel room view window city', 'room-deluxe-2.jpg', 'landscape'],
  ['hotel room details cushions pillow bedding', 'room-deluxe-3.jpg', 'landscape'],
  ['penthouse terrace hotel ocean view luxury', 'room-penthouse-1.jpg', 'landscape'],
  ['penthouse hotel interior modern luxury seaside', 'room-penthouse-2.jpg', 'landscape'],
  ['hotel penthouse living room panorama', 'room-penthouse-3.jpg', 'landscape'],
  ['classic hotel room elegant traditional bed', 'room-classic-1.jpg', 'landscape'],
  ['hotel classic room desk chair antique', 'room-classic-2.jpg', 'landscape'],
  // Dining
  ['luxury hotel restaurant interior fine dining', 'dining-restaurant.jpg', 'landscape'],
  ['hotel rooftop bar sunset cocktails', 'dining-rooftop.jpg', 'landscape'],
  ['gourmet breakfast hotel buffet pastry', 'dining-breakfast.jpg', 'landscape'],
  ['fine dining plate mediterranean cuisine', 'dining-dish.jpg', 'square'],
  ['hotel wine cellar bottles selection', 'dining-wine.jpg', 'landscape'],
  // Spa & wellness
  ['luxury hotel spa interior massage room', 'spa-hero.jpg', 'landscape'],
  ['hotel infinity pool rooftop luxury view', 'spa-pool.jpg', 'landscape'],
  ['spa treatment room candles towels stones', 'spa-treatment.jpg', 'landscape'],
  ['hotel hammam steam room marble', 'spa-steam.jpg', 'landscape'],
  ['gym fitness hotel modern equipment', 'spa-gym.jpg', 'landscape'],
  // Experiences
  ['boat yacht mediterranean sea luxury', 'exp-yacht.jpg', 'landscape'],
  ['valletta malta old town historic street', 'exp-city.jpg', 'landscape'],
  ['vineyard wine tasting mediterranean sunset', 'exp-vineyard.jpg', 'landscape'],
  ['diving snorkeling blue water mediterranean', 'exp-diving.jpg', 'landscape'],
  ['chef cooking class kitchen mediterranean', 'exp-cooking.jpg', 'landscape'],
  // Events
  ['luxury hotel ballroom wedding elegant', 'events-ballroom.jpg', 'landscape'],
  ['hotel conference room corporate meeting', 'events-conference.jpg', 'landscape'],
  ['wedding table setting luxury hotel terrace', 'events-wedding.jpg', 'landscape'],
  // Gallery
  ['hotel courtyard fountain mediterranean', 'gal-courtyard.jpg', 'landscape'],
  ['hotel bedroom details night lamp', 'gal-bedroom.jpg', 'portrait'],
  ['hotel pool sunrise luxury reflection', 'gal-pool.jpg', 'landscape'],
  ['hotel restaurant terrace mediterranean', 'gal-terrace.jpg', 'landscape'],
  ['hotel bar interior elegant brass', 'gal-bar.jpg', 'landscape'],
  ['hotel staircase grand classic architecture', 'gal-staircase.jpg', 'portrait'],
  ['hotel garden mediterranean flowers path', 'gal-garden.jpg', 'landscape'],
  ['hotel library lounge books fireplace', 'gal-library.jpg', 'landscape'],
  // Contact
  ['hotel reception desk luxury elegant', 'contact-reception.jpg', 'landscape'],
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
