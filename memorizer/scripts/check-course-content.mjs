import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';

const root=path.resolve(import.meta.dirname,'../dist');
const ctx={window:{},structuredClone};
for(const name of ['seed.js','conditional-signals.js'])vm.runInNewContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const pack=ctx.window.CONDITIONAL_PACK;
const katex=createRequire(import.meta.url)(path.join(root,'katex.min.js'));
const pageCounts={1:5,2:7,3:6,4:7,5:4,6:4,7:5,8:8,9:5,11:4};
const ids=new Set(pack.items.map(i=>i.id));
assert.equal(pack.items.length,65);
assert.equal(ids.size,pack.items.length);
const expectationItems=pack.items.filter(i=>i.topic==='תוחלת מותנית');
assert.equal(expectationItems.length,17);
for(const i of expectationItems)assert(/\\mathbb E\[[^\]]*\\mid/.test(i.formula),`${i.id} must contain a conditional expectation`);
assert.equal(pack.items.filter(i=>i.topic==='הסתברות ופילוגים מותנים').length,5);
const visited=new Set(),active=new Set();
function visit(i){
  assert(!active.has(i.id),'Prerequisite cycle');if(visited.has(i.id))return;
  active.add(i.id);
  for(const id of i.links){assert(ids.has(id),`Missing prerequisite ${id}`);visit(pack.items.find(i=>i.id===id));}
  active.delete(i.id);visited.add(i.id);
}
for(const i of pack.items){
  assert.equal(i.course,'signals');assert.equal(i.unit,pack.id);
  assert(['Theorem','Claim','Formula','Definition'].includes(i.type));
  for(const key of ['title','topic','statement','question','explanation'])assert(/[א-ת]/.test(i[key]),`${i.id}.${key} must be Hebrew`);
  assert.equal(i.choices.length,4);assert.equal(new Set(i.choices).size,4);assert(i.choices.every(c=>c.trim()));
  assert(Number.isInteger(i.answer)&&i.answer>=0&&i.answer<4);
  katex.renderToString(i.formula,{throwOnError:true,strict:'ignore',trust:false});
  assert(['direct','derived','supplement'].includes(i.origin));assert(i.sources.length);
  for(const source of i.sources){
    const n=Number(source.file.match(/Tutorial (\d+)\.pdf$/)?.[1]);
    assert(pageCounts[n],`Unknown source ${source.file}`);
    assert(source.pages.every(p=>Number.isInteger(p)&&p>=1&&p<=pageCounts[n]));
  }
  visit(i);
}

// The content update must survive backups and respect personal edits and deletions.
let data=structuredClone(ctx.window.SEED);
data.progress={mmse:{attempts:3,correct:2,lastCorrect:true,lastSeen:123}};
data.items.push({...structuredClone(data.items[0]),id:'personal',title:'נוסחה אישית',links:[]});
const originalCount=data.items.length,originalProgress=JSON.stringify(data.progress);
ctx.window.addConditionalContent(data);
assert.equal(data.items.length,originalCount+65);assert.equal(data.selectedCourse,'signals');
assert.equal(JSON.stringify(data.progress),originalProgress);
const first=data.items.find(i=>i.id==='cm_variance');first.statement='ניסוח אישי ששונה';
data.items=data.items.filter(i=>i.id!=='cm_circle');
data=JSON.parse(JSON.stringify(data));ctx.window.addConditionalContent(data);
assert.equal(data.items.length,originalCount+64,'Reload must not restore deleted bundled material');
assert.equal(data.items.find(i=>i.id==='cm_variance').statement,'ניסוח אישי ששונה');
assert.equal(data.items.filter(i=>i.id==='personal').length,1);

