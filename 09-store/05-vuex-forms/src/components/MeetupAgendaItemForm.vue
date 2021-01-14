<template>
  <div class="form-section form-section_inner">
    <button
      type="button"
      class="remove-button"
      @click="removeAgendaItem(index)"
    >
      <app-icon icon="trash" />
    </button>

    <div class="form-group">
      <select v-model="type" title="Тип">
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="form__row">
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Начало</label>
          <input
            class="form-control"
            v-model.lazy="startsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Окончание</label>
          <input
            class="form-control"
            v-model.lazy="endsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model.lazy="title" />
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea class="form-control" v-model.lazy="description"></textarea>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import { mapMutations, mapState, mapGetters } from 'vuex';

const mapField = (field, getter, setter) => ({
  get() {
    return getter.call(this, field);
  },
  set(value) {
    setter.call(this, field, value);
  },
});

const mapFields = (fields, getter, setter) =>
  fields.reduce(
    (map, field) => ({
      ...map,
      [field]: mapField(field, getter, setter),
    }),
    {},
  );

export default {
  name: 'MeetupAgendaItemForm',

  props: {
    index: {
      type: Number,
      required: true,
    },
  },

  components: {
    AppIcon,
  },

  computed: {
    ...mapState('form', {
      meetup: (state) => state.meetup,
    }),

    ...mapGetters('form', {
      getAgendaItemByIndex: 'GET_AGENDA_ITEM_BY_INDEX',
    }),

    agendaItem() {
      return this.getAgendaItemByIndex(this.index);
    },

    ...mapFields(
      ['startsAt', 'endsAt', 'type', 'title', 'description'],
      function(field) {
        return this.agendaItem[field];
      },
      function(field, value) {
        this.setAgendaItemField({
          index: this.index,
          field,
          value,
        });
      },
    ),
  },

  methods: {
    ...mapMutations('form', {
      setAgendaItemField: 'SET_AGENDA_ITEM_FIELD',
      removeAgendaItem: 'REMOVE_AGENDA_ITEM',
    }),
  },
};
</script>

<style scoped></style>
