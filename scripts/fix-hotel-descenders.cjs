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
  // Add paddingBottom to any style object that has lineHeight 0.92 or 0.9 and no paddingBottom yet
  t = t.replace(/(style=\{\{[^{}]*lineHeight:\s*0\.9[28]?[^{}]*\}\})/g, (match) => {
    if (/paddingBottom/.test(match)) return match;
    return match.replace(/\}\}$/, ", paddingBottom: \"0.15em\" }}");
  });
  if (t !== orig) {
    fs.writeFileSync(f, t);
    changed++;
    console.log('  ✓', f);
  }
}
console.log(`changed ${changed}`);
