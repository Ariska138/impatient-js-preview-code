import {strict as assert} from 'assert';

export function code_const () {
    const i = 0;

    assert.throws(
        () => { i = i + 1},
        {
            name: 'TypeError',
            message: 'Assignment to constant variable.'
        }
    );
}

export function code_let () {
    let i;

    i = 0;
    i = i + 1;

    assert.equal(i, 1);
}

