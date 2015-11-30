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
        initialize: function(options) {
            _.bindAll(this, 'render');

            var fireEvent = Backbone.appName + ':' + options.on;
            Backbone.mediator.once(fireEvent, this.render);
        },
        render: function() {
            this.$el.hide().html(template).fadeIn('normal');
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
            return this;
        }
    });

    return FooterView;
});
