import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import { localPropMixin } from './local-prop-mixin.js';
import { windowSizeMixin } from './window-size-mixin.js';

const UserForm = {
  template: `
    <form>
      <p>FirstName: <input v-model="user_.firstName"></p>
      <p>LastName: <input v-model="user_.lastName"></p>
    </form>`,

  mixins: [localPropMixin('user', { type: Object, required: true })],
};

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

  data() {
    return {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  mixins: [windowSizeMixin],
};

const app = new Vue({
  render: h => h(App),
}).$mount('#app');
