/* global describe:false, it:false, assert:false, task:false, taskList:false*/

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
                myTask.subject = 'My Task';
                assert(myTask.subject === 'My Task');
            });
            it('should be possible to overwrite values', function () {
                var myTask = Object.create(task);
                myTask.subject = 'My Task';
                assert(myTask.subject === 'My Task');

                var myOtherTask = Object.create(myTask);
                assert(myOtherTask.subject === 'My Task');

                myOtherTask.subject = 'My other Task';
                assert(myOtherTask.subject === 'My other Task');
                assert(myTask.subject === 'My Task');

            });
        });
        describe ('A Reminder', function() {
            it('should provide a Reminder object', function () {
                var myReminder = Object.create(reminder);
                assert(myReminder);
            });
            it('should provide a subject on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                assert(myReminder.subject === '');
            });
            it('should provide a changeable subject on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                myReminder.subject = 'My Reminder';
                assert(myReminder.subject === 'My Reminder');
            });
            it('should provide a changeable date on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                var now = Date.now();
                assert(myReminder.date !== now);
                myReminder.date = now;
                assert(myReminder.date === now);
            });
        });
        describe ('A Reminder', function() {
            it('should provide a subject on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                assert(myReminder.subject === '');
            });
            it('should provide a changeable subject on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                myReminder.subject = 'My Reminder';
                assert(myReminder.subject === 'My Reminder');
            });
            it('should provide a changeable date on a Reminder object', function () {
                var myReminder = Object.create(reminder);
                var now = Date.now();
                assert(myReminder.date, 'a date is defined')
                assert(myReminder.date !== now, 'but it is not now (hopefully)');
                myReminder.date = now;
                assert(myReminder.date === now);
            });
        });
        describe ('An ES5 Reminder', function() {
            it('should be extensible', function () {
                var myReminder = Object.create(reminder);
                reminder.importance = 1;
                assert(reminder.importance === 1);
                assert(myReminder.importance === 1);

                myReminder.importance = 2;
                assert(myReminder.importance === 2);
                assert(reminder.importance === 1);

                delete myReminder.importance;
                assert(myReminder.importance === 1);
                assert(reminder.importance === 1);

            });
        });
        describe ('A TaskList', function(){
            it('should provide a taskList', function(){
                var myTaskList = Object.create(taskList);
                assert(myTaskList);
            });
            it('should be possible to add a Task to a TaskList', function(){
                var myTaskList = Object.create(taskList);
                var myTask = Object.create(task);
                myTaskList.add(myTask);
                assert(myTaskList.elements.pop() === myTask, 'a element is not in the list');
            });
            it('should be possible to sort the Elements of a TaskList', function(){
                var myTaskList = Object.create(taskList);
                var banana = Object.create(task);
                banana.subject = 'Banana';
                var apple = Object.create(task);
                apple.subject = 'Apple';
                var raspberry = Object.create(task);
                raspberry.subject = 'Raspberry';
                myTaskList.add(banana).add(raspberry).add(apple);
                myTaskList.sort();
                assert(myTaskList.elements.pop() === raspberry, 'task list is not sorted, last element is not raspberry');
            });
        });
    });
})();
