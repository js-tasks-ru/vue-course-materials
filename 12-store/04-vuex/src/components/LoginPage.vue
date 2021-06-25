<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <input v-model="email" placeholder="email" />
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>
</template>

<script>

export default {
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  computed: {},

  methods: {
    handleSubmit() {},
  },
};
</script>

<style scoped></style>
