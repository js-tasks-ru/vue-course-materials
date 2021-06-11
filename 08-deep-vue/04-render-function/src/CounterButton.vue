<!--<template>
  <button @click="$emit('change', count + 1)">{{ count }}</button>
</template>-->

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

  /*render(h) {
    return h(
      'button',
      {
        on: {
          click: () => {
            this.$emit('change', this.count + 1);
          },
        },
      },
      this.count,
    );
  },*/
  render(h) {
    return (
      <button vOn:click={() => this.$emit('change', this.count + 1)}>
        {this.count}
      </button>
    );
  },
};
</script>
