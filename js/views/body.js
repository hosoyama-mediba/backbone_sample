// views/body
// BodyView
define([
    'jquery',
    'underscore',
    'backbone',
    'hbars!templates/body'
], function($, _, Backbone, template) {
    'use strict';

    var BodyView = Backbone.View.extend({
        el: '.js-body',
        fin: 'body',
        prepare: function() {
            return this.render();
        },
        render: function() {
            this.$el.hide().html(template).fadeIn('normal');

            return this.finalize();
        }
    });

    return BodyView;
});
