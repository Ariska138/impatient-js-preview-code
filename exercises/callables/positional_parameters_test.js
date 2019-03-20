/* npm t exercises/callables/positional_parameters_test.js
Instructions:
– Implement positional_parameters.js so that it passes the test.
*/

import {strict as assert} from 'assert';

import {twoParametersWithDefaultValues, restParameters} from './positional_parameters.js';

test('twoParametersWithDefaultValues', () => {
  assert.deepEqual(twoParametersWithDefaultValues(), [0, 0]);
  assert.deepEqual(twoParametersWithDefaultValues(1), [1, 0]);
  assert.deepEqual(twoParametersWithDefaultValues(1, 2), [1, 2]);
  assert.deepEqual(twoParametersWithDefaultValues(1, 2, 3), [1, 2]);
});

test('restParameters', () => {
  assert.deepEqual(restParameters(), []);
  assert.deepEqual(restParameters(1), []);
  assert.deepEqual(restParameters(1, 2), [2]);
  assert.deepEqual(restParameters(1, 2, 3, 4), [2, 3, 4]);
  assert.deepEqual(restParameters(1, 2, 3, 4, 5), [2, 3, 4, 5]);
  assert.deepEqual(restParameters(1, 2, 3, 4, 5, 6), [2, 3, 4, 5, 6]);
  assert.deepEqual(restParameters(1, 2, 3, 4, 5, 6, 7), [2, 3, 4, 5, 6, 7]);
});

