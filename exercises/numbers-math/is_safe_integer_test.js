/* npm t exercises/numbers-math/is_safe_integer_test.js
Instructions:
- Create the file is_safe_integer.js
- Ensure the test passes
*/

import {strict as assert} from 'assert';

import {isSafeInteger} from './is_safe_integer.js';

test('Is it an integer?', () => {
	assert.equal(isSafeInteger(123.1), false);
	assert.equal(isSafeInteger(123), true);
	assert.equal(isSafeInteger('123'), false);
});
test('Is it safe?', () => {
	assert.equal(isSafeInteger(2 ** 53), false);
	assert.equal(isSafeInteger(-(2 ** 53)), false);

	assert.equal(isSafeInteger((2 ** 53)-1), true);
	assert.equal(isSafeInteger(-(2 ** 53)+1), true);

	assert.equal(isSafeInteger(0), true);
	assert.equal(isSafeInteger(5), true);
	assert.equal(isSafeInteger(-5), true);
});
