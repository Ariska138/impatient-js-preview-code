/* npm t exercises/modules/export_default_test.js
Instructions:
– Create export_default.js so that this test passes
*/

import {strict as assert} from 'assert';

import func from './export_default.js';

test('export_default', () => {
    assert.equal(func(), 'hello');
});
