<template>
  <div id="app" class="page wrapper container">
    <app-input v-model="value" placeholder="Text" @blur="handleBlur">
      <template #left-icon v-if="showIcon">
        <app-icon icon="search" />
      </template>
    </app-input>
    <button @click="showIcon = !showIcon">Toggle Icon</button>
    <hr />
    {{ value }}
  </div>
</template>

<script>
import AppInput from './components/AppInput';
import AppIcon from './components/AppIcon';

export default {
  name: 'App',

  components: { AppIcon, AppInput },

  data() {
    return {
      value: 'Initial Text',
      showIcon: true,
    };
  },

  methods: {
    handleBlur() {
      console.log('Blur');
    },
  },
};
</script>

<style scoped></style>
