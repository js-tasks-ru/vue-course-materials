<template>
  <div class="wrapper page container">
    <meetup-form :meetup.sync="meetup" />
    <hr />
    <button @click="updateMeetup">Update Meetup</button>
    <pre><code>{{ meetup }}</code></pre>
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

  methods: {
    updateMeetup() {
      this.meetup.title += '!';
      if (this.meetup.agenda.length) {
        this.meetup.agenda[0].title += '!';
      }
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
