import Vue from './vendor/vue.esm.browser.js';

// Имитируем API, запрашиваем данные с JSON файла
const fetchMeetups = () =>
  fetch('./api/meetups.json').then((res) => res.json());

const app = new Vue({
  data() {
    return {
      rawMeetups: null,filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  mounted() {
    fetchMeetups().then((meetups) => {
      this.rawMeetups = meetups;
    });
  },

  computed: {
    meetups() {
      if (!this.rawMeetups) {
        return null;
      }

      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        date: new Date(meetup.date),
        cover: meetup.imageId && `https://course-vue.javascript.ru/api/images/${meetup.imageId}`,
        coverStyle: meetup.imageId && { '--bg-url': `url(https://course-vue.javascript.ru/api/images/${meetup.imageId})` },
        localeDate: this.formatDate(meetup.date),
        dateOnlyString: new Date(meetup.date).toISOString().substr(10),
      }));
    },

    filteredMeetups() {
      if (!this.meetups) {
        return null;
      }

      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter(
        (meetup) =>
          dateFilter(meetup) &&
          participationFilter(meetup) &&
          searchFilter(meetup),
      );
    },
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

  template: `#app`,
});

app.$mount('#app');
