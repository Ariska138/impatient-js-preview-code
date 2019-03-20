/* npm t exercises/single-objects/update_property_test.js
Instructions:
- Create the file update_property.js so that the tests pass.
- Use spreading.
– Same as update_name.js, but with arbitrary keys
*/

import {strict as assert} from 'assert';

import {updateProperty} from './update_property.js';

test('updateProperty: update existing property', () => {
  const input = { name: 'Jane', age: 54 };
  const output = updateProperty(input, 'age', 82);
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Jane', age: 82 });
});

test('updateProperty: add new property', () => {
  const input = {};
  const output = updateProperty(input, 'data', 123);
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { data: 123 });
});
