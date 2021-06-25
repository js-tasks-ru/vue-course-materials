const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `<div>Календарь</div>`,
};

export default MeetupsCalendar;
