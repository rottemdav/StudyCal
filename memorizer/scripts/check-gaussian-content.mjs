import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const context = { window: {} };
const script = fs.readFileSync(new URL('../dist/gaussian-signals.js', import.meta.url), 'utf8');
vm.runInNewContext(script, context);
const { removeRetiredGaussianCards, SIGNAL_UNITS } = context.window;
const scalar = { id: 'gs_density', course: 'signals', unit: 'gaussian-scalars', links: [] };
const vector = { id: 'gv_process', course: 'signals', unit: 'gaussian-vectors', links: [scalar.id] };
const manual = { id: 'manual-card', course: 'signals', unit: 'gaussian-vectors', links: [scalar.id, 'other-card'] };
const other = { id: 'other-card', course: 'signals', unit: 'conditional-moments', links: [vector.id] };
const data = {
  items: [scalar, vector, manual, other],
  progress: { [scalar.id]: { attempts: 2 }, [vector.id]: { attempts: 1 }, [manual.id]: { attempts: 3 } }
};

assert(SIGNAL_UNITS['gaussian-scalars']);
assert(SIGNAL_UNITS['gaussian-vectors']);
assert.equal(removeRetiredGaussianCards(data), true);
assert.deepEqual([...data.items], [manual, other]);
assert.deepEqual(manual.links, ['other-card']);
assert.deepEqual(other.links, []);
assert.deepEqual(data.progress, { [manual.id]: { attempts: 3 } });
assert.equal(removeRetiredGaussianCards(data), false);
assert.equal(removeRetiredGaussianCards({ items: [], progress: {} }), false);
console.log('Verified retirement of built-in Gaussian cards and preservation of manual cards and progress.');
