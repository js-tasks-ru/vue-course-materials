export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `
    <div>Календарь</div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
