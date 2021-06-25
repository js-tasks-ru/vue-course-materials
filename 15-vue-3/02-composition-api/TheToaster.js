export default {
  name: 'TheToaster',

  data() {
    return {
      toast: null,
    };
  },

  methods: {
    success(message) {
      this.toast = message;
      setTimeout(() => {
        this.toast = null;
      }, 2000);
    },
  },

  template: `
    <div class="toasts">
      <div v-if="toast" class="toast toast_success">
        <span>{{ toast }}</span>
      </div>
    </div>`,
};
