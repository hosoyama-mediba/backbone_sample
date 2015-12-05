/**
 * @fileOverview ボディ描画View
 * @file         views/body
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
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
                Backbone.mediator.on('resize', _this.onResize, this);
                _this.finalize();
            });
            return this;
        },
        onResize: function(e) {
            //console.log('body:resize');
        }
    });

    return BodyView;
});
