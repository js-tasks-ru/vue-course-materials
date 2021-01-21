import { MeetupsFilters } from './MeetupsFilters.js';
import { MeetupsView } from './MeetupsView.js';
import meetups from './meetups-data.js';

function getMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetups);
    }, 1000);
  })
}

export const MeetupsPage = {
  template: `
    <div>
      <div class="filters">
        <meetups-filters :filter.sync="filter" />
      </div>
      <div class="meetups-view">
        <meetups-view v-if="meetups" :meetups="filteredMeetups"/>
      </div>
    </div>`,

  components: { MeetupsView, MeetupsFilters },

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
      return this.meetups.filter((meetup) => meetup.title.includes(this.filter));
    },
  },
};
