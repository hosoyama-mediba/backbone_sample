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
            var _this = this;
            this.$el.hide().html(template).fadeIn('normal', function() {
                _this.finalize();
            });
            return this;
        }
    });

    return BodyView;
});
