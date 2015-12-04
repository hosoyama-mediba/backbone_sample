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
        prepare: function() {
            return this.render();
        },
        render: function() {
            // DOM操作
            var _this = this;
            this.$el.hide().html(template).fadeIn('normal', function() {
                _this.finalize();
            });
            return this;
        }
    });

    return HeaderView;
});
