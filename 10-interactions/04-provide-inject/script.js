import Vue from './vendor/vue.esm.browser.js';

import SamplePage from './SamplePage.js';
import ToasterProvider from './ToasterProvider.js';

const App = {
  name: 'App',

  components: { SamplePage, ToasterProvider },

  provide() {
    return {
      config: {
        API_URL: 'https://course-vue.javascript.ru/api',
      },
    };
  },

  template: `
    <toaster-provider>
      <div class="wrapper page container">
        <sample-page />
      </div>
    </toaster-provider>`,
};

new Vue(App).$mount('#app');
