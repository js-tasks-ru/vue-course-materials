export const MeetupsFilters = {
  template: `<input :value="filter" @input="$emit('update:filter', $event.target.value)">`,

  props: {
    filter: {
      type: String,
      required: true,
    },
  },
};
