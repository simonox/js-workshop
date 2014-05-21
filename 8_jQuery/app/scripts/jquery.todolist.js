/* global define:false, $:false */

/**
 * @module jquery.todolist
 */
define(function() {
    'use strict';
    $.fn.listTodos = function (elements) {
        var theHTMLList = '';
        elements.forEach (function (eachTask)  {
                //Note the intermingling of HTML and JavaScript; it is tedious to follow:
                theHTMLList += '<tr>' +
                    '<td>' + '<input type="checkbox" />' + '</td>' +
                    '<td>' + eachTask.subject + '</td>' +
                    '</tr>';
            }
        );
        // only find deeper elements
        $(this).find('tbody').html(theHTMLList);
    };
});

