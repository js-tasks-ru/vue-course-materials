import { MeetupsList } from './MeetupsList.js';
import { MeetupsCalendar } from './MeetupsCalendar.js';
import { PageTabs } from './PageTabs.js';
import { FormCheck } from './FormCheck.js';
import { AppEmpty } from './AppEmpty.js';

const fetchMeetups = () =>
  fetch('./api/meetups.json').then((res) => res.json());

export const MeetupsPage = {
  name: 'MeetupsPage',

  template: `
    <div class="container">
      <div class="filters-panel">
        <div class="filters-panel__col">
          <form-check v-model="filter.date" :options="$options.dateFilterOptions" name="date" />
        </div>

        <div class="filters-panel__col">
          <div class="form-group form-group_inline">
            <div class="input-group input-group_icon input-group_icon-left">
              <img class="icon" alt="icon" src="../../assets/icons/icon-search.svg" />
              <input
                ref="input-element"
                id="filters-panel__search"
                class="form-control form-control_rounded form-control_sm"
                type="text"
                v-model="filter.search"
                placeholder="Поиск"
              />
            </div>
          </div>
          <div class="form-group form-group_inline">
            <page-tabs :selected.sync="view" />
          </div>
        </div>
      </div>

      <template v-if="filteredMeetups.length">
        <meetups-list v-if="view === 'list'" :meetups="filteredMeetups" />
        <meetups-calendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" />
      </template>
      <app-empty v-else>Митапов по заданным условиям не найдено...</app-empty>
    </div>`,

  dateFilterOptions: [
    { text: 'Все', value: 'all' },
    { text: 'Прошедшие', value: 'past' },
    { text: 'Ожидаемые', value: 'future' },
  ],

  components: {
    MeetupsList,
    MeetupsCalendar,
    PageTabs,
    FormCheck,
    AppEmpty,
  },

  data() {
    return {
      rawMeetups: [],
      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  async mounted() {
    this.rawMeetups = await fetchMeetups();
  },

  computed: {
    meetups() {
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        cover: meetup.imageId
          ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
          : undefined,
        date: new Date(meetup.date),
        localDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T')[0],
      }));
    },

    filteredMeetups() {
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
};
