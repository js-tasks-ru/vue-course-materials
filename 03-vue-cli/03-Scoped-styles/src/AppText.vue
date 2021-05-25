<template>
  <span class="root">
    <span class="deep">{{ text }}</span>
  </span>
</template>

<script>
export default {
  name: 'AppText',
  props: ['text'],
};
</script>

<style scoped></style>
