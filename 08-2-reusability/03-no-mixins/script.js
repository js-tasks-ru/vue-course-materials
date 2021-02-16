import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { windowSizeMixin } from './mixins/window-size-mixin.js';
import { localPropMixin } from './mixins/local-prop-mixin.js';

const userLocalPropMixin = localPropMixin(
  'user',
  { type: Object },
  (name) => `local_${name}`,
);

const UserForm = {
  template: `
    <form>
    <p>FirstName: <input v-model="local_user.firstName"></p>
    <p>LastName: <input v-model="local_user.lastName"></p>
    </form>`,

  props: {
    ...userLocalPropMixin.props,
  },

  data() {
    return {
      ...userLocalPropMixin.data(),
    };
  },

  watch: {
    ...userLocalPropMixin.watch,
  },
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

  mounted() {
    windowSizeMixin.mounted();
  },

  data() {
    return {
      ...windowSizeMixin.data(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  methods: {
    ...windowSizeMixin.methods,
  },

  beforeDestroy() {
    windowSizeMixin.beforeDestroy();
  },
};

const app = new Vue(App).$mount('#app');
