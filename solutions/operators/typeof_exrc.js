import {strict as assert} from 'assert';

test('typeof', () => {
  assert.equal(typeof null, 'object');
  assert.equal(typeof undefined, 'undefined');
  
  assert.equal(typeof 123, 'number');
  assert.equal(typeof 'a', 'string');
  assert.equal(typeof "abc", 'string');
  
  assert.equal(typeof {}, 'object');
  assert.equal(typeof function () {}, 'function');
  assert.equal(typeof [], 'object');
});
