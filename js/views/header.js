// views/header
// HeaderView
define([
    'jquery',
    'underscore',
    'backbone',
    'hbars!templates/header'
], function($, _, Backbone, template) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: '.js-header',
        fin: 'header',
        render: function() {
            // DOM操作
            this.$el.hide().html(template).fadeIn('normal');

            return this.finalize();
        }
    });

    return HeaderView;
});
