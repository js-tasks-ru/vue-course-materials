import LoginPage from './LoginPage.js';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    user() {},

    isAuthenticated() {},
  },

  template: `
    <div id="app" class="wrapper page container">
      <login-page v-if="!isAuthenticated"/>
      <div v-else>{{ user }}</div>
    </div>`,
};
