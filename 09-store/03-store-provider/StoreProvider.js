import { loginWithApi } from './api.js';

export const StoreProvider = {
  data() {
    return {
      state: {
        user: null,
      },
    };
  },

  provide() {
    return {
      store: {
        state: this.state,
        setUser: this.setUser,
        login: this.login,
      },
    };
  },

  methods: {
    setUser(user) {
      this.state.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },

  render() {
    return this.$scopedSlots.default();
  },
};
