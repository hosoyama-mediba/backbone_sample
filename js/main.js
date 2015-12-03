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
    deps: ['app'],
    callback: function(App) {
        App.initialize();
    }
});
