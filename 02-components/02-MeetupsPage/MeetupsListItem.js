export const MeetupListItem = {
  name: 'MeetupListItem',

  template: `
    <a :href="\`/meetups/\${meetup.id}\`" class="meetups-list__item">
      <div class="meetups-list__col">
        <div class="meetups-list__cover" :style="meetup.cover ? \`--bg-url: url('\${meetup.cover}')\` : ''">
          <h5>{{ meetup.title }}</h5>
        </div>
      </div>
      <div class="meetups-list__col">
        <div class="meetups-list__description">
          <span v-if="meetup.attending" class="meetups-list__badge meetups-list__badge_success">Участвую</span>
          <span v-else-if="meetup.organizing" class="meetups-list__badge">Организую</span>
          <ul class="info-list">
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
              {{ meetup.organizer }}
            </li>
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
              {{ meetup.place }}
            </li>
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
              <time :datetime="meetup.dateOnlyString">{{ meetup.localDate }}</time>
            </li>
          </ul>
        </div>
      </div>
    </a>`,

  props: {
    meetup: {
      required: true,
      type: Object,
    },
  },
};
