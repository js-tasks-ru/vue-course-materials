import { createApp, inject } from './vue3.esm-browser.js';
import AppToast from './AppToast.js';

export const TOASTER = 'toaster';

export function useToasterContext() {
  const { success } = inject(TOASTER);
  return {
    success,
  };
}

export const ToasterPlugin = {
  install(app, options = {}) {
    let { container } = options;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }
    const toaster = createApp(AppToast).mount(container);
    app.provide(TOASTER, toaster);
  },
};
