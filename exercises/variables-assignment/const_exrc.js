/* npm t exercises/variables-assignment/const_exrc.js
Instructions:
- Run this test (it fails).
- Insert a single(!) const statement so that the test passes.
*/

import {strict as assert} from 'assert';

test('const', () => {
    const x = 3;
    assert.equal(x, 3);
    {
        assert.equal(x, 12);
    }
    assert.equal(x, 3);
});
