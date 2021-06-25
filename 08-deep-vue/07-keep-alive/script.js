import Vue from './vendor/vue.esm.browser.js';

const MeetupsList = {
  props: {
    meetups: Array,
  },

  template: `<div>
    <h2>Список митапов</h2>
    <p>Всего митапов: {{ meetups.length }}</p>
  </div>`,
};

const MeetupsCalendar = {
  props: {
    meetups: Array,
  },

  data() {
    return {
      month: 1,
    };
  },

  methods: {
    nextMonth() {
      this.month += 1;
    },
  },

  template: `<div>
    <h2>Календарь митапов</h2>
    <h3>Месяц: {{ month }} <button @click="nextMonth">Следующий месяц</button></h3>
    <p>Всего митапов: {{ meetups.length }}</p>
  </div>`,
};

const App = {
  components: {
    MeetupsList,
    MeetupsCalendar,
  },

  data() {
    return {
      view: 'list',
      meetups: ['a', 'b'],
    };
  },

  computed: {
    viewComponent() {
      return this.view === 'list' ? 'MeetupsList' : 'MeetupsCalendar';
    },
  },

  template: `<div>
    <p><label><input v-model="view" type="radio" value="list"> Список</label></p>
    <p><label><input v-model="view" type="radio" value="calendar"> Календарь</label></p>/>
    <component :is="viewComponent" :meetups="meetups"/>
  </div>`,
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
