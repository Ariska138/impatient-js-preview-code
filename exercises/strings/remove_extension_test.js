/* npm t exercises/strings/remove_extension_test.js
Instructions:
- Create the file remove_extension.js
- Ensure this test passes
*/

import {strict as assert} from 'assert';

import {removeExtension} from './remove_extension.js';

test('removeExtension', () => {
	assert.equal(removeExtension(''), '');
    assert.equal(removeExtension('foo.txt'), 'foo');
    assert.equal(removeExtension('foo.js'), 'foo');
    assert.equal(removeExtension('foo.tar.gz'), 'foo.tar');
    assert.equal(removeExtension('foo'), 'foo');
    assert.equal(removeExtension('.foo'), '');
});
