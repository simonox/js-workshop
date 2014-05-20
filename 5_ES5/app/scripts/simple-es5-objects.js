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
     * @memberOf taskObject
     */
    subject :	{
        value: '', writable: true, configurable: false, enumerable: true
    }
});

/**
 * A Reminder extends a Task
 * @extends taskObject
 */
var reminder = Object.create(task, {
    /**
     * The date of a Reminder Object
     * @type {Date}
     * @memberOf reminderObject
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
     * @memberOf taskListObject
     */
    elements : {
        value: [], writable: true, configurable: false, enumerable: true
    },
    /**
     * Adds a Task to the Elements of a Task List
     * @type {Function}
     * @memberOf taskListObject
     * @param task {taskObject}
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
     * @memberOf taskListObject
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

