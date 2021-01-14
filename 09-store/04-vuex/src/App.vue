<template>
  <div class="wrapper page container">
    <login-page v-if="!isAuthenticated"/>
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    user() {
    },

    isAuthenticated() {
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
