/* npm t exercises/values/conversion_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test succeeds
*/

import {strict as assert} from 'assert';

test('conversion', () => {
  assert.equal(Boolean(5), '???');
  assert.equal(Number('7'), '???');
  assert.equal(String(21), '???');
});
