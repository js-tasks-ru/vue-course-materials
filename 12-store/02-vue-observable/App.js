import LoginPage from './LoginPage.js';
import { getUser, isAuthenticated } from './auth-service.js';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    user() {
      return getUser();
    },

    isAuthenticated() {
      return isAuthenticated();
    },
  },

  template: `
    <div id="app" class="wrapper page container">
      <login-page v-if="!isAuthenticated"/>
      <div v-else>{{ user }}</div>
    </div>`,
};
