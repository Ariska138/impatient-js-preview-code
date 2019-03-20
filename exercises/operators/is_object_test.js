/* npm t exercises/operators/is_object_test.js
Instructions:
- Run the test (fails).
- Change is_object.js so that the test passes.
*/

import {strict as assert} from 'assert';

import {isObject} from './is_object.js';

test('isObject', () => {
  assert.equal(isObject(undefined), false);
  assert.equal(isObject(null), false);
  assert.equal(isObject(true), false);
  assert.equal(isObject(123), false);
  assert.equal(isObject('abc'), false);

  assert.equal(isObject(function () {}), true);
  assert.equal(isObject({}), true);
  assert.equal(isObject([]), true);
});
