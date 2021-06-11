<template>
  <div class="form-check">
    <div
      v-for="option in options"
      :key="option.value"
      class="form-check__group"
    >
      <input
        class="form-check__input"
        type="radio"
        name="date"
        :value="option.value"
        :checked="option.value === value"
        @input="$emit('change', option.value)"
      />
      <label class="form-check__label">{{ option.text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormCheck',

  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
      default: () => Math.random().toString(),
    },
  },

  model: {
    prop: 'value',
    event: 'change',
  },
};
</script>

<style scoped></style>
