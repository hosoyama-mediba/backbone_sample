/**
 * @fileOverview RequireJSの設定
 * @file         main
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
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
