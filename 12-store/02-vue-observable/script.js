import Vue from './vendor/vue.esm.browser.js';
import App from './App.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
