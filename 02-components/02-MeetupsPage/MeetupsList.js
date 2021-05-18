import MeetupListItem from './MeetupsListItem.js';

const MeetupsList = {
  name: 'MeetupsList',

  components: {
    MeetupListItem,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `
    <div class="meetups-list fade-list">
      <meetup-list-item v-for="meetup in meetups" :meetup="meetup" :key="meetup.id" />
    </div>`,
};

export default MeetupsList;
