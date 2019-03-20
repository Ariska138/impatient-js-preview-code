/* npm t exercises/callables/named_parameters_test.js
Instructions:
- Change the ES5 code in named_parameters.js so that it uses ES6 and destructuring
- Make sure the tests still pass
*/

import {strict as assert} from 'assert';

import {handleNamedParameters} from './named_parameters.js';

test('All named parameters', () => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2, color: 'red' }),
        [1, 2, 'red']);
});

test('Omitting named parameters', () => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2 }),
        [1, 2, 'black']);
    assert.deepEqual(
        handleNamedParameters({ color: 'red' }),
        [0, 0, 'red']);
    
    assert.deepEqual(
        handleNamedParameters({}),
        [0, 0, 'black']);
});

test('Omitting named parameter object', () => {
    assert.deepEqual(
        handleNamedParameters(),
        [0, 0, 'black']);    
});
