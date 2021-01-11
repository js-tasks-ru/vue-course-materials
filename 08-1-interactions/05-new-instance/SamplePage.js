import AppToast from './AppToast.js';

export default {
  name: 'SamplePage',

  template: `
    <div
      style="position: relative;
        border: 1px solid;
        background: #efefef;
        padding: 15px;
        width: 500px;
        height: 500px;"
    >
      <app-toast ref="localToaster" />
      <button @click="localToast">Local Toast</button>
    </div>`,

  components: { AppToast },

  methods: {
    localToast() {
      this.$refs['localToaster'].success('Toast');
    },
  },
};
