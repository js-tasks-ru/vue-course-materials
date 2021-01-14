import LoginPage from './LoginPage.js';
import { store } from './store.js';

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

  // Можно использовать provide/inject, чтобы дальше использовать из контекста, а не импортировать
  // inject: {
  //   store: 'store',
  // },

  computed: {
    user() {
      return store.auth.state.user;
    },

    isAuthenticated() {
      return store.auth.isAuthenticated();
    },
  },
};
