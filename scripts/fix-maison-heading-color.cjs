const fs = require('fs');
const path = require('path');

function walk(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(f)) out.push(full);
  }
  return out;
}

const root = 'src/app/demos/maison';
const files = walk(root);
let changed = 0;

for (const f of files) {
  let t = fs.readFileSync(f, 'utf8');
  const original = t;
  // Find every style={{ ... fontFamily: fHead ... }} that doesn't already have a `color:` inside the object.
  t = t.replace(/style=\{\{([^{}]*fontFamily:\s*fHead[^{}]*)\}\}/g, (m, inner) => {
    if (/\bcolor\s*:/.test(inner)) return m;
    return `style={{${inner.replace(/\s*$/, '')}, color: C.dark }}`;
  });
  if (t !== original) {
    fs.writeFileSync(f, t);
    changed++;
    console.log('  ✓', f);
  }
}
console.log(`changed ${changed} files`);
