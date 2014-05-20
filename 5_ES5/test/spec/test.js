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
