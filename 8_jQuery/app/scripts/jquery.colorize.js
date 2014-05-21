/* global define:false, $:false */

/**
 * @module jquery.colorize
 */
define(function() {
    'use strict';
    $.fn.colorize = function (parameters) {
        parameters = jQuery.extend({
            color: 'green' // a color parameter
        }, parameters);

        $(this).css('color', parameters.color);
    };
});

