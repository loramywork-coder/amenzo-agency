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

const root = 'src/app/demos/hale';
let changed = 0;
for (const f of walk(root)) {
  let t = fs.readFileSync(f, 'utf8');
  const orig = t;
  t = t.replace(/style=\{\{([^{}]*fontFamily:\s*fHead[^{}]*)\}\}/g, (m, inner) => {
    if (/\bcolor\s*:/.test(inner)) return m;
    return `style={{${inner.replace(/\s*,?\s*$/, '')}, color: C.dark }}`;
  });
  if (t !== orig) { fs.writeFileSync(f, t); changed++; console.log('  ✓', f); }
}
console.log(`changed ${changed}`);
