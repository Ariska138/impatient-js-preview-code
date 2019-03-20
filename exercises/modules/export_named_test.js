/* npm t exercises/modules/export_named_test.js
Instructions:
– Create export_named.js so that this test passes
*/

import {strict as assert} from 'assert';

import {func} from './export_named.js';

test('export_named', () => {
    assert.equal(func(), 'hello');
});
