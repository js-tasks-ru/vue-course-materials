import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { loginWithApi } from './api.js';

export const store = {
  auth: {
    state: Vue.observable({
      user: null,
    }),

    isAuthenticated() {
      return !!this.state.user;
    },

    setUser(user) {
      this.state.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },
};
