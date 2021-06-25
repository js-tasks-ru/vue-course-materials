import Vue from './vendor/vue.esm.browser.js';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const UserForm = {
  props: {
    user: {
      type: Object,
    },
  },

  data() {
    return {
      localUser: null,
    };
  },

  watch: {
    user: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (!deepEqual(this.user, this.localUser)) {
          this.localUser = deepClone(newValue);
        }
      },
    },

    localUser: {
      deep: true,
      handler(newValue) {
        this.$emit('update:user', deepClone(newValue));
      },
    },
  },

  template: `
    <form>
      <p>FirstName: <input v-model="localUser.firstName"></p>
      <p>LastName: <input v-model="localUser.lastName"></p>
    </form>`,
};

const App = {
  components: { UserForm },

  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowSize);
  },

  methods: {
    updateWindowSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
  },

  template: `
    <div>
      <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
      <hr>
      <user-form :user.sync="user" />
      <hr>
      <pre>{{ user }}</pre>
    </div>`,
};

new Vue(App).$mount('#app');
