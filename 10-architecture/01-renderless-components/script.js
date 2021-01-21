import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
  template: `
    <ul>
      <form @submit.prevent="handleSubmit">
        <input v-model="newItemValue" />
        <button>Add</button>
      </form>
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
      newItemValue: '',
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(newItemValue) {
        this.items_ = [...newItemValue];
      },
    },
  },

  methods: {
    handleSubmit() {
      this.addNewItem();
    },

    addNewItem() {
      this.items_.push(this.newItemValue);
      this.newItemValue = '';
      this.$emit('update:items', [...this.items_]);
    },

    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('update:items', [...this.items_]);
    },
  },
}

const ListViewWithSlots = {
  template: `
    <ul>
      <slot name="form" :add="addNewItem">
        <form @submit.prevent="handleSubmit">
          <input v-model="newItemValue" />
        </form>
      </slot>

      <li v-for="(item, idx) in items_">
        <slot name="item" :item="item" :removeItem="() => remove(idx)" :idx="idx">
          <span>{{ item }}</span>
          <button @click="remove(idx)">x</button>
        </slot>
      </li>
    </ul>`,

  props: {
    items: Array,
  },

  data() {
    return {
      items_: [],
      newItemValue: '',
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(newItemValue) {
        this.items_ = [...newItemValue];
      },
    },
  },

  methods: {
    handleSubmit() {
      this.addNewItem();
    },

    addNewItem() {
      this.items_.push(this.newItemValue);
      this.newItemValue = '';
      this.$emit('update:items', [...this.items_]);
    },

    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('update:items', [...this.items_]);
    },
  },
};

const App = {
  template: `
    <div>
      <h3>ListView</h3>
      <list-view :items.sync="list" />

      <hr>

      <h3>ListView with scoped slots</h3>
      <list-view :items.sync="list">

        <template #form="{ add }">
          <form @submit="add()">
            <input v-model="newItemValue" />
          </form>
        </template>

        <template #default="{ item, idx, removeItem }">
          <a href="#" @click="removeItem">{{ item }}</a>
        </template>

      </list-view>
    </div>`,

  components: {
    ListView,
    ListViewWithSlots,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};

const app = new Vue(App).$mount('#app');
