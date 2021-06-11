import Vue from './vendor/vue.esm.browser.js';

import SamplePage from './SamplePage.js';
import { PortalTarget } from './portal-vue.esm.min.js';

const App = {
  name: 'App',

  components: {
    SamplePage,
    PortalTarget,
  },

  template: `
    <div class="wrapper page container">
      <sample-page />
      <portal-target name="root-end" />
    </div>`,
};

new Vue(App).$mount('#app');
