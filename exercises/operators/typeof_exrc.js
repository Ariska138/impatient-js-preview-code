/* npm t exercises/operators/typeof_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test passes
*/

import {strict as assert} from 'assert';

test('typeof', () => {
  assert.equal(typeof null, '???');
  assert.equal(typeof undefined, '???');
  
  assert.equal(typeof 123, '???');
  assert.equal(typeof 'a', '???');
  assert.equal(typeof "abc", '???');
  
  assert.equal(typeof {}, '???');
  assert.equal(typeof function () {}, '???');
  assert.equal(typeof [], '???');
});
