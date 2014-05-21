/* global require:false */

'use strict';
require(['scripts/de.immonet.todolist.js'], function(todolist) {
    var myTask = new todolist.Task('My first ToDo Task');
    $('#task').text(myTask.subject);
});