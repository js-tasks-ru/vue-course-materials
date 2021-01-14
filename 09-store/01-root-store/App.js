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

  computed: {
    user() {
      return this.$root.user;
    },

    isAuthenticated() {
      return this.$root.isAuthenticated;
    },
  },
};
