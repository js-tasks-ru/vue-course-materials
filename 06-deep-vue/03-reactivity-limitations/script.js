import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

let lastId = 0;
const genId = () => ++lastId;

const App = {
  template: `
    <main style="text-align: center">
      <button @click="updateItemByKey">updateItemByKey</button>
      <button @click="updateItemWithSplice">updateItemWithSplice</button>
      <button @click="updateItemValueByArrayKey">updateItemValueByArrayKey</button>
      <button @click="updateItemWithSet">updateItemWithSet</button>
      <button @click="addNewKey">addNewKey</button>
      <button @click="addNewKeyWithReassign">addNewKeyWithReassign</button>
      <button @click="addNewKeyWithSet">addNewKeyWithSet</button>
      <hr />
      <p v-for="item in items" :key="item.id">{{ item }}</p>
      <hr />
      <p>{{ obj }}</p>
    </main>`,

  data() {
    return {
      items: [
        {
          id: genId(),
          value: 'a',
        },
        {
          id: genId(),
          value: 'b',
        },
      ],
      obj: {
        value: 'c',
      },
    };
  },

  methods: {
    updateItemByKey() {
      this.items[0] = {
        id: genId(),
        value: this.items[0].value + '!',
      };
    },

    updateItemWithSplice() {
      this.items.splice(0, 1, {
        id: genId(),
        value: this.items[0].value + '!',
      });
    },

    updateItemValueByArrayKey() {
      this.items[0].value += '!';
    },

    updateItemWithSet() {
      // Vue.set === this.$set
      const newValue = {
        id: genId(),
        value: this.items[0].value + '!',
      };
      this.$set(this.items, 0, newValue);
    },

    addNewKey() {
      this.obj.newKey = 'New Value';
    },

    addNewKeyWithReassign() {
      // Сработает ?
      // this.obj = Object.assign(this.obj, {
      //   newKey: 'New Value 2',
      // });

      this.obj = {
        ...this.obj,
        newKey: 'New Value 2',
      };

      // Сработает ?
      // this.obj = Object.assign({}, this.obj, {
      //   newKey: 'New Value 2',
      // });
    },

    addNewKeyWithSet() {
      this.$set(this.obj, 'newKey', 'New Value');
      // this.$set(this.items[0], 'newKey', 'New Value') -- не сработает
    },
  },
};

new Vue(App).$mount('#app');
