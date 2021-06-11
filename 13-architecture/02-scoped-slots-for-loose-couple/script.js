import Vue from './vendor/vue.esm.browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const MeetupsFilters = {
  props: {
    filter: {
      type: String,
      required: true,
    },
  },

  template: `
    <div class="filters">
      <input :value="filter" @input="$emit('update:filter', $event.target.value)">
    </div>`,
};

const MeetupsView = {
  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `
    <div class="meetups-view">
      <ul>
        <li v-for="meetup in meetups" :key="meetup.id">{{ meetup.title }}</li>
      </ul>
    </div>`,
};

const MeetupsPage = {
  data() {
    return {
      filter: '',
      meetups: [],
    };
  },

  computed: {
    filteredMeetups() {
      return this.meetups.filter((meetup) =>
        meetup.title.includes(this.filter),
      );
    },
  },

  mounted() {
    fetch(`${API_URL}/meetups`)
      .then((res) => res.json())
      .then((meetups) => {
        this.meetups = meetups;
      });
  },

  template: `
    <div>
      <slot name="filters" :filter="filter" :updateFilter="(value) => filter = value" />
      <slot name="view" :meetups="filteredMeetups" />
    </div>`,
};

const App = {
  components: { MeetupsPage, MeetupsView, MeetupsFilters },

  template: `
    <div id="app" class="page container">

      <meetups-page>
        <template #filters="{ filter, updateFilter }">
          <meetups-filters :filter="filter" @update:filter="updateFilter" />
        </template>

        <template #view="{ meetups }">
          <meetups-view :meetups="meetups" />
        </template>

      </meetups-page>
    </div>`,
};

new Vue(App).$mount('#app');
