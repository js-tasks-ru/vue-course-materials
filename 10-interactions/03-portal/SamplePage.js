import TheToaster from './TheToaster.js';

export default {
  name: 'SamplePage',

  components: { TheToaster },

  methods: {
    localToast() {
      this.$refs['localToaster'].success('Toast');
    },
  },

  template: `
    <div style="position: relative;
      border: 1px solid;
      background: #efefef;
      padding: 15px;
      width: 500px;
      height: 500px;"
    >
      <the-toaster ref="localToaster" />
      <button @click="localToast">Local Toast</button>
  </div>`,
};