// Upgrade existing devices from version 1 without restoring deletions or overwriting edits.
let previous=structuredClone(ctx.window.SEED);
previous.items.push(...structuredClone(pack.items));
for(const i of previous.items)if(i.topic==='הסתברות ופילוגים מותנים')i.topic='תוחלת מותנית';
previous.contentPacks={[pack.id]:1};
previous.selectedCourse='linear';
previous.progress={cm_tower:{attempts:4,correct:3,lastCorrect:true,lastSeen:123}};
previous.items.find(i=>i.id==='cm_law-discrete').statement='הניסוח האישי שלי';
previous.items.find(i=>i.id==='cm_bayes-event').topic='נושא אישי';
previous.items=previous.items.filter(i=>i.id!=='cm_law-continuous');
const countBefore=previous.items.length,progressBefore=JSON.stringify(previous.progress);
ctx.window.addConditionalContent(previous);
assert.equal(previous.items.length,countBefore);
assert(!previous.items.some(i=>i.id==='cm_law-continuous'));
assert.equal(previous.items.find(i=>i.id==='cm_law-discrete').topic,'הסתברות ופילוגים מותנים');
assert.equal(previous.items.find(i=>i.id==='cm_law-discrete').statement,'הניסוח האישי שלי');
assert.equal(previous.items.find(i=>i.id==='cm_bayes-event').topic,'נושא אישי');
assert.equal(previous.items.find(i=>i.id==='cm_tower').topic,'תוחלת מותנית');
assert.equal(previous.selectedCourse,'linear');
assert.equal(JSON.stringify(previous.progress),progressBefore);
assert.equal(previous.contentPacks[pack.id],pack.version);
ctx.window.addConditionalContent(previous);
assert.equal(previous.items.length,countBefore);

// Refresh the tower card on version-2 devices and leave user-written fields untouched.
const oldTower={"statement": "אם X אינטגרבילי, ממוצע התוחלת המותנית הוא התוחלת המקורית. הממוצע החיצוני מחושב לפי פילוג המשתנה המתנה, לא לפי פילוג X.", "formula": "\\mathbb E[X]=\\mathbb E[\\mathbb E[X\\mid Y]]", "explanation": "התוחלת הפנימית היא פונקציה של Y. כדי למצע אותה צריך לשקלל את ערכי Y לפי פילוגם."};
const tower=pack.items.find(i=>i.id==='cm_tower');
for(const mode of ['unchanged','edited','deleted']){
  const saved=structuredClone(data);
  saved.contentPacks[pack.id]=2;
  const t=saved.items.find(i=>i.id==='cm_tower');Object.assign(t,oldTower);
  if(mode==='edited')t.statement='הסבר אישי';
  if(mode==='deleted')saved.items=saved.items.filter(i=>i.id!=='cm_tower');
  const beforeCount=saved.items.length,beforeProgress=JSON.stringify(saved.progress);
  ctx.window.addConditionalContent(saved);
  assert.equal(saved.items.length,beforeCount);assert.equal(JSON.stringify(saved.progress),beforeProgress);
  const result=saved.items.find(i=>i.id==='cm_tower');
  if(mode==='deleted')assert(!result);
  else {
    assert.equal(result.formula,tower.formula);assert.equal(result.explanation,tower.explanation);
    assert.equal(result.statement,mode==='edited'?'הסבר אישי':tower.statement);
  }
  assert.equal(saved.contentPacks[pack.id],3);
}

// Recompute numerical answers from the mathematical models, not the text of the key.
const correctNumber=id=>{
  const i=pack.items.find(i=>i.id==='cm_'+id),text=i.choices[i.answer];
  const parts=text.split('/').map(Number);return parts.length===2?parts[0]/parts[1]:Number(text);
};
const near=(x,y)=>assert(Math.abs(x-y)<1e-12,`${x} != ${y}`);
near(correctNumber('gaussian-noise'),2*3/(2+3));
near(correctNumber('poisson-moments'),10*(2/5)*(3/5));
near(correctNumber('piecewise-total'),(1/3)*(1/2)+2);
near(correctNumber('poisson-forward'),4+3*(2-1));
near(correctNumber('poisson-bridge'),12*(1/3));
near(correctNumber('poisson-arrival'),6**2/12);
near(correctNumber('cross-arrivals'),3+3);
near(correctNumber('poisson-power'),Math.exp(-2+2**2/2));

// Conditioning independent Bernoulli variables on their sum creates negative covariance.
const outcomes=[[0,0],[0,1],[1,0],[1,1]],given=outcomes.filter(([x,n])=>x+n===1);
const mean=(a)=>a.reduce((x,y)=>x+y,0)/a.length;
const mx=mean(given.map(([x])=>x)),mn=mean(given.map(([,n])=>n));
near(mean(given.map(([x,n])=>x*n))-mx*mn,-1/4);
console.log(`Verified ${pack.items.length} course items, sources, formulas, dependencies, migration, and numerical answers.`);
