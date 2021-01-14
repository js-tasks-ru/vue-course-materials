<template>
  <div class="wrapper page container">
    <login-page v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import LoginPage from './components/LoginPage';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    ...mapState('auth', {
      user: (state) => state.user,
    }),

    ...mapGetters('auth', {
      isAuthenticated: 'IS_AUTHENTICATED',
    }),

    // user() {
    //   return this.$store.state['auth'].user;
    // },

    // isAuthenticated() {
    //   return this.$store.getters['auth/IS_AUTHENTICATED'];
    // },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
