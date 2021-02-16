import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { windowSizeMixin } from './mixins/window-size-mixin.js';
import { localPropMixin } from './mixins/local-prop-mixin.js';

const UserForm = {
  template: `
    <form>
      <p>FirstName: <input v-model="local_user.firstName"></p>
      <p>LastName: <input v-model="local_user.lastName"></p>
    </form>`,

  mixins: [localPropMixin('user', { type: Object }, (name) => `local_${name}`)],
};

Vue.mixin(windowSizeMixin);

const App = {
  template: `
    <div>
      <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
      <hr>
      <user-form :user.sync="user" />
      <hr>
      <pre>{{ user }}</pre>
    </div>`,

  components: { UserForm },

  // mixins: [windowSizeMixin],

  data() {
    return {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },
};

const app = new Vue(App).$mount('#app');
