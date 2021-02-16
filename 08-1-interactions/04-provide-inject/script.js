import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import SamplePage from './SamplePage.js';
import { ToasterProvider } from './ToasterProvider.js';

const App = {
  name: 'App',

  template: `
    <div class="wrapper page container">
      <toaster-provider>
        <sample-page />
      </toaster-provider>
    </div>`,

  components: {
    SamplePage,
    ToasterProvider,
  },

  provide() {
    return {
      config: {
        API_URL: 'https://course-vue.javascript.ru/api',
      },
    };
  },
};

const app = new Vue(App).$mount('#app');
