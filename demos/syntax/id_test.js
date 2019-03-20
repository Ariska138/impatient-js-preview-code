// npm t demos/syntax/id_test.js

import {strict as assert} from 'assert';
import {id} from './id.js';

test('My test', () => {
  assert.equal(id('abc'), 'abc');
});
