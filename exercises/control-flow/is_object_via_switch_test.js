/* npm t exercises/control-flow/is_object_via_switch_test.js
Instructions:
– Change is_object_via_switch.js so that it uses a switch statement
*/

import {strict as assert} from 'assert';

import {isObject} from './is_object_via_switch.js';

test('isObject via switch', () => {
  assert.equal(isObject(undefined), false);
  assert.equal(isObject(null), false);
  assert.equal(isObject(true), false);
  assert.equal(isObject(123), false);
  assert.equal(isObject('abc'), false);

  assert.equal(isObject(function () {}), true);
  assert.equal(isObject({}), true);
  assert.equal(isObject([]), true);
});
