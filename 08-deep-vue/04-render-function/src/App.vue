<template>
  <fieldset-component>
    <text-div />
    <counter-button v-model="count" />
  </fieldset-component>
</template>

<script>
import FieldsetComponent from './FieldsetComponent';
import TextDiv from '@/TextDiv';
import CounterButton from '@/CounterButton';

export default {
  name: 'App',

  components: { CounterButton, TextDiv, FieldsetComponent },

  data() {
    return {
      count: 0,
    };
  },
};
</script>
