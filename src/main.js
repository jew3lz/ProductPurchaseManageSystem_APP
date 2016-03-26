import Vue from 'vue';
import Router from 'vue-router';
import Plugin from './util/plugin';
import initRouter from './router';
import App from './views/layout/App.vue';

import './metronic/layout/scripts/main';
import './common/request';

import 'toastr/build/toastr.css';
import Toastr from 'toastr';

window.Toastr = Toastr;
window.Vue = Vue;

Vue.config.debug = true;
Vue.use(Router);
Vue.use(Plugin);

let router = initRouter(Router);
router.start(App, '#app');
