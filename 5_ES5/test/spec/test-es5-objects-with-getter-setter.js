/* global describe:false, it:false, assert:false, taskObject:false, taskListObject:false, reminderObject:false*/

(function () {
    'use strict';

    describe('My TaskListObject app', function () {
        describe('A TaskObject', function () {
            it('should provide a Task object', function () {
                var myTask = Object.create(taskObject);
                assert(myTask);
            });
            it('should provide a subject on a Task object that is undefined if not setted', function () {
                var myTask = Object.create(taskObject);
                assert(typeof myTask.subject === 'undefined');
            });
            it('should provide a changeable subject on a Task object', function () {
                var myTask = Object.create(taskObject);
                myTask.subject = 'My Task';
                assert(myTask.subject === 'My Task');
            });
            it('should be still possible to access internal _subjectValue', function() {
                var myTask = Object.create(taskObject);
                myTask.subject = 'My Task';
                assert(myTask._subjectValue === 'My Task');
            });
            it('should not be possible to set invalid values', function () {
                var myTask = Object.create(taskObject);
                try {
                    myTask.subject = null;
                } catch(e) {
                    assert(e === 'Illegal Argument Exception');
                }
            });
        });
    });
})();
