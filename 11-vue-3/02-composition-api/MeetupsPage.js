import { onMounted, ref } from './vue3.esm-browser.js';
import { MeetupsList } from './MeetupsList.js';
import { MeetupsCalendar } from './MeetupsCalendar.js';
import { PageTabs } from './PageTabs.js';
import { FormCheck } from './FormCheck.js';
import { AppEmpty } from './AppEmpty.js';
import { useMeetupsFilters } from './composables/useMeetupsFilters.js';
import { useMeetupsFetch } from './composables/useMeetupsFetch.js';
import { useWindowSize } from './composables/useWindowSizeGlobal.js';
import { useToasterContext } from './ToasterPlugin.js';

export const MeetupsPage = {
  name: 'MeetupsPage',

  template: `
    <div class="container">

      <h4>{{ width }}:{{ height }}</h4>

      <div class="filters-panel">
        <div class="filters-panel__col">
          <form-check v-model="filter.date" :options="$options.dateFilterOptions" name="date" />
        </div>

        <div class="filters-panel__col">
          <div class="form-group form-group_inline">
            <div class="input-group input-group_icon input-group_icon-left">
              <img class="icon" alt="icon" src="/assets/icons/icon-search.svg"/>
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
            <page-tabs v-model:selected="view"></page-tabs>
          </div>
        </div>
      </div>


      <template v-if="filteredMeetups && filteredMeetups.length">
        <meetups-list v-if="view === 'list'" :meetups="filteredMeetups" key="list"></meetups-list>
        <meetups-calendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" key="calendar"></meetups-calendar>
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

  setup(props) {
    const { meetups } = useMeetupsFetch(props);
    const { success } = useToasterContext();

    const view = ref('list');

    onMounted(() => {
      success('Mounted!');
    });

    return {
      view,
      ...useWindowSize(),
      ...useMeetupsFilters(meetups),
    };
  },
};
