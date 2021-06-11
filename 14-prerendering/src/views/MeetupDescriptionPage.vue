<template>
  <div>{{ meetup.description }}</div>
</template>

<script>
export default {
  name: 'MeetupDescriptionPage',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
