import TheToaster from './TheToaster.js';

export const ToasterPlugin = {
  install(Vue, options = {}) {
    let { container } = options;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }

    const toaster = new Vue(TheToaster).$mount(container);

    Vue.prototype.$toaster = toaster;
    Vue.component('the-toaster', TheToaster);
    Vue.mixin({
      methods: {
        $toasterSuccess: toaster.success,
      },
    });
  },
};
