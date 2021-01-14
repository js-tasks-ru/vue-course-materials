export default {
  name: 'LoginPage',

  template: `
    <form @submit.prevent="handleSubmit">
      <p>
        <input v-model="email" placeholder="email"/>
      </p>
      <p>
        <input v-model="password" type="password" placeholder="password" />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>`,

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  inject: {
    store: 'store',
  },

  methods: {
    handleSubmit() {
      this.store.login(this.email, this.password).catch((error) => {
        alert(error.message);
      });
    },
  },
};
