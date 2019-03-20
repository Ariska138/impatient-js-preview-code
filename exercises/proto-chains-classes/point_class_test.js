/* npm t exercises/proto-chains-classes/point_class_test.js
Instructions:
- Create the file point_class.js
- Ensure the test passes
*/

import {strict as assert} from 'assert';

import {Point} from './point_class.js';

test('Class Point', () => {
  const pt = new Point(4, 7);
  assert.equal(pt.x, 4);
  assert.equal(pt.y, 7);
  assert.equal(pt.dist(), Math.sqrt(4**2 + 7**2));
  assert.equal(pt.toString(), `(4, 7)`);
});
