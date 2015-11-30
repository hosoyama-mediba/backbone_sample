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
        initialize: function() {
            _.bindAll(this, 'render');
        },
        render: function() {
            // 描画開始前の処理があればここに書く

            // 終わったよイベント発火
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
            return this;
        }
    });

    return EntryView;
});
