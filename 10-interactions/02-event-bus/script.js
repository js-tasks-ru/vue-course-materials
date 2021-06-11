import Vue from './vendor/vue.esm.browser.js';

import TheToaster from './TheToaster.js';
import SamplePage from './SamplePage.js';
import { ToastEventBus } from './ToastEventBus.js';
import { ToastEmitter } from './ToastEmitter.js';

const App = {
  name: 'App',

  components: {
    SamplePage,
    TheToaster,
  },

  mounted() {
    this.$root.$on('toaster:success', (message) => {
      this.$refs['toaster'].success(message);
    });

    ToastEventBus.$on('success', (message) => {
      this.$refs['toaster'].success(message);
    });

    ToastEmitter.on('success', (message) => {
      this.$refs['toaster'].success(message);
    });
  },

  template: `
    <div class="wrapper page container">
      <the-toaster ref="toaster" />
      <sample-page />
    </div>`,
};

new Vue(App).$mount('#app');
