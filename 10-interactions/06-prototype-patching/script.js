import Vue from './vendor/vue.esm.browser.js';
import SamplePage from './SamplePage.js';
import { toaster } from './toaster.js';

Vue.prototype.$toaster = toaster;
Vue.$toaster = toaster;

const App = {
  name: 'App',

  components: {
    SamplePage,
  },

  template: `
    <div class="wrapper page container">
      <sample-page />
    </div>`,
};

new Vue(App).$mount('#app');
