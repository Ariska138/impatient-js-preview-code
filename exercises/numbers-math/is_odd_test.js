/* npm t exercises/numbers-math/is_odd_test.js
Instructions:
- Create the file is_odd.js
- Ensure the test passes
- Possibly useful: Math.abs()
*/

import {strict as assert} from 'assert';

import {isOdd} from './is_odd.js';

test('isOdd', () => {
	assert.equal(isOdd(3), true);
	assert.equal(isOdd(-3), true);
	assert.equal(isOdd(10001), true);

	assert.equal(isOdd(0), false);
	assert.equal(isOdd(2), false);
	assert.equal(isOdd(-2), false);
	assert.equal(isOdd(10000), false);
});
