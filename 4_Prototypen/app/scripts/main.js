
/**
 * Funktion to add to objects (e.g. {Number})
 * @param a {Number} first parameter
 * @param b {Number} second paramter
 * @returns {Number} the sum of both parameters
 */
function add(a, b) {
    'use strict';
    return a + b;
}

/**
 * The Constructor for a Task
 * @param subject {String} the subject of the task
 * @constructor
 */
function Task(subject) {
    this.subject = subject;
}

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
     * @param task {Task} Adds a Task object to the elements
     */
    this.add = function(task) {
        this.elements.push(task);
        return this;
    }
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
    }
}