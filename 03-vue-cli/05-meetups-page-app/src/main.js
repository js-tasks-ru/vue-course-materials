import Vue from 'vue';
import App from './App.vue';

// Общие стили приложения, не являющиеся стилями конкретных компонентов
import '@/assets/styles/app.css';

// Стили форм (позже будет отдельный компонент)
import '@/assets/styles/_forms.css';

// Стили MeetupInfo (компонент реализуется в задачах)
import '@/assets/styles/_lists.css';

// Выключаем уведомление о том, что используется development версия Vue
// Со сборкой версия будет определяться режимом сборки
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
