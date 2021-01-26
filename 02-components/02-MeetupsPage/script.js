import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const fetchMeetups = () =>
  fetch('./api/meetups.json').then((res) => res.json());

const app = new Vue({
  template: `#app`,

  data() {
    return {
      rawMeetups: null,
      filter: {
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
        cover: meetup.imageId
          ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
          : null,
        coverStyle: meetup.imageId
          ? {
              '--bg-url': `url(https://course-vue.javascript.ru/api/images/${meetup.imageId})`,
            }
          : undefined,
        localDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T')[0],
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
});

app.$mount('#app');
