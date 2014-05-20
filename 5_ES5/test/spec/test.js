/* global describe:false, it:false, assert:false, task:false*/

(function () {
    'use strict';

    describe('My TaskList app', function () {
        describe ('A Task', function() {
            it('should provide a Task object', function () {
                var myTask = Object.create(task);
                assert(myTask);
            });
            it('should provide a subject on a Task object', function () {
                var myTask = Object.create(task);
                assert(myTask.subject === '');
            });
            it('should provide a changeable subject on a Task object', function () {
                var myTask = Object.create(task);
                myTask.subject = 'My Task'
                assert(myTask.subject === 'My Task');
            });
        });
    });

})();
