
require.config({
    enforceDefine: false,
    paths: {jquery: 'jquery-1.8.3.min',
        fullpage:'jquery.fullPage.min',
        app:'app'
    }
});
 
require(['jquery'], function($) {
    require(['fullpage','app'],function(){});
 });