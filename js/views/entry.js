/**
 * @fileOverview 最初にコントローラから呼ばれるView
 *               アプリの共通系の前処理を行う
 * @file         views/entry
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    /**
     * EntryView
     *
     * @type {Backbone.View}
     */
    var EntryView = Backbone.View.extend({
        /**
         * 終了時イベント名
         *
         * @type string
         */
        fin: 'entry',

        /**
         * 初期化
         *
         * @constructor
         */
        initialize: function() {
            // do something initialize

            // 親を呼ぶこともできる
            EntryView.__super__.initialize.apply(this, arguments);
        },

        /**
         * 前処理
         *
         * @return this
         */
        prepare: function() {
            return this.render();
        },

        /**
         * 描画処理
         *
         * @return this
         */
        render: function() {
            // 描画開始前の処理があればここに書く

            // リサイズイベントリスナ
            var timerId;
            $(window).on('resize', function(e) {
                // 発火タイミング調整
                if (timerId) {
                    clearTimeout(timerId);
                }
                timerId = setTimeout(function() {
                    // これを監視すれば調整済みのイベントを受け取れる
                    Backbone.app.event.trigger('resize', e);
                }, 200);
            });

            return this.finalize();
        }
    });

    return EntryView;
});
