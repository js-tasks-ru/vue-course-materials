export const MeetupsView = {
  template: `
    <ul>
      <li v-for="meetup in meetups">{{ meetup.title }}</li>
    </ul>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
