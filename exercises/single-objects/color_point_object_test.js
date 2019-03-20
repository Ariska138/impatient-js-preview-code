/* npm t exercises/single-objects/color_point_object_test.js
Instructions:
- Create the file color_point_object.js
- Ensure the test passes
*/

import {strict as assert} from 'assert';

import {colorPoint} from './color_point_object.js';

test('Object colorPoint', () => {
  assert.equal(colorPoint.x, 3);
  assert.equal(colorPoint.y, 5);
  assert.equal(colorPoint.dist(), Math.sqrt(3**2 + 5**2));
  assert.equal(colorPoint.toString(), `(3, 5)`);
  
  colorPoint.x = 2;
  colorPoint.y = 4;
  assert.equal(colorPoint.x, 2);
  assert.equal(colorPoint.y, 4);
  assert.equal(colorPoint.dist(), Math.sqrt(2**2 + 4**2));
  assert.equal(colorPoint.toString(), `(2, 4)`);
});
