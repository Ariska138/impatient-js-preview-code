import {strict as assert} from 'assert';

const jane = {
    first: 'Jane',
    describe: function () {
        return `Person named ${this.first}`;
    },
};

test('method_extraction_exrc', () => {
    const func = jane.describe.bind(jane);
    assert.equal(func(), 'Person named Jane');
    jane.first = 'John';
    assert.equal(func(), 'Person named John');
});
