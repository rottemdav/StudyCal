import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const app=fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
const seedContext={window:{}};
vm.runInNewContext(fs.readFileSync(new URL('../dist/seed.js',import.meta.url),'utf8'),seedContext);
const validate=vm.runInNewContext(app.slice(app.indexOf('  function validate('),app.indexOf('  let retiredCardsRemoved'))+';validate',{
  window:{removeRetiredGaussianCards:()=>false,addConditionalContent:x=>x,localizeExamples:x=>x}
});
const data=JSON.parse(JSON.stringify(seedContext.window.SEED));
assert.doesNotThrow(()=>validate(data));
const item=data.items[0];
item.statement='';item.propertiesEnabled=true;item.properties=['תכונה ראשונה',String.raw`אם $x>0$, אז \(x^2>0\)`];
assert.deepEqual(JSON.parse(JSON.stringify(validate(data).items[0].properties)),item.properties);
const restored=JSON.parse(JSON.stringify(validate(data)));
assert.deepEqual(JSON.parse(JSON.stringify(validate(restored).items[0].properties)),item.properties);
for(const properties of [[],[''],[null],'wrong',Array(101).fill('x')]){
  assert.throws(()=>validate({...data,items:[{...item,properties}]}));
}
assert.throws(()=>validate({...data,items:[{...item,propertiesEnabled:'yes'}]}));
assert.throws(()=>validate({...data,items:[{...item,propertiesEnabled:false}]}));
item.statement='הקדמה';item.propertiesEnabled=false;
assert.equal(validate(data).items[0].properties.length,2,'Disabling a list preserves its contents');
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const materialText=vm.runInNewContext(app.slice(app.indexOf('  function materialText('),app.indexOf('  const typeLabel'))+';materialText',{esc});
const propertyList=vm.runInNewContext(app.slice(app.indexOf('  function propertyList'),app.indexOf('  function propertyRow'))+';propertyList',{materialText});
assert.equal(propertyList(item),'');
const html=propertyList({...item,propertiesEnabled:true,properties:['<script>alert(1)</script>','$x^2$']});
assert.equal((html.match(/<li /g)||[]).length,2);
assert.match(html,/<ol class="material-properties" dir="rtl"/);
assert.match(html,/>2\.<\/span>\s*<div class="material-property-text" dir="auto">/);
assert(!html.includes('<script>'));
assert(html.includes('data-display="inline"'));
console.log('Verified property lists, legacy backups, restore, validation, retained drafts, safe rendering, and LaTeX.');
