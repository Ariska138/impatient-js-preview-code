'use strict';

var path = require('path');
var Mocha = require('mocha');
var Test = require('mocha/lib/test.js');

/**
 * QUnit-style interface:
 *
 *     suite('Array');
 *
 *     test('#length', function() {
 *       var arr = [1,2,3];
 *       ok(arr.length == 3);
 *     });
 *
 *     test('#indexOf()', function() {
 *       var arr = [1,2,3];
 *       ok(arr.indexOf(1) == 0);
 *       ok(arr.indexOf(2) == 1);
 *       ok(arr.indexOf(3) == 2);
 *     });
 *
 *     suite('String');
 *
 *     test('#length', function() {
 *       ok('foo'.length == 3);
 *     });
 *
 * @param {Suite} suite Root suite.
 */
function qUnitInterface(disableSkip, suite) {
  var suites = [suite];

  suite.on('pre-require', function(context, file, mocha) {
    var common = require('mocha/lib/interfaces/common.js')(suites, context, mocha);

    context.before = common.before;
    context.after = common.after;
    context.beforeEach = common.beforeEach;
    context.afterEach = common.afterEach;
    context.run = mocha.options.delay && common.runWithSuite(suite);
    
    /**
     * Describe a "suite" with the given `title`.
     */
    function suite(title) {
      if (suites.length > 1) {
        suites.shift();
      }
      return common.suite.create({
        title: title,
        file: file,
        fn: false
      });      
    }
    context.suite = suite;
    suite(path.relative(process.cwd(), file)); // @rauschma

    /**
     * Exclusive Suite.
     */

    context.suite.only = function(title) {
      if (suites.length > 1) {
        suites.shift();
      }
      return common.suite.only({
        title: title,
        file: file,
        fn: false
      });
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */
    function theTest(title, fn) {
      var test = new Test(title, fn);
      test.file = file;
      suites[0].addTest(test);
      return test;
    }
    context.test = theTest;

    /**
     * Exclusive test-case.
     */

    context.test.only = function(title, fn) {
      return common.test.only(mocha, context.test(title, fn));
    };

    if (disableSkip) { // @rauschma
      context.test.skip = theTest;
    } else {
      context.test.skip = common.test.skip;
    }
    context.test.retries = common.test.retries;
  });
}

Mocha.interfaces['qunit_never_skip'] = qUnitInterface.bind(undefined, true);
Mocha.interfaces['qunit_file_suites'] = qUnitInterface.bind(undefined, false);