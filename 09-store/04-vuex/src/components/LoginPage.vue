<template>
  <form @submit.prevent="handleSubmit">
    <p v-if="error">{{ error }}</p>
    <p v-if="isLoading">Loading...</p>
    <p>
      <input v-model="email" placeholder="email" /></p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <button>Submit</button>
    </p>
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
  },

  methods: {
    ...mapActions('auth', {
      login: 'LOGIN',
    }),

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
