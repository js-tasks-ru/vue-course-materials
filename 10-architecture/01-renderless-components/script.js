import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
  template: `
    <div>
      <form @submit.prevent="handleSubmit">
        <input v-model="newItemValue" />
        <button>Add</button>
      </form>
      <ul>
        <li v-for="(item, idx) in items_">
          <span>{{ item }}</span>
          <button @click="remove(idx)">x</button>
        </li>
      </ul>
    </div>`,

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

const ListViewWithSlots = {
  template: `
    <div>
      <slot
        name="form"
        :add="addNewItem"
        :newItemValue="newItemValue"
        :updateNewItemValue="(value) => { newItemValue = value }"
      >
        <form @submit.prevent="handleSubmit">
          <input v-model="newItemValue" />
          <button>Add</button>
        </form>
      </slot>
      <ul>
        <li v-for="(item, idx) in items_">
          <slot name="item" :item="item" :removeItem="() => remove(idx)" :idx="idx">
            <span>{{ item }}</span>
            <button @click="remove(idx)">x</button>
          </slot>
        </li>
      </ul>
    </div>`,

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

const RenderlessListView = {
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

  render() {
    return this.$scopedSlots.default({
      items: this.items_,
      newItemValue: this.newItemValue,
      updateNewItemValue: (value) => {
        this.newItemValue = value;
      },
      add: this.addNewItem,
      remove: this.remove,
    });
  },
};

const RenderlessListView = {
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

  render() {
    return this.$scopedSlots.default({
      items: this.items_,
      newItemValue: this.newItemValue,
      updateNewItemValue: (value) => {
        this.newItemValue = value;
      },
      add: this.addNewItem,
      remove: this.remove,
    });
  },
};


const App = {
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

        <template #item="{ item, idx, removeItem }">
          <a href="#" @click="removeItem">{{ item }}</a>
        </template>

      </list-view-with-slots>

      <hr>

      <h3>Renderless List View</h3>
      <renderless-list-view
        :items.sync="list"
        v-slot="{ items, newItemValue, updateNewItemValue, add, remove }"
      >
        <div>
          <p>
            <a v-for="(item, index) in items" :key="item" @click="remove(index)">
              {{ item }}
            </a>
          </p>
          <form @submit.prevent="add">
            <input :value="newItemValue" @change="updateNewItemValue($event.target.value)" />
          </form>
        </div>
      </renderless-list-view>
    </div>`,

  components: {
    ListView,
    ListViewWithSlots,
    RenderlessListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};

const app = new Vue(App).$mount('#app');
