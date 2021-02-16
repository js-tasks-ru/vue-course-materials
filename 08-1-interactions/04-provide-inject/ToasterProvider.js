import AppToast from './AppToast.js';

export const ToasterProvider = {
  template: `
    <div>
      <slot />
      <app-toast ref="toaster" />
    </div>`,

  components: { AppToast },

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
};
