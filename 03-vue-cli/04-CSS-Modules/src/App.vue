<template>
  <div id="app">
    <button class="button">Обычная кнопка</button>
    <app-button>
      <app-text text="Кнопка компонент" />
    </app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppText from './AppText.vue';

export default {
  name: 'App.vue',
  components: { AppText, AppButton },
};
</script>

<style></style>
