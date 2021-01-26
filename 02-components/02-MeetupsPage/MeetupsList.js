import { MeetupListItem } from './MeetupsListItem.js';

export const MeetupsList = {
  name: 'MeetupsList',

  template: `
    <div class="meetups-list fade-list">
      <meetup-list-item v-for="meetup in meetups" :meetup="meetup" :key="meetup.id" />
    </div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  components: {
    MeetupListItem,
  },
};
