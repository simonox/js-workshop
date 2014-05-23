/* global describe:false, it:false, assert:false, de:false */

(function () {
    'use strict';

    describe('My TaskList app', function () {
        var todolist = de.immonet.todolist,
            Task = todolist.Task,
            Reminder = todolist.Reminder,
            TaskList = todolist.TaskList;

        describe ('A Task', function() {
            it('should provide a Task object', function () {
                var myTask = new de.immonet.todolist.Task('My important task');
                assert(myTask instanceof de.immonet.todolist.Task, 'it is not a task');
            });
            it('should provide a subject on a Task object', function () {
                var myTask = new de.immonet.todolist.Task('My important task');
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
            });
        });

        describe('A Reminder', function(){
            it('should be a Task', function() {
                var now = new Date();
                var myReminder = new Reminder('Remind Me', now);
                assert(myReminder instanceof Task);
            });
            it('should be have a subject an a due date', function() {
                var now = new Date();
                var myReminder = new Reminder('Remind Me', now);
                assert(myReminder.subject === 'Remind Me');
                assert(myReminder.date === now);
            });
        });

        describe('A mixed Task/Reminder list', function() {
            it('should be able to handle Tasks and Reminders', function(){
                var myTaskList = new TaskList();
                var myTask = new Task('My Task');
                var myReminder = new Reminder('My Reminder', new Date());
                myTaskList.add(myTask).add(myReminder);
                assert(myTaskList.elements.pop() === myReminder);
                assert(myTaskList.elements.pop() === myTask);
            });
        });

    });
})();
