import { loginWithApi } from './api.js';

export const AuthProvider = {
  name: 'AuthProvider',

  data() {
    return {
      state: {
        user: null,
      },
    };
  },

  computed: {
    isAuthenticated() {
      return !!this.state.user;
    },
  },

  provide() {
    return {
      auth: {
        state: this.state,
        getUser: () => this.state.user,
        isAuthenticated: () => this.isAuthenticated,
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
