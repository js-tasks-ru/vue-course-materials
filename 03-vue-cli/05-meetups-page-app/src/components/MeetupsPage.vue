<template>
  <div class="container">
    <div class="filters-panel">
      <div class="filters-panel__col">
        <form-check v-model="filter.date" :options="$options.dateFilterOptions" name="date" />
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <div class="input-group input-group_icon input-group_icon-left">
            <app-icon icon="search" />
            <input
              id="filters-panel__search"
              class="form-control form-control_rounded form-control_sm"
              type="text"
              placeholder="Поиск"
              v-model="filter.search"
            />
          </div>
        </div>
        <div class="form-group form-group_inline">
          <page-tabs :selected.sync="view" />
        </div>
      </div>
    </div>

    <template v-if="filteredMeetups && filteredMeetups.length">
      <meetups-list v-if="view === 'list'" :meetups="filteredMeetups" key="list"></meetups-list>
      <meetups-calendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" key="calendar"></meetups-calendar>
    </template>
    <app-empty v-else>Митапов по заданным условиям не найдено...</app-empty>
  </div>
</template>

<script>
import { fetchMeetups, getImageUrlByImageId } from '@/data';
import MeetupsList from '@/components/MeetupsList';
import MeetupsCalendar from '@/components/MeetupsCalendar';
import PageTabs from '@/components/PageTabs';
import FormCheck from '@/components/FormCheck';
import AppEmpty from '@/components/AppEmpty';
import AppIcon from '@/components/AppIcon';

export default {
  name: 'MeetupsPage',

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
    AppIcon,
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

  mounted() {
    this.fetchMeetups();
  },

  computed: {
    meetups() {
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        cover: meetup.imageId ? getImageUrlByImageId(meetup.imageId) : undefined,
        coverStyle: meetup.imageId
          ? {
              '--bg-url': `url('${getImageUrlByImageId(meetup.imageId)}')`,
            }
          : {},
        date: new Date(meetup.date),
        localDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T'),
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

      return this.meetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },
  },

  methods: {
    async fetchMeetups() {
      this.rawMeetups = await fetchMeetups();
    },
  },
};
</script>

<style scoped>
.filters-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 32px 0;
}

.filters-panel__col {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

@media all and (max-width: 767px) {
  .filters-panel {
    flex-direction: column;
  }

  .filters-panel__col + .filters-panel__col {
    margin-top: 16px;
  }
}

@media all and (max-width: 480px) {
  #filters-panel__search {
    width: calc(100% - 112px);
  }

  #filters-panel__search >>> .form-control {
    max-width: 100%;
  }
}
</style>
