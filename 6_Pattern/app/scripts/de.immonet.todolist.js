'use strict';
/**
 * @namespace
 */
var de = de || {};

/**
 * @namespace
 */
de.immonet = de.immonet || {};

/**
 * @namespace
 */
de.immonet.todolist = de.immonet.todolist || {};

(function(todolist) {
    /**
     * The Constructor for a Task
     * @param subject {String} the subject of the task
     * @constructor
     */
    function Task(subject) {
        this.subject = subject;
    }

    /**
     *
     * @param subject {String} The subject of the reminder
     * @param date {Date} The date when to remind
     * @constructor
     */
    function Reminder(subject, date){
        Task.apply(this, arguments);
        this.date = date;
    }
    Reminder.prototype = new Task();

    /**
     * The Constructor for a TaskList
     * @constructor
     */
    function TaskList () {
        /**
         * The elements of the TaskList
         * @type {Array}
         */
        this.elements = [];
        /**
         * @param task {Task} Adds a Task Object to the elements of the TaskList
         */

        this.add = function(task) {
            this.elements.push(task);
            return this;
        };

        /**
         * Sorts the elements
         */
        this.sort = function() {
            this.elements.sort(function(a, b) {
                if (a.subject > b.subject) {
                    return 1;
                } else if (a.subject < b.subject) {
                    return -1;
                } else {
                    return 0;
                }
            });
        };
    }
    // Exports
    todolist.Task = Task;
    todolist.Reminder = Reminder;
    todolist.TaskList = TaskList;
})(de.immonet.todolist);
