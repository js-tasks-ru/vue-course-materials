import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { MeetupsContainer } from './MeetupsContainer.js';
import { MeetupsFilters } from './MeetupsFilters.js';
import { MeetupsView } from './MeetupsView.js';

export const App = new Vue({
  template: `
    <div id="app">
      <meetups-container>
        <template #filters="{ filter, updateFilter }">
          <meetups-filters :filter="filter" @update:filter="updateFilter" />
        </template>

        <template #view="{ meetups }">
          <meetups-view :meetups="meetups" />
        </template>
      </meetups-container>
    </div>`,

  components: { MeetupsContainer, MeetupsFilters, MeetupsView },
}).$mount('#app');
