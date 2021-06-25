import Vue from './vendor/vue.esm.browser.js';
import TheToaster from './TheToaster.js';

const container = document.createElement('div');
document.body.appendChild(container);

export const toaster = new Vue(TheToaster).$mount(container);
