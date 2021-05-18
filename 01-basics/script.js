// Импортируем скачанную заранее версию Vue для разработки для запуска в браузере без сборщика как ECMAScript модуль
import Vue from './vendor/vue.esm.browser.js';

// Имитируем API, запрашиваем данные с JSON файла
const fetchMeetups = () =>
  fetch('./api/meetups.json').then((res) => res.json());

// Создаём новое Vue приложением через конструктор, передавая опции, описывающие приложение
const app = new Vue({
  // Реактивные данные приложения, его локальное состояние
  data() {
    return {
      hello: '<h1><b>world</b></h1>',
      rawMeetups: null,

      // filteredMeetups: null,
      // Вместо хранения отдельно начального списка и отдельно отфильтрованного
      // будем вычислять отфильтрованный на основе начального

      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  // Вычисляемые свойства позволяют получать свойства, значение которых автоматически вычисляется на основе других реактивных свойств
  computed: {
    meetups() {
      // На самом деле эта проверка не нужна, если мы не обращаемся к списку митапов, пока их нет
      if (!this.rawMeetups) {
        return null;
      }

      // Немного преобразуем данные, как нам будет удобно
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        date: new Date(meetup.date),
        cover: meetup.imageId && `https://course-vue.javascript.ru/api/images/${meetup.imageId}`,
        coverStyle: meetup.imageId && { '--bg-url': `url(https://course-vue.javascript.ru/api/images/${meetup.imageId})` },
        localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T')[0],
      }));
    },

    // Вычислим отфильтрованный список митапов
    filteredMeetups() {
      // На самом деле эта проверка не нужна, если мы не обращаемся к списку митапов, пока их нет
      if (!this.meetups) {
        return null;
      }

      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter(
        (meetup) =>
          dateFilter(meetup) &&
          participationFilter(meetup) &&
          searchFilter(meetup),
      );
    },
  },

  // Можно вручную отслеживать изменение реактивных данных
  watch: {
    // hello(newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // },
    // filter: {
    //   deep: true,
    //   handler() {
    //     this.filterMeetups();
    //   },
    // },
    // meetups: {
    //   deep: true,
    //   immediate: true,
    //   handler() {
    //     this.filterMeetups();
    //   },
    // },
  },

  // Как только приложение будет смонтировано - запрашиванием данные
  mounted() {
    fetchMeetups().then((meetups) => {
      this.rawMeetups = meetups;
    });
  },

  methods: {
    // Обработчики событий обычно лучше описывать отдельными методами, если они не совсем примитивные
    // handleInput(event) {
    //   this.filter.search = event.target.value;
    // },

    // Вместо вычисляемого свойства можно было бы использовать методы и вызывать их в шаблоне
    // Для форматирования - это нормально
    // Для больших вычислений - не оптимально и не декларативно
    formatDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

  // Шаблон в #app
  template: `#app`,
});

// Монтируем приложение
app.$mount('#app');
