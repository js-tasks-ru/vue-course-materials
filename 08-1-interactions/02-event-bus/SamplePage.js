import AppToast from './AppToast.js';
import { ToastEventBus } from './ToastEventBus.js';
import { ToastEmitter } from './ToastEmitter.js';

export default {
  name: 'SamplePage',

  template: `
    <div style="position: relative;
        border: 1px solid;
        background: #efefef;
        padding: 15px;
        width: 500px;
        height: 500px;"
    >
      <app-toast ref="localToaster" />
      <button @click="localToast">Local Toast</button>
      <button @click="rootToast">Root Toast</button>
      <button @click="busToast">EventBus Toast</button>
      <button @click="emitterToaster">Mitt Toast</button>
    </div>`,

  components: { AppToast },

  methods: {
    localToast() {
      this.$refs['localToaster'].success('Toast');
    },

    rootToast() {
      this.$root.$emit('toaster:success', 'Root Toast');
    },

    busToast() {
      ToastEventBus.$emit('success', 'Event Bus Toast');
    },

    emitterToaster() {
      ToastEmitter.emit('success', 'Toast from Mitt');
    },
  },
};
