'use strict';
/**
 * A Task Object
 * @namespace
 * @extends Object
 */
var task =  Object.create({}, {
    /**
     * The subject of a Task Object
     * @type {String}
     * @memberOf task
     */
    subject :	{
        value: '', writable: true, configurable: false, enumerable: true
    }
});

/**
 * A Reminder extends a Task
 * @extends task
 */
var reminder = Object.create(task, {
    /**
     * The date of a Reminder Object
     * @type {Date}
     * @memberOf reminder
     */
    date: {
        value: Date.now(), writable: true, configurable: false, enumerable: true
    }
});

/**
 * A TaskList
 * @namespace
 * @extends {Object}
 */
var taskList = Object.create({}, {
    /**
     * The Elements of a Task List
     * @type: {Array}
     * @memberOf taskList
     */
    elements : {
        value: [], writable: true, configurable: false, enumerable: true
    },
    /**
     * Adds a Task to the Elements of a Task List
     * @type {Function}
     * @memberOf taskList
     * @param task {task}
     */
    add : {
        value: function(task) {
            this.elements.push(task);
            return this;
        }, writable: false, configurable: false, enumerable: false
    },
    /**
     * Sorts the Elements of a Task List
     * @type {Function}
     * @memberOf taskList
     */
    sort : {
        value: function() {
            this.elements.sort(function(a, b) {
                if (a.subject > b.subject) {
                    return 1;
                } else if (a.subject < b.subject) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }, writable: false, configurable: false, enumerable: false
    }
});

