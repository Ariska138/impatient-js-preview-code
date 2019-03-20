/* npm t exercises/single-objects/find_key_test.js
Instructions:
– Implement find_key.js so that the test passes. Use Object.entries() to do so.
– findKey(object, callback) returns the first property key for which callback(propValue, propKey, object) returns true.
– Inspired by Underscore function _.findKey(): https://underscorejs.org/#findKey
*/

import {strict as assert} from 'assert';

import {findKey} from './find_key.js';

test('Find key via value', () => {
  assert.equal(
    findKey({a:1, b:2, c:3}, (v) => v > 1),
    'b'
  );
});

test('Find key via key', () => {
  assert.equal(
    findKey({a:1, bb:2, ccc:3}, (_v, k) => k.length > 2),
    'ccc'
  );
});

test('Is object passed to callback?', () => {
  const obj = {a:1, b:2, c:3};
  findKey(obj, (v, k, o) => assert.equal(o, obj));
});
