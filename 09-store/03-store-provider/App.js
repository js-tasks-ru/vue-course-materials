import LoginPage from './LoginPage.js';

export default {
  name: 'App',

  template: `
    <div id="app" class="wrapper page container">
      <login-page v-if="!isAuthenticated"/>
      <div v-else>{{ user }}</div>
    </div>`,

  components: {
    LoginPage,
  },

  inject: {
    store: 'store',
  },

  computed: {
    user() {
      return this.store.state.user;
    },

    isAuthenticated() {
      return !!this.store.state.user;
    },
  },
};
