/* npm t exercises/single-objects/update_name_test.js
Instructions:
- Create the file update_name.js so that the tests pass.
- Use spreading.
*/

import {strict as assert} from 'assert';

import {updateName} from './update_name.js';

test('updateName: update existing property', () => {
  const input = { name: 'John', age: 54 };
  const output = updateName(input, 'Jane');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Jane', age: 54 });
});

test('updateName: add new property', () => {
  const input = {};
  const output = updateName(input, 'Rumpelstiltskin');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Rumpelstiltskin' });
});
