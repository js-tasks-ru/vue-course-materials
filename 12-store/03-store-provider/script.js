import Vue from './vendor/vue.esm.browser.js';
import App from './App.js';
import { AuthProvider } from './AuthProvider.js';

Vue.config.productionTip = false;

new Vue({
  components: {
    App,
    AuthProvider,
  },

  template: `
    <auth-provider>
      <app />
    </auth-provider>`,
}).$mount('#app');
