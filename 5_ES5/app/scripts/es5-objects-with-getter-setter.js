'use strict';
/**
 * A Task Object
 * @namespace
 * @extends Object
 */
var taskObject =  Object.create({}, {

});

/**
 * Property of a Task Object
 * @property subject {string}
 * @memberOf taskObject
 */
Object.defineProperty(taskObject, 'subject', {
   get: function() {
       return this._subjectValue;
   },
   set: function(subject) {
       if (subject) {
           this._subjectValue = subject;
       } else {
           throw 'Illegal Argument Exception';
       }
   },
   enumerable: true
});
