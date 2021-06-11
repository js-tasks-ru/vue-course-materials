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

const ListViewWithSlots = {
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
      <slot name="form" :add="addNewItem" :new-item-value="newItemValue" :update-new-item-value="(value) => newItemValue = value">
        <form @submit.prevent="handleSubmit">
          <input v-model="newItemValue" />
        </form>
      </slot>
      <ul>
        <li v-for="(item, index) in localItems">
          <slot name="item" :item="item" :remove-item="() => remove(index)" :index="index">
            <span>{{ item }}</span>
            <button @click="remove(index)">x</button>
          </slot>
        </li>
      </ul>
    </div>`,
};

const App = {
  components: {
    ListView,
    ListViewWithSlots,
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

      <hr>

      <h3>ListView with scoped slots</h3>
      <list-view-with-slots :items.sync="list">

        <template #form="{ add, newItemValue, updateNewItemValue }">
          <form @submit.prevent="add()">
            <input :value="newItemValue" @input="updateNewItemValue($event.target.value)" />
          </form>
        </template>

        <template #item="{ item, index, removeItem }">
          <a href="#" @click="removeItem">{{ item }}</a>
        </template>

      </list-view-with-slots>
    </div>`,
};

const app = new Vue(App).$mount('#app');
