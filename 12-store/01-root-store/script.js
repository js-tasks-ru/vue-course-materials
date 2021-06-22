import Vue from './vendor/vue.esm.browser.js';
import App from './App.js';
import { loginWithApi } from './api.js';

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      user: null,
    };
  },

  computed: {
    user() {
      return { ...this.user };
    },

    isAuthenticated() {
      return !!this.user;
    },
  },

  methods: {
    setUser(user) {
      this.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },

  render: (h) => h(App),
}).$mount('#app');
