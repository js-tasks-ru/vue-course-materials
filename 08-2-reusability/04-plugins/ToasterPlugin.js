import AppToast from './AppToast.js';

export const ToasterPlugin = {
  install(Vue, options = {}) {
    let { container } = options;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }

    const toaster = new Vue(AppToast).$mount(container);
    Vue.prototype.$toaster = toaster;
    Vue.component('app-toast', AppToast);
    Vue.mixin({
      methods: {
        $toasterSuccess: toaster.success,
      },
    });
  },
};
