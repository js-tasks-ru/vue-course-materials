import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const App = {
  template: `
    <div>
      <input value="Text Value" />
    </div>`,
};

const app = new Vue(App).$mount('#app');
