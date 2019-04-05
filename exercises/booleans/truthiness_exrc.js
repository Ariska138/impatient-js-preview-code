/* npm t exercises/booleans/truthiness_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/

import {assert} from 'assert';

test('instanceof', () => {
  assert.equal(Boolean(null), false);
  assert.equal(Boolean(undefined), false);

  assert.equal(Boolean(''), false);
  assert.equal(Boolean('abc'), true);
  assert.equal(Boolean(0), false);
  assert.equal(Boolean(123), true);
  
  assert.equal(Boolean({}), true);
  assert.equal(Boolean([]), true);
});
