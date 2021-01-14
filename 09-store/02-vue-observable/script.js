import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import App from './App.js';
import { store } from './store.js';

Vue.config.productionTip = false;

new Vue({
  // Можно использовать provide/inject, чтобы дальше использовать из контекста, а не импортировать
  // provide() {
  //   return {
  //     store,
  //   };
  // },

  render: h => h(App),
}).$mount('#app');
