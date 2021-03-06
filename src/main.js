import Vue from 'vue';
import Router from 'vue-router';
import plain from 'vue-plain';
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
Vue.use(plain);

window.userName = window.sessionStorage.getItem('userName');

let router = initRouter(Router);
router.start(App, '#app');
