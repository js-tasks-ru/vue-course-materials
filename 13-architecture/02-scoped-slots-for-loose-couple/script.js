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
  components: { MeetupsView, MeetupsFilters },

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
      <meetups-filters :filter.sync="filter" />
      <meetups-view v-if="meetups" :meetups="filteredMeetups"/>
    </div>`,
};

const App = {
  components: { MeetupsPage },

  template: `
    <div id="app" class="page container">
      <meetups-page />
    </div>`,
};

new Vue(App).$mount('#app');
