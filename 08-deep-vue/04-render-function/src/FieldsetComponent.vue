<!--<template>
  <fieldset>
    <slot />
  </fieldset>
</template>-->

<script>
export default {
  name: 'FieldsetComponent',

  /*render(h) {
    return h('fieldset', this.$slots.default);
  },*/
  render(h) {
    return <fieldset>{this.$slots.default}</fieldset>;
  },
};
</script>
