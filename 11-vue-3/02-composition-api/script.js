import { createApp } from './vue3.esm-browser.js';
import { App } from './App.js';
import { ToasterPlugin } from './ToasterPlugin.js';

createApp(App)
  .provide('config', {
    API_URL: 'https://course-vue.javascript.ru/api',
  })
  .use(ToasterPlugin)
  .mount('#app');
