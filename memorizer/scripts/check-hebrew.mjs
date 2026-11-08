import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'../dist');
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'seed.js'),'utf8'),ctx);
const {SEED,localizeExamples}=ctx.window;
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('<html lang="he" dir="rtl">'),'Document language and direction must be Hebrew');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));
assert.equal(manifest.lang,'he');assert.equal(manifest.dir,'rtl');
for(const course of SEED.courses) assert(/[א-ת]/.test(course.name));
for(const item of SEED.items){
  for(const key of ['title','topic','statement','question','explanation']) assert(/[א-ת]/.test(item[key]),`${item.id}.${key} must contain Hebrew`);
  for(const choice of item.choices) assert(!/[A-Za-z]{3,}/.test(choice),`English prose in ${item.id} choice`);
}
// Translate only untouched examples, preserving user edits, connections, and progress.
const oldRank={id:'rank',course:'linear',title:'Rank–nullity theorem',type:'Theorem',topic:'Linear maps',statement:'For a linear map T from a finite-dimensional vector space V to W, the dimension of V equals the rank of T plus the dimension of its kernel.',formula:'\\dim V = \\operatorname{rank}(T) + \\dim \\ker(T)',question:'A linear map T: ℝ⁵ → ℝ³ has rank 2. What is the dimension of its kernel?',choices:['2','3','5','1'],answer:1,explanation:'Rank–nullity uses the dimension of the domain: 5 = 2 + dim ker(T), so the kernel has dimension 3.',links:['kernel']};
const custom={...oldRank,title:'My edited theorem',links:[]};
const progress={rank:{attempts:3,correct:2,lastCorrect:true,lastSeen:100}};
const backup={version:1,courses:[{id:'linear',name:'Linear algebra',demo:true}],items:[structuredClone(oldRank)],progress};
const localized=localizeExamples(backup);
assert.equal(localized.courses[0].name,'אלגברה לינארית');
assert.equal(localized.items[0].title,'משפט הממד');
assert.equal(JSON.stringify(localized.items[0].links),'["kernel"]');
assert.equal(localized.progress,progress);
const userEdited=localizeExamples({...backup,items:[custom]});
assert.equal(userEdited.items[0],custom,'User edits must not be replaced');
assert.equal(localizeExamples(localized).items[0].title,'משפט הממד');
console.log('Hebrew metadata, all example text, and backward-compatible example migration passed.');
