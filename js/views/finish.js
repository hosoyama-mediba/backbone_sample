// views/finish
// FinishView
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    var FinishView = Backbone.View.extend({
        fin: 'finish',
        render: function() {
            // 全ての描画が終わった時の処理をここに書く

            this.finalize();
        }
    });

    return FinishView;
});
