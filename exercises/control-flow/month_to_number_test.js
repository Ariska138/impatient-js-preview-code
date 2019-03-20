/* npm t exercises/control-flow/month_to_number_test.js
Instructions:
– Implement month_to_number.js so that it passes the test.
– Errors are thrown via: throw new Error(str)
*/

import {strict as assert} from 'assert';

import {monthToNumber} from './month_to_number.js';

test('monthToNumber', () => {
  assert.equal(monthToNumber(1), 'January');
  assert.throws(() => monthToNumber(0), /^Error: Unknown number: 0$/);
});
