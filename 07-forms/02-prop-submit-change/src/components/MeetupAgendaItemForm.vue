<template>
  <div class="form-section form-section_inner">
    <button type="button" class="remove-button" @click="$emit('remove')">
      <app-icon icon="trash" />
    </button>

    <div class="form-group">
      <select v-model="localAgendaItem.type" title="Тип">
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="form__row">
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Начало</label>
          <input
            class="form-control"
            v-model="localAgendaItem.startsAt"
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
            v-model="localAgendaItem.endsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="localAgendaItem.title" />
    </div>

    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
        class="form-control"
        v-model="localAgendaItem.description"
      ></textarea>
    </div>

    <button type="button" @click="handleSave">Save</button>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import { deepClone } from '@/utils';

export default {
  name: 'MeetupAgendaItemForm',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  components: {
    AppIcon,
  },

  data() {
    return {
      localAgendaItem: deepClone(this.agendaItem),
    };
  },

  methods: {
    handleSave() {
      this.$emit('save', deepClone(this.localAgendaItem));
    },
  },
};
</script>

<style scoped></style>
