import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.js';

// Подулючаем Vuex как плагин к Vue
// Плагин добавит миксин, который добавит стор из опций компонента в this.$store
Vue.use(Vuex);

// Экспортируем глобальное хранилище
export default new Vuex.Store({
  // Строгий режим проверяет, что состояние не мутируется напрямую вне мутаций
  // Но это ресурсоёмкая проверка, она не нужна на проде
  strict: process.env.NODE_ENV !== 'production',

  // Всё хранилище разделяем на модули
  modules: {
    auth,
  },
});
