/**
 * @fileOverview ボディ描画View
 * @file         views/body
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/ua',
    'hbars!templates/body'
], function($, _, Backbone, ua, template) {
    'use strict';

    var BodyView = Backbone.View.extend({
        el: '.js-body',
        fin: 'body',
        prepare: function() {
            return this.render();
        },
        render: function() {
            var _this = this;

            // デバイスの判定を楽にしたい
            console.log(ua.iOS ? 'iOS' : 'not iOS');

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
