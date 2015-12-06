/**
 * @fileOverview アプリの描画が全て感k料した場合に呼ばれるView
 * @file         views/finish
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    var FinishView = Backbone.View.extend({
        fin: 'finish',
        prepare: function() {
            return this.render();
        },
        render: function() {
            // 全ての描画が終わった時の処理をここに書く

            return this.finalize();
        }
    });

    return FinishView;
});
