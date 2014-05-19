/* global describe:false, it:false, assert:false, Task:false, TaskList:false */

(function () {
    'use strict';

    describe('My TaskList app', function () {
        describe ('A Task', function() {
            it('should provide a Task object', function () {
                var myTask = new Task('My important task');
                assert(myTask instanceof Task, 'it is not a task');
            });
            it('should provide a subject on a Task object', function () {
                var myTask = new Task('My important task');
                assert(myTask.subject === 'My important task');
            });
        });

        describe ('A TaskList', function(){
            it('should provide a TaskList Constructor', function(){
                var myTaskList = new TaskList();
                assert(myTaskList instanceof TaskList);
            });
            it('should be possible to add a Task to a TaskList', function(){
                var myTaskList = new TaskList();
                var myTask = new Task('My Task');
                myTaskList.add(myTask);
                assert(myTaskList.elements.pop() === myTask);
            });
            it('should be possible to sort the Elements of a TaskList', function(){
                var myTaskList = new TaskList();
                var banana = new Task('Banana');
                var apple = new Task('Apple');
                var raspberry = new Task('Raspberry');
                myTaskList.add(banana).add(apple).add(raspberry);
                assert(myTaskList.elements[0] === banana, 'can find a element');

                myTaskList.sort();
                assert(myTaskList.elements[0] === apple, 'task list is not sorted');
            })
        })
    });
})();
