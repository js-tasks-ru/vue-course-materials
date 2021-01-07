<template>
  <form class="form meetup-form" @submit.prevent="handleSubmit">
    <div class="meetup-form__content">
      <fieldset class="form-section">
        <div class="form-group">
          <label class="form-label">Название</label>
          <input class="form-control" v-model="meetup_.title" />
        </div>
        <div class="form-group">
          <label class="form-label">Место проведения</label>
          <input class="form-control" v-model="meetup_.place" />
        </div>
      </fieldset>

      <h3 class="form__section-title">Программа</h3>
      <meetup-agenda-item-form
        v-for="(agendaItem, idx) in meetup_.agenda"
        :key="agendaItem.id"
        :agenda-item="agendaItem"
        @change="updateAgendaItem(idx, $event)"
        @remove="removeAgendaItem(idx)"
        class="mb-3"
      />

      <div class="form-section_append">
        <button type="button" @click="addAgendaItem">
          + Добавить пункт программы
        </button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside_stick">
        <button type="button" class="button button_secondary button_block">
          Cancel
        </button>
        <button class="button button_primary button_block" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import MeetupAgendaItemForm from './MeetupAgendaItemForm';
import { deepClone } from '../utils';

function createAgendaItem() {
  return {
    id: Math.random(),
    startsAt: '00:00',
    endsAt: '00:00',
    type: 'other',
    title: null,
    description: null,
    speaker: null,
    language: null,
  };
}

export default {
  name: 'MeetupForm',

  components: {
    MeetupAgendaItemForm,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      meetup_: deepClone(this.meetup),
    };
  },

  methods: {
    addAgendaItem() {
      const newItem = createAgendaItem();
      this.meetup_.agenda.push(newItem);
    },

    updateAgendaItem(idx, newAgendaItem) {
      this.meetup_.agenda.splice(idx, 1, newAgendaItem);
    },

    removeAgendaItem(idx) {
      this.meetup_.agenda.splice(idx, 1);
    },

    handleSubmit() {
      this.$emit('submit', deepClone(this.meetup_));
    },
  },
};
</script>

<style scoped>
.meetup-form__aside {
  margin: 48px 0;
}

.meetup-form__aside_stick > .button {
  margin: 0 0 12px 0;
}

@media all and (min-width: 992px) {
  .meetup-form {
    display: flex;
    flex-direction: row;
  }

  .meetup-form__content {
    flex: 1 0 calc(100% - 320px);
  }

  .meetup-form__aside {
    flex: 1 0 320px;
    max-width: 320px;
    width: 100%;
    padding-left: 137px;
    margin: 0;
  }

  .meetup-form__aside_stick {
    position: sticky;
    top: 32px;
  }
}
</style>
