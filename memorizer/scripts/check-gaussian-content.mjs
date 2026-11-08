import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const root=path.resolve(import.meta.dirname,'../dist');
const ctx={window:{},structuredClone};
for(const name of ['seed','conditional-signals','gaussian-signals'])vm.runInNewContext(fs.readFileSync(path.join(root,name+'.js'),'utf8'),ctx);
const pack=ctx.window.GAUSSIAN_PACK,katex=createRequire(import.meta.url)(path.join(root,'katex.min.js'));
const all=[...ctx.window.CONDITIONAL_PACK.items,...pack.items],byId=new Map(all.map(i=>[i.id,i]));
assert.equal(pack.items.length,51);assert.equal(byId.size,all.length);
assert.equal(pack.items.filter(i=>i.unit==='gaussian-scalars').length,22);
assert.equal(pack.items.filter(i=>i.unit==='gaussian-vectors').length,29);
const pages={2:7,3:6,4:7,5:4,8:8};
const done=new Set(),active=new Set();
function visit(i){assert(!active.has(i.id),`Cycle at ${i.id}`);if(done.has(i.id))return;active.add(i.id);for(const id of i.links){assert(byId.has(id),`Missing ${id}`);visit(byId.get(id));}active.delete(i.id);done.add(i.id);}
for(const i of pack.items){
  assert.equal(i.course,'signals');assert(i.unit in pack.units);
  assert(['Definition','Formula','Claim','Theorem'].includes(i.type));
  for(const k of ['title','statement','topic','question','explanation'])assert(/[א-ת]/.test(i[k]),`${i.id}.${k}`);
  assert.equal(i.choices.length,4);assert.equal(new Set(i.choices).size,4);assert(i.choices.every(c=>c.trim()));assert(Number.isInteger(i.answer)&&i.answer>=0&&i.answer<4);
  katex.renderToString(i.formula,{throwOnError:true,strict:'ignore',trust:false});
  assert(['direct','derived','supplement'].includes(i.origin));assert(i.sources.length);
  for(const s of i.sources){const n=Number(s.file.match(/Tutorial (\d+)\.pdf$/)?.[1]);assert(pages[n]);assert(s.pages.every(p=>Number.isInteger(p)&&p>=1&&p<=pages[n]));assert(/[א-ת]/.test(s.section));}
  visit(i);
}
// Existing material and attempts survive; updates and backup reloads never duplicate cards.
let saved=structuredClone(ctx.window.SEED);ctx.window.addConditionalContent(saved);
saved.selectedCourse='linear';saved.progress={cm_tower:{attempts:4,correct:3,lastCorrect:true,lastSeen:123}};
saved.items.find(i=>i.id==='cm_tower').statement='הניסוח האישי שלי';
saved.items=saved.items.filter(i=>i.id!=='cm_absolute');saved.items.forEach(i=>i.links=i.links.filter(id=>id!=='cm_absolute'));
const count=saved.items.length,progress=JSON.stringify(saved.progress);
ctx.window.addGaussianContent(saved);
assert.equal(saved.items.length,count+51);assert.equal(saved.selectedCourse,'linear');assert.equal(JSON.stringify(saved.progress),progress);
assert.equal(saved.items.find(i=>i.id==='cm_tower').statement,'הניסוח האישי שלי');assert(!saved.items.find(i=>i.id==='gs_absolute').links.includes('cm_absolute'));
saved.items.find(i=>i.id==='gv_definition').statement='הגדרה שערכתי';saved.items=saved.items.filter(i=>i.id!=='gs_tails');saved.items.forEach(i=>i.links=i.links.filter(id=>id!=='gs_tails'));
saved=JSON.parse(JSON.stringify(saved));ctx.window.addGaussianContent(saved);
assert.equal(saved.items.length,count+50);assert(!saved.items.some(i=>i.id==='gs_tails'));assert.equal(saved.items.find(i=>i.id==='gv_definition').statement,'הגדרה שערכתי');
const itemIds=new Set(saved.items.map(i=>i.id));for(const i of saved.items)assert(i.links.every(id=>itemIds.has(id)));
for(const unit of Object.keys(pack.units))assert.equal(ctx.window.signalsUnitFor(unit),unit);
assert.equal(ctx.window.signalsUnitFor('תוחלת מותנית'),'conditional-moments');assert.equal(ctx.window.signalsUnitFor('all'),'');
// Recompute worked answers from model parameters.
const number=(id)=>{const i=byId.get(id);return Number(i.choices[i.answer]);};
assert.equal(number('gs_density'),Math.sqrt(9));assert.equal(number('gs_second'),3+2**2);
assert.equal(number('gs_fourth-raw'),1**4+6*1**2*2+3*2**2);
assert.equal(number('gs_square'),2*2**2);assert.equal(number('gv_linear-combination'),3+3-2);
assert.equal(number('gv_conditional-pair'),4*(1-(1/2)**2));assert.equal(number('gv_squared-covariance'),2*3+2*1**2);
// Check the actual covariance transform in the course's decorrelation example.
const multiply=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((s,v,k)=>s+v*b[k][j],0)));
const transpose=a=>a[0].map((_,j)=>a.map(r=>r[j]));
const D=[[1/Math.sqrt(2),1/Math.sqrt(2)],[1/Math.sqrt(2),-1/Math.sqrt(2)]];
const result=multiply(multiply(D,[[3,1],[1,3]]),transpose(D));
for(let i=0;i<2;i++)for(let j=0;j<2;j++)assert(Math.abs(result[i][j]-(i===j?[4,2][i]:0))<1e-12);
// The random-sum and random-phase counterexamples violate Gaussian fourth moments.
const randomSumVariance=(1+2)/2,randomSumFourth=(3*1**2+3*2**2)/2;
assert.notEqual(randomSumFourth,3*randomSumVariance**2);
assert.notEqual(3*(3/8),3*(1/2)**2);
console.log('Verified 51 Gaussian cards, 22/29 unit split, KaTeX, sources, DAG, migration, and worked calculations.');
