import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { MeetupsPage } from './MeetupsPage.js';

export const App = new Vue({
  template: `<div id="app"><meetups-page /></div>`,

  components: { MeetupsPage }
}).$mount('#app');
