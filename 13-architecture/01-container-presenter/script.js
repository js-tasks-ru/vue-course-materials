import Vue from './vendor/vue.esm.browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const MeetupsView = {
  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul>
      <li v-for="meetup in meetups" :key="meetup.id">{{ meetup.title }}</li>
    </ul>`,
};

const MeetupsPage = {
  components: { MeetupsView },

  data() {
    return {
      meetups: [],
    };
  },

  mounted() {
    fetch(`${API_URL}/meetups`)
      .then((res) => res.json())
      .then((meetups) => {
        this.meetups = meetups;
      });
  },

  template: `<meetups-view :meetups="meetups" />`,
};

const App = {
  components: {
    MeetupsPage,
  },

  template: `
    <div id="app" class="page container">
      <meetups-page />
    </div>`,
};

new Vue(App).$mount('#app');
