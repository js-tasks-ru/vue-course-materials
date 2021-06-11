import { ref } from './vendor/vue3.esm-browser.js';

export default {
  name: 'TheToaster',

  setup() {
    const toast = ref(null);

    const success = (message) => {
      toast.value = message;
      setTimeout(() => {
        toast.value = null;
      }, 2000);
    };

    return {
      success,
      toast,
    };
  },

  template: `
    <div class="toasts">
      <div v-if="toast" class="toast toast_success">
        <span>{{ toast }}</span>
      </div>
    </div>`,
};
