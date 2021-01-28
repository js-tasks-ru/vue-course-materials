import { ref } from './vue3.esm-browser.js';

export default {
  name: 'AppToast',

  template: `
    <div class="toasts">
      <div v-if="toast" class="toast toast_success">
        <span>{{ toast }}</span>
      </div>
    </div>`,

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
};
