import {
  computed,
  onMounted,
  ref,
  inject,
} from '../vendor/vue3.esm-browser.js';

export function useMeetupsFetch() {
  const { API_URL } = inject('config');

  const rawMeetups = ref(null);

  const meetups = computed(
    () =>
      rawMeetups.value &&
      rawMeetups.value.map((meetup) => ({
        ...meetup,
        cover: meetup.imageId
          ? `${API_URL}/images/${meetup.imageId}`
          : undefined,
        localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T')[0],
      })),
  );

  onMounted(() => {
    fetch('./api/meetups.json')
      .then((res) => res.json())
      .then((meetups) => {
        rawMeetups.value = meetups;
      });
  });

  return {
    meetups,
  };
}
