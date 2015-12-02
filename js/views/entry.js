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
        render: function() {
            // 描画開始前の処理があればここに書く

            this.finish();
        }
    });

    return EntryView;
});
