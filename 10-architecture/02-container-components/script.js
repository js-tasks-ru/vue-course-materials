import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
  template: `
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>`,

  props: {
    items: {
      type: Array,
      required: true
    },
  },
};

const ListContainer = {
  template: `<list-view :items="items" />`,

  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      this.items = [1, 2, 3];
    },
  },
};

const App = {
  template: `
    <div>
      <list-container />
    </div>`,

  components: {
    ListContainer,
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
