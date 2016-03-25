import Vue from 'vue';
import Router from 'vue-router';
import initRouter from './router';
import App from './views/layout/App.vue';

import 'lib/metronic/layout/scripts/main';
import './common/request';

import 'toastr/build/toastr.css';
import Toastr from 'toastr';

window.Toastr = Toastr;

Vue.config.debug = true;
Vue.use(Router);

let router = initRouter(Router);
router.start(App, '#app');
