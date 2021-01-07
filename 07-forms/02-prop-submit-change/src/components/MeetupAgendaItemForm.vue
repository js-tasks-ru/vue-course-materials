<template>
  <div class="form-section form-section_inner">
    <button type="button" class="remove-button" @click="$emit('remove')">
      <app-icon icon="trash" />
    </button>

    <div class="form-group">
      <select v-model="agendaItem_.type" title="Тип">
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="form__row">
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Начало</label>
          <input
            class="form-control"
            v-model="agendaItem_.startsAt"
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
            v-model="agendaItem_.endsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="agendaItem_.title" />
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
        class="form-control"
        v-model="agendaItem_.description"
      ></textarea>
    </div>

    <button class="button button_secondary" type="button" @click="handleChange">Save</button>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';

export default {
  name: 'MeetupAgendaItemForm',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      agendaItem_: { ...this.agendaItem },
    };
  },

  components: {
    AppIcon,
  },

  methods: {
    handleChange() {
      this.$emit('change', { ...this.agendaItem_ });
    },
  },
};
</script>

<style scoped></style>
