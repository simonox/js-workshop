/* global require:false, $:false */
require(['scripts/de.immonet.todolist.js'], function(todolist) {
    'use strict';
    var myTask = new todolist.Task('My first ToDo Task');
    $('#task').text(myTask.subject);
});