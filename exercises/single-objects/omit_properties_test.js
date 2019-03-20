/* npm t exercises/single-objects/omit_properties_test.js
Instructions:
– Implement omit_properties.js so that the test passes. Use Object.entries() and Object.fromEntries() to do so.
– omitProperties(object, ...keys) returns a shallow copy of `object` that has all of the properties of the original except for those whose `keys` are mentioned at the end.
– Inspired by Underscore function _.omit(): https://underscorejs.org/#omit
*/

import {strict as assert} from 'assert';

import {omitProperties} from './omit_properties.js';
import {shim} from 'object.fromentries';

if (!Object.fromEntries) {
  shim();
}

test('omitProperties', () => {
  const obj = {a: 1, b: 2, c: 3};
  assert.deepEqual(
    omitProperties(obj), // omit nothing
    {a: 1, b: 2, c: 3}
  );
  assert.deepEqual(
    omitProperties(obj, 'c'),
    {a: 1, b: 2}
  );
  assert.deepEqual(
    omitProperties(obj, 'c', 'b'),
    {a: 1}
  );
  assert.deepEqual(
    omitProperties(obj, 'a', 'c'),
    {b: 2}
  );
  assert.deepEqual(
    omitProperties(obj, 'a', 'c', 'b'), // omit everything
    {}
  );
});
