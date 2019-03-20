/* npm t exercises/booleans/truthiness_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/

import {strict as assert} from 'assert';

test('instanceof', () => {
  assert.equal(Boolean(null), 'some value');
  assert.equal(Boolean(undefined), 'some value');

  assert.equal(Boolean(''), 'some value');
  assert.equal(Boolean('abc'), 'some value');
  assert.equal(Boolean(0), 'some value');
  assert.equal(Boolean(123), 'some value');
  
  assert.equal(Boolean({}), 'some value');
  assert.equal(Boolean([]), 'some value');
});
