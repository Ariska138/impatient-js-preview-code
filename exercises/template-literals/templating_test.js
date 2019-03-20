/* npm t exercises/template-literals/templating_test.js
Instructions: Implement templating.js
– Use the HTML templating technique as described in the slides.
– You don’t need to escape the template data.
*/

import {strict as assert} from 'assert';

import {arrayWithObjectsToTable, arrayToUnorderedListWithEscaping} from './templating.js'

test('arrayWithObjectsToTable', () => {
  const data = [
    { first: 'Lars', last: 'Croft' },
    { first: 'Jane', last: 'Bond' },
  ];
  // Lenient testing via .trim()
  assert.equal(arrayWithObjectsToTable(data).trim(),
`<table>
  <tr><td>Croft</td><td>Lars</td></tr>
  <tr><td>Bond</td><td>Jane</td></tr>
</table>`);
});

//---------- Bonus (remove .skip to activate)

test.skip('arrayToUnorderedListWithEscaping', () => {
  const data = [
    '<first item>',
    'second item',
  ];
  assert.equal(arrayToUnorderedListWithEscaping(data).trim(), `
<ul>
  <li>&lt;first item&gt;</li>
  <li>second item</li>
</ul>
  `.trim());
});
