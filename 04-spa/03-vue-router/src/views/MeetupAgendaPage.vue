<template>
  <div>{{ meetup.agenda.length }}</div>
</template>

<script>
export default {
  name: 'MeetupAgendaPage',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
