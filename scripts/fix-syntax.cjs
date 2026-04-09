const fs = require('fs');
const path = require('path');

function walk(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const s = fs.statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(f)) out.push(full);
  }
  return out;
}

const files = walk('src/app/demos/hotel');
let changed = 0;
for (const f of files) {
  let t = fs.readFileSync(f, 'utf8');
  const orig = t;
  // Fix: "                ,\n paddingBottom: ..." — leading comma on its own block
  t = t.replace(/,\s*\n(\s*), paddingBottom: "0\.15em" \}\}/g, ',\n$1paddingBottom: "0.15em",\n$1}}');
  if (t !== orig) {
    fs.writeFileSync(f, t);
    changed++;
    console.log('  ✓', f);
  }
}
console.log(`changed ${changed}`);
