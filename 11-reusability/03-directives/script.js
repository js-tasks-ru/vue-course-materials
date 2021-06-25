import Vue from './vendor/vue.esm.browser.js';

const App = {
  template: `
    <div>
      <input value="Text Value" />
    </div>`,
};

new Vue(App).$mount('#app');
