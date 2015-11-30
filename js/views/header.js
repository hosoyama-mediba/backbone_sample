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
        initialize: function(options) {
            _.bindAll(this, 'render');

            // ルータから渡されたイベント名でバインドする
            var fireEvent = Backbone.appName + ':' + options.on;
            Backbone.mediator.once(fireEvent, this.render);
        },
        render: function() {
            // DOM操作
            this.$el.hide().html(template).fadeIn('normal');

            // 終わったよ
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
            return this;
        }
    });

    return HeaderView;
});
