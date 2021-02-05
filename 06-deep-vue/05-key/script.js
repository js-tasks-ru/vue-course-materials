import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

let lastId = 0;
const genId = () => ++lastId;

const ListItem = {
  template: '<div>{{ value }}</div>',
  // template: '<div><input :placeholder="item.value"></div>',

  props: ['item'],

  data() {
    return {
      value: this.item.value,
    };
  },
};

const App = {
  template: `
    <div>
      <div style="display: flex">
        <fieldset>
          <legend>Without key</legend>
          <list-item v-for="item in list" :item="item" />
        </fieldset>

        <fieldset>
          <legend>With INDEX key</legend>
          <list-item v-for="(item, index) in list" :key="index" :item="item" />
        </fieldset>

        <fieldset>
          <legend>With REAL key</legend>
          <list-item v-for="(item, index) in list" :key="item.id" :item="item" />
        </fieldset>
      </div>
      <hr />
      <button type="button" @click="rotateList">Rotate List</button>
      <button type="button" @click="unshiftList">Unshift List</button>
    </div>`,

  components: {
    ListItem,
  },

  data() {
    return {
      list: [
        { id: genId(), value: 'a' },
        { id: genId(), value: 'b' },
        { id: genId(), value: 'c' },
      ],
    };
  },

  methods: {
    rotateList() {
      this.list = this.list.slice(1).concat(this.list[0]);
    },

    unshiftList() {
      this.list.unshift({ id: genId(), value: 'NEW' });
    },
  },
};

new Vue(App).$mount('#app');
