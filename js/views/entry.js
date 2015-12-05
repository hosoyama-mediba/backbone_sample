// views/entry
// EntryView
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    var EntryView = Backbone.View.extend({
        fin: 'entry',
        // オーバーライドもできる
        initialize: function() {
            // do something initialize

            // 親を呼ぶこともできる
            EntryView.__super__.initialize.apply(this, arguments);
        },
        prepare: function() {
            return this.render();
        },
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
                    Backbone.mediator.trigger('resize', e);
                }, 200);
            });

            return this.finalize();
        }
    });

    return EntryView;
});
