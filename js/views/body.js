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
        render: function() {
            this.$el.hide().html(template).fadeIn('normal');

            this.finish();
        }
    });

    return BodyView;
});
