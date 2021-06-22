import LoginPage from './LoginPage.js';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  inject: {
    auth: 'auth',
  },

  computed: {
    user() {
      return this.auth.getUser();
    },

    isAuthenticated() {
      return this.auth.isAuthenticated();
    },
  },

  template: `
    <div id="app" class="wrapper page container">
      <login-page v-if="!isAuthenticated"/>
      <div v-else>{{ user }}</div>
    </div>`,
};
