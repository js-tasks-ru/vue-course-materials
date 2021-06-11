import Vue from './vendor/vue.esm.browser.js';
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
new Vue(App).$mount('#app');
