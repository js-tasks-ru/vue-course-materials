import Vue from './vendor/vue.esm.browser.js';
import { windowSizeMixin } from './mixins/window-size-mixin.js';
import { createLocalPropMixin } from './mixins/create-local-prop-mixin.js';

const userLocalPropMixin = createLocalPropMixin('user', {
  propMixin: { type: Object },
  localName: 'localUser',
});

const UserForm = {
  mixins: [userLocalPropMixin],

  template: `
    <form>
      <p>FirstName: <input v-model="localUser.firstName"></p>
      <p>LastName: <input v-model="localUser.lastName"></p>
    </form>`,
};

Vue.mixin(windowSizeMixin);

const App = {
  components: { UserForm },

  data() {
    return {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  template: `
    <div>
      <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
      <hr>
      <user-form :user.sync="user" />
      <hr>
      <pre>{{ user }}</pre>
    </div>`,
};

new Vue(App).$mount('#app');
