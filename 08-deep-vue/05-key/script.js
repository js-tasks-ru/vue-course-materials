import Vue from './vendor/vue.esm.browser.js';

let lastId = 0;
const genId = () => ++lastId;

const ListItem = {
  props: ['item'],

  data() {
    return {
      // Значение определяется входным параметром лишь на инициализации
      // Обновление входного параметра не приводит к обновлению значения в компоненте
      value: this.item.value,
    };
  },

  template: '<div>{{ value }}</div>',

  // Свойства поля ввода не привязаны к состоянию, не будут меняться
  // template: '<div><input /></div>',
};

const CounterButton = {
  data() {
    return {
      count: 0,
    };
  },

  template: `<button @click="count += 1">{{ count }}</button>`,
};

const App = {
  components: {
    ListItem,
    CounterButton,
  },

  data() {
    return {
      list: [
        { id: genId(), value: 'a' },
        { id: genId(), value: 'b' },
        { id: genId(), value: 'c' },
      ],
      key: 'key',
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

      <hr>

      <input v-model="key" /> <counter-button :key="key" />
    </div>`,
};

new Vue(App).$mount('#app');
