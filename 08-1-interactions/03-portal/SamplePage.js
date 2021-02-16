import AppToast from './AppToast.js';
import { Portal } from './portal-vue.esm.min.js';

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
      <portal to="root-end">
        <app-toast ref="localToaster" />
      </portal>
      <button @click="localToast">Local Toast</button>
  </div>`,

  components: {
    AppToast,
    Portal,
  },

  methods: {
    localToast() {
      this.$refs['localToaster'].success('Toast');
    },
  },
};
