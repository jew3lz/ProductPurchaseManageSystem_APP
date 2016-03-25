/**
 * layout 主题初始化
 */
/*require('jquery-ui');
require('bootstrap-hover-dropdown');
require('jquery-uniform');
require('bootstrap-switch');
require('jquery-slimscroll/jquery.slimscroll');*/


var app = window.Metronic = require('../../global/scripts/app');
var layout = require('./layout');
var quickSidebar = require('./quick-sidebar');
var demo = require('./demo');

$(function() {
    app.init(); // init metronic core components
    layout.init(); // init current layout
    quickSidebar.init(); // init quick sidebar
    demo.init(); // init demo features
});