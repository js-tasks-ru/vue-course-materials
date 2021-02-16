import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { selectOnFocus } from './directives/select-on-focus.js';

import { selectOnFocus } from './directives/select-on-focus.js';

const App = {
  template: `
    <div>
      <input value="Text Value" v-select-on-focus="[1, 4]" />
    </div>`,

  directives: {
    selectOnFocus,
  },
};

// или зарегистрировать глобально
// Vue.directive('select-on-focus', selectOnFocus);

const app = new Vue(App).$mount('#app');
