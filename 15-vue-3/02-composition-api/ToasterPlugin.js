import { createApp, inject } from './vendor/vue3.esm-browser.js';
import TheToaster from './TheToaster.js';

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
    const toaster = createApp(TheToaster).mount(container);
    app.provide(TOASTER, toaster);
  },
};
