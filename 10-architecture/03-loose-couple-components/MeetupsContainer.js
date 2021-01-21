import meetups from './meetups-data.js';

function getMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetups);
    }, 1000);
  });
}

export const MeetupsContainer = {
  template: `
    <div>
      <div class="filters">
        <slot name="filters" :filter="filter" :updateFilter="(value) => filter = value" />
      </div>
      <div class="meetups-view">
        <slot name="view" :meetups="filteredMeetups" />
      </div>
    </div>`,

  data() {
    return {
      filter: '',
      meetups: [],
    };
  },

  mounted() {
    getMeetups().then((meetups) => {
      this.meetups = meetups;
    });
  },

  computed: {
    filteredMeetups() {
      return this.meetups.filter((meetup) =>
        meetup.title.includes(this.filter),
      );
    },
  },
};
