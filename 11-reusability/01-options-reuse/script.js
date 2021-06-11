import Vue from './vendor/vue.esm.browser.js';
import { windowSizeOptions } from './window-size-options.js';
import { createLocalPropOptions } from './create-local-prop-options.js';

const userLocalPropOptions = createLocalPropOptions('user', {
  propOptions: { type: Object },
  localName: 'localUser',
});

const UserForm = {
  props: {
    ...userLocalPropOptions.props,
  },

  data() {
    return {
      ...userLocalPropOptions.data(),
    };
  },

  watch: {
    ...userLocalPropOptions.watch,
  },

  template: `
    <form>
      <p>FirstName: <input v-model="localUser.firstName"></p>
      <p>LastName: <input v-model="localUser.lastName"></p>
    </form>`,
};

const App = {
  components: { UserForm },

  data() {
    return {
      ...windowSizeOptions.data(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  mounted() {
    windowSizeOptions.mounted();
  },

  beforeDestroy() {
    windowSizeOptions.beforeDestroy();
  },

  methods: {
    ...windowSizeOptions.methods,
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
