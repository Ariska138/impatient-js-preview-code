# Support files for mocha

`mocha_exercise_uis.js`:
* `mocha --ui qunit_file_suites --require ./mocha/mocha_exercise_uis.js`
  * Treats each file as a suite and prints the file name. Benefit: easier to see where a failure happens.
* `mocha --ui qunit_never_skip --require ./mocha/mocha_exercise_uis.js`
  * Executes each test, even if it is a `test.skip()`. Rationale: tests for bonus exercises are switched off by default, but should be executed by `npm run testall`
