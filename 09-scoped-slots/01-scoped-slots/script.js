import Vue from './vendor/vue.esm.browser.js';

const ListView = {
  props: {
    items: Array,
  },

  data() {
    return {
      localItems: [],
      newItemValue: '',
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(newItemValue) {
        this.localItems = [...newItemValue];
      },
    },
  },

  methods: {
    handleSubmit() {
      this.addNewItem();
    },

    addNewItem() {
      this.localItems.push(this.newItemValue);
      this.newItemValue = '';
      this.$emit('update:items', [...this.localItems]);
    },

    remove(index) {
      this.localItems.splice(index, 1);
      this.$emit('update:items', [...this.localItems]);
    },
  },

  template: `
    <div>
      <form @submit.prevent="handleSubmit">
        <input v-model="newItemValue" />
        <button>Add</button>
      </form>
      <ul>
        <li v-for="(item, index) in localItems">
          <span>{{ item }}</span>
          <button @click="remove(index)">x</button>
        </li>
      </ul>
    </div>`,
};

const App = {
  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },

  template: `
    <div>
      <h3>ListView</h3>
      <list-view :items.sync="list" />
    </div>`,
};

new Vue(App).$mount('#app');
