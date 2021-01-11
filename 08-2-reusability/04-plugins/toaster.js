import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import AppToast from './AppToast.js';

const container = document.createElement('div');
document.body.appendChild(container);

export const toaster = new Vue(AppToast).$mount(container);
