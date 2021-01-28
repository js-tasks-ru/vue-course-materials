import { computed, reactive, toRefs } from '../vue3.esm-browser.js';

export function useMeetupsFilters(meetups) {
  const state = reactive({
    filter: {
      date: 'all',
      participation: 'all',
      search: '',
    },
  });

  const filteredMeetups = computed(() => {
    const dateFilter = (meetup) =>
      state.filter.date === 'all' ||
      (state.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
      (state.filter.date === 'future' && new Date(meetup.date) > new Date());

    const participationFilter = (meetup) =>
      state.filter.participation === 'all' ||
      (state.filter.participation === 'organizing' && meetup.organizing) ||
      (state.filter.participation === 'attending' && meetup.attending);

    const searchFilter = (meetup) =>
      [meetup.title, meetup.description, meetup.place, meetup.organizer]
        .join(' ')
        .toLowerCase()
        .includes(state.filter.search.toLowerCase());

    return meetups.value.filter(
      (meetup) =>
        dateFilter(meetup) &&
        participationFilter(meetup) &&
        searchFilter(meetup),
    );
  });

  return {
    ...toRefs(state),
    filteredMeetups,
  };
}
