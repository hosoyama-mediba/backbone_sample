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

    return BodyView;
});
