export default {
  name: 'SamplePage',

  methods: {
    toast() {
      this.$toaster.success('Toast');
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
