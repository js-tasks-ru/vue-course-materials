<template>
  <div class="meetups-calendar">Calendar</div>
</template>

<script>
export default {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
