export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div>Calendar</div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
