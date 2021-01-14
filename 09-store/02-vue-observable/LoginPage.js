import { store } from './store.js';

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

  // Можно использовать provide/inject, чтобы дальше использовать из контекста, а не импортировать
  // inject: {
  //   store: 'store',
  // },

  methods: {
    handleSubmit() {
      store.auth.login(this.email, this.password).catch((error) => {
        alert(error.message);
      });
    },
  },
};
