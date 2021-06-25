<template>
  <button @click="$emit('change', count + 1)">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: Number,
  },

  model: {
    prop: 'count',
    event: 'change',
  },
};
</script>
