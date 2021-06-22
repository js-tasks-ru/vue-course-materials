<template>
  <form @submit.prevent="handleSubmit">
    <p v-if="error">{{ error }}</p>
    <p v-if="isLoading">Loading...</p>
    <p><input v-model="email" placeholder="email" /></p>
    <p><input v-model="password" type="password" placeholder="password" /></p>
    <p><button>Submit</button></p>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  computed: {
    ...mapState('auth', {
      isLoading: (state) => state.isLoading,
      error: (state) => state.error,
    }),

    // isLoading() {
    //   return this.$store.state.auth.isLoading;
    // },
    //
    // error() {
    //   return this.$store.state.auth.error;
    // },
  },

  methods: {
    ...mapActions('auth', {
      login: 'LOGIN',
    }),

    // login({ email, password }) {
    //   return this.$store.dispatch('auth/LOGIN', { email, password });
    // },

    handleSubmit() {
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped></style>
