export default {
  name: 'SamplePage',

  inject: {
    config: 'config',
    toaster: 'toaster',
  },

  methods: {
    toast() {
      this.toaster.success(this.config.API_URL);
    },
  },

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
};
