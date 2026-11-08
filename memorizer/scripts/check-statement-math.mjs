import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';

const app=fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fn=app.slice(app.indexOf('  function materialText('),app.indexOf('  const typeLabel'));
const render=vm.runInNewContext(`${fn};materialText`,{esc});
const katex=createRequire(import.meta.url)('../dist/katex.min.js');
const mixed=render(String.raw`אם \(x \in V\), אז $x^2$.
$$\frac{a}{b}$$ וגם \[\sum_{i=1}^{n} i\]`);
assert.equal((mixed.match(/class="math /g)||[]).length,4);
assert.equal((mixed.match(/data-display="inline"/g)||[]).length,2);
assert.equal((mixed.match(/data-display="block"/g)||[]).length,2);
assert(mixed.includes('אם '));
assert(mixed.includes('\n'));
assert.equal(render('טקסט רגיל'), 'טקסט רגיל');
assert.equal(render('מחיר $100'), 'מחיר $100');
assert.equal(render(String.raw`\$5 וגם \$10`),String.raw`\$5 וגם \$10`);
assert.equal(render(String.raw`\(ללא סגירה`),String.raw`\(ללא סגירה`);
assert(!render('<img src=x onerror=alert(1)> $x<y$').includes('<img'));
assert(render('$x<y$').includes('x&lt;y'));
for(const formula of [String.raw`x \in V`,'x^2',String.raw`\frac{a}{b}`,String.raw`\sum_{i=1}^{n} i`]){
  assert(katex.renderToString(formula,{throwOnError:true,trust:false}).includes('katex'));
}
assert(app.includes('displayMode:el.dataset.display!==\'inline\''));
assert.equal((app.match(/class="statement-text" dir="auto">\$\{materialText\(i.statement\)\}/g)||[]).length,2);
console.log('Verified mixed Hebrew/LaTeX statements, inline/display delimiters, plain-text compatibility, and HTML escaping.');
