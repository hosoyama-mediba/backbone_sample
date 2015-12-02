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
        render: function() {
            // 描画開始前の処理があればここに書く

            this.finalize();
        }
    });

    return EntryView;
});
