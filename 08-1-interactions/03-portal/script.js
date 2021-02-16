import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import AppToast from './AppToast.js';
import SamplePage from './SamplePage.js';
import { PortalTarget } from './portal-vue.esm.min.js';

const App = {
  name: 'App',

  template: `
    <div class="wrapper page container">
      <sample-page />
      <portal-target name="root-end" />
    </div>`,

  components: {
    SamplePage,
    AppToast,
    PortalTarget,
  },
};

const app = new Vue(App).$mount('#app');
