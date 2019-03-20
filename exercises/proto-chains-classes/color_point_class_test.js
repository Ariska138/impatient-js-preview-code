/* npm t exercises/proto-chains-classes/color_point_class_test.js
Instructions:
- Create the file color_point_class.js
- Ensure the test passes
*/

import {strict as assert} from 'assert';

import {Point} from './point_class.js';
import {ColorPoint} from './color_point_class.js';

test('Class ColorPoint', () => {
  const cpt = new ColorPoint(4, 7, 'red');
  assert.ok(cpt instanceof Point);
  assert.ok(cpt instanceof ColorPoint);
  assert.equal(cpt.toString(), `(4, 7) in red`);
});
