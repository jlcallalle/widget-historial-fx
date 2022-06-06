/* eslint-disable global-require */
import Vue from 'vue';
import VueGoodTablePlugin from 'vue-good-table';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';
// import 'bootstrap';
import './scss/custom.scss';
import 'vue-good-table/dist/vue-good-table.css';

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default;
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: false,
  });
}

Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#widget-historial-fx');
