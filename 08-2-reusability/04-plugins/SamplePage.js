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
      <button @click="prototypeToast">prototypeToast</button>
    </div>`,

  methods: {
    prototypeToast() {
      this.$toaster.success('prototypeToast');
      this.$toasterSuccess('Success from global mixin');
    },
  },
};
