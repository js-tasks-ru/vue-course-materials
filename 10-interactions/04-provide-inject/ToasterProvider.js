import TheToaster from './TheToaster.js';

export default {
  components: { TheToaster },

  provide() {
    return {
      toaster: {
        success: this.success,
      },
    };
  },

  methods: {
    success(message) {
      this.$refs['toaster'].success(message);
    },
  },

  template: `
    <div>
      <slot />
      <the-toaster ref="toaster" />
    </div>`,
};
