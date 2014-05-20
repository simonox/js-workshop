/**
 * The Constructor for a Task
 * @param subject {String} the subject of the task
 * @constructor
 */
var task =  Object.create({}, {
    subject :	{
        value: '', writable: true, configurable: false, enumerable: true
    }
});

var reminder = Object.create(task, {
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

