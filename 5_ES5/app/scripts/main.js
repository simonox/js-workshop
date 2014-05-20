'use strict';
/**
 * A Task Object
 */
var task =  Object.create({}, {
    /**
     * The subject {String} of a Task Object
     */
    subject :	{
        value: '', writable: true, configurable: false, enumerable: true
    }
});

/**
 * A Reminder extends a Task
 * @type {task}
 */
var reminder = Object.create(task, {
    /**
     * The date {Date} of a Reminder Object
     */
    date: {
        value: Date.now(), writable: true, configurable: false, enumerable: true
    }
});

var taskList = Object.create({}, {
    elements : {
        value: [], writable: true, configurable: false, enumerable: true
    }
});

/**
 * The Constructor for a TaskList
 * @constructor
 */
function TaskList() {
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

