import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
  template: `
    <ul>
      <li v-for="(item, idx) in items_">
        <span>{{ item }}</span>
        <button @click="remove(idx)">x</button>
      </li>
    </ul>`,

  props: {
    items: Array,
  },

  data() {
    return {
      items_: [],
    };
  },

  watch: {
    items: {
      immediate: true,
      handler(newValue) {
        this.items_ = [...newValue];
      },
    },
  },

  methods: {
    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('update:items', [...this.items_]);
    },
  },
};

const App = {
  template: `
    <div>
      <list-view :items.sync="list" />
    </div>`,

  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};

const app = new Vue(App).$mount('#app');
