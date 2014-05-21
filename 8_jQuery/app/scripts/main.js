/* global require:false, $:false */
require(['scripts/jquery.colorize.js'], function(todolist) {
    'use strict';
    $('#header').colorize();
});

require(['scripts/jquery.todolist.js', 'scripts/de.immonet.todolist.js'], function($plugin, model) {
    'use strict';
    var myTaskList = new model.TaskList();
    myTaskList.add(new model.Task('Hello World')).add(new model.Task('Hello Again')).add(new model.Reminder('Remind Me', Date.now())).sort();
    $('#taskTable').listTodos(myTaskList.elements);
});