/* npm t exercises/single-objects/simple_dict_test.js
Instructions:
- Implement simple_dict.js so that the test passes.
*/

import {strict as assert} from 'assert';

import { createDict, setValue, getValue, hasKey, getKeys } from './simple_dict.js';

test('updateProperty: update existing property', () => {
  const dict = createDict();
  
  setValue(dict, '__proto__', 'abc');
  assert.equal(getValue(dict, '__proto__'), 'abc');
  assert.ok(hasKey(dict, '__proto__'));

  setValue(dict, 'foo', 123);
  assert.equal(getValue(dict, 'foo'), 123);
  assert.ok(hasKey(dict, 'foo'));
  
  assert.deepEqual(hasKey(dict, 'toString'), false);
  
  // Keys are listed in creation order!
  assert.deepEqual(getKeys(dict), ['__proto__', 'foo']);
});
