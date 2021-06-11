import Vue from './vendor/vue.esm.browser.js';

let lastId = 0;
const genId = () => ++lastId;

const debug = false;

const AppInput = {
  model: {
    prop: 'value',
    event: 'input',
  },

  props: ['value', 'code'],

  methods: {
    log(s) {
      if (debug) {
        console.log(s);
      }
    },
  },

  template: `<div>
    {{ log('AppInput ' + code) }}
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>`,
};

const FormGroup = {
  props: ['code'],

  methods: {
    log(s) {
      if (debug) {
        console.log(s);
      }
    },
  },

  template: `<div>
    {{ log('FormGroup ' + code) }}
    <label>Form Group:</label><br />
    <slot />
  </div>`,
};

const App = {
  components: {
    FormGroup,
    AppInput,
  },

  data() {
    const count = 2;
    // const count = 5000;
    return {
      inputs: Array.from(Array(count), () => ({ value: '', id: genId() })),
    };
  },

  methods: {
    log(s) {
      if (debug) {
        console.log(s);
      }
    },
  },

  template: `
    <div>
      {{ log('App') }}
      <form-group v-for="input in inputs" :key="input.id" :code="input.id">
        <template #default>
          <app-input v-model="input.value" :code="input.id" />
        </template>
      </form-group>
    </div>`,
};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
