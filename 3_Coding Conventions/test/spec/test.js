/* global describe, it */

(function () {
    'use strict';

    describe('My awseome app', function () {
        describe('should run a simple test', function () {
            it('should not fails', function () {
                assert(true, "just a boolean check");
            });
        });
        describe('should be able run some business logic', function () {
           it('should add two numbers', function() {
               assert(add(5,3) === 8, "5 + 3 should be 8");
           });
        });
    });
})();
