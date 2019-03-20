/* npm t exercises/exception-handling/call_function_test.js
Instructions:
– Change call_function.js so that it passes the test.
*/

import {strict as assert} from 'assert';

import {callFunction} from './call_function.js';

test('monthToNumber', () => {
  assert.deepEqual(
    callFunction(() => { return 'abc' }),
    { success: 'abc' });
  
  const err = new Error('Failed!');
  assert.deepEqual(
    callFunction(() => { throw err }),
    { failure: err });
});
