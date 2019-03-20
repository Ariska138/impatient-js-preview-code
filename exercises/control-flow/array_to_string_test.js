/* npm t exercises/control-flow/array_to_string_test.js
Instructions:
– Implement array_to_string.js so that it passes the test.
*/

import {strict as assert} from 'assert';

import {arrayToString} from './array_to_string.js';

test('arrayToString', () => {
  const CMYK = [
    'cyan',
    'magenta',
    'yellow',
    'key',
  ];
  assert.equal(arrayToString(CMYK), `
1. cyan
2. magenta
3. yellow
4. key
  `.trim());
});
