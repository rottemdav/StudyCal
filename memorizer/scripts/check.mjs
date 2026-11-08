import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const root = path.resolve(import.meta.dirname, '../dist');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root,'seed.js'),'utf8'), ctx);
const data = ctx.window.SEED;
const katex = createRequire(import.meta.url)(path.join(root,'katex.min.js'));
const ids = new Set(data.items.map(i=>i.id));
assert.equal(ids.size,data.items.length,'Material IDs must be unique');
const visited=new Set(),active=new Set();
function visit(i){
  assert(!active.has(i.id),'Prerequisite graph contains a cycle');
  if(visited.has(i.id)) return;
  active.add(i.id);
  for(const id of i.links){const target=data.items.find(j=>j.id===id);assert(target && target.course===i.course,'Connection must exist in the same course');visit(target);}
  active.delete(i.id);visited.add(i.id);
}
for(const i of data.items){
  assert(data.courses.some(c=>c.id===i.course),'Course must exist');
  assert.equal(i.choices.length,4);
  assert.equal(new Set(i.choices).size,4,'Choices must be distinct');
  assert(Number.isInteger(i.answer) && i.answer>=0 && i.answer<4);
  assert(i.title && i.statement && i.question && i.explanation);
  if(i.formula) katex.renderToString(i.formula,{throwOnError:true,strict:'ignore',trust:false});
  visit(i);
}
for(const filename of ['index.html','style.css','katex.min.css']){
  const content=fs.readFileSync(path.join(root,filename),'utf8');
  const refs=filename.endsWith('.html')?[...content.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>m[1]):[...content.matchAll(/url\(([^)]+)\)/g)].map(m=>m[1].replace(/['"]/g,''));
  for(const ref of refs){if(ref.startsWith('#')||ref.startsWith('data:'))continue;assert(!ref.startsWith('http'),'Assets should be local');assert(fs.existsSync(path.join(root,ref)),`Missing asset: ${ref}`);}
}
assert(fs.readFileSync(path.join(root,'KATEX-LICENSE.txt'),'utf8').includes('MIT'));
console.log(`Verified ${data.items.length} questions, all formulas, prerequisite graph, and local assets.`);
