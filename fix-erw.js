const fs = require('fs');
const p = 'src/routes/our-work/+page.svelte';
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/<!--\s*ERW has potential[\s\S]*?\t\t\t<\/p>\n\t\t\t<h5>HIGHLIGHTS/, '\t\t\t<h5>HIGHLIGHTS');
fs.writeFileSync(p, s);
console.log('Done');
