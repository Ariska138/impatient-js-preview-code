/* npm t exercises/syntax/first_module_test.js
Instructions:
- Run the test (fails)
- Change first_module.js so that the test passes.
*/

import {strict as assert} from 'assert';

import {hello} from './first_module.js';

test('First exercise', () => {
  assert.equal(hello('world'), 'Hello world!');
  assert.equal(hello('Jane'), 'Hello Jane!');
  assert.equal(hello('John'), 'Hello John!');
  assert.equal(hello(''), 'Hello !');
});
