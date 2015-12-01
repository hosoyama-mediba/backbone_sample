// js/main

// require.jsの設定
require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        Handlebars: 'libs/handlebars',
        text: 'libs/text',
        hbars: 'libs/hbars'
    },
    // shimは新しめのライブラリなら不要
    shim: {
        jquery: {
            exports: '$'
        },
        'jquery.cookie': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    }
});

// アプリを初期化する
require([
    'app'
], function(App) {
    App.initialize();
});