/* npm t exercises/numbers-math/parse_number_test.js
Instructions:
- Create the file parse_number.js
- Ensure the test passes
*/

import {strict as assert} from 'assert';

import {parseNumber} from './parse_number.js';

test('parseNumber', () => {
  assert.equal(parseNumber('16'), 16);
  assert.equal(parseNumber(''), 0);
  // Whitespace
  assert.equal(parseNumber('\t 123 \n'), 123);
  // Other non-digit characters
  assert.equal(parseNumber('456#'), NaN);
  // Hexadecimal integer number
  assert.equal(parseNumber('0xFF'), 255);
  // Binary integer number
  assert.equal(parseNumber('0b111'), 7);
});
