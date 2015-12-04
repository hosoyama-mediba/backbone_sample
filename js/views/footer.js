// views/footer
// FooterView
define([
    'jquery',
    'underscore',
    'backbone',
    'hbars!templates/footer'
], function($, _, Backbone, template) {
    'use strict';

    var FooterView = Backbone.View.extend({
        el: '.js-footer',
        fin: 'footer',
        prepare: function() {
            return this.render();
        },
        render: function() {
            this.$el.hide().html(template).fadeIn('normal');

            return this.finalize();
        }
    });

    return FooterView;
});
