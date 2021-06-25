<template>
  <div class="wrapper page container">
    <meetup-form :meetup="meetup" />
  </div>
</template>

<script>
import MeetupForm from './components/MeetupForm';

function createMeetup() {
  return {
    id: null,
    title: '',
    description: '',
    imageId: null,
    date: new Date(),
    place: '',
    agenda: [],
  };
}

export default {
  name: 'SamplePage',

  components: {
    MeetupForm,
  },

  data() {
    return {
      meetup: createMeetup(),
    };
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
