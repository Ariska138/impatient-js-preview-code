/* npm t exercises/single-objects/method_extraction_exrc.js
Instructions:
- Run this test (fails)
- Change the code so that the test passes
*/

import {strict as assert} from 'assert';

const jane = {
    first: 'Jane',
    describe: function () {
        return `Person named ${this.first}`;
    },
};

test('method_extraction_exrc', () => {
    const func = jane.describe;
    assert.equal(func(), 'Person named Jane');
    jane.first = 'John';
    assert.equal(func(), 'Person named John');
});
