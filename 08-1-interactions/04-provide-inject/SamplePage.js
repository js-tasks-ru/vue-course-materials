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
      <button @click="toast">Toast</button>
    </div>`,

  components: {},

  inject: {
    config: 'config',
    toaster: 'toaster',
    // toasterSuccess: 'toasterSuccess',
  },

  methods: {
    toast() {
      this.toaster.success(this.config.API_URL);
      // this.toasterSuccess(this.config.API_URL);
    },
  },
};
