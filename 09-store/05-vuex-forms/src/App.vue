<template>
  <div class="wrapper page container">
    <meetup-form v-if="$store.state['form'].meetup" />
  </div>
</template>

<script>
import MeetupForm from './components/MeetupForm';

export default {
  name: 'App',

  components: {
    MeetupForm,
  },

  created() {
    if (!this.$store.state['form'].meetup) {
      this.$store.commit('form/SET_MEETUP', {
        id: null,
        title: '',
        description: '',
        imageId: null,
        date: new Date(),
        place: '',
        agenda: [],
      })
    }
  }
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
