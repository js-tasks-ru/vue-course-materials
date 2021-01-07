<template>
  <div class="form-section form-section_inner">
    <button type="button" class="remove-button" @click="$emit('remove')">
      <app-icon icon="trash" />
    </button>

    <div class="form-group">
      <select v-model="agendaItem_.type" title="Тип" @change="handleChange">
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
            @change="handleChange"
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
            @change="handleChange"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input
        class="form-control"
        v-model="agendaItem_.title"
        @change="handleChange"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
        class="form-control"
        v-model="agendaItem_.description"
        @change="handleChange"
      ></textarea>
    </div>
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
      agendaItem_: deepClone(this.agendaItem),
    };
  },

  methods: {
    handleChange() {
      this.$emit('update:agendaItem', deepClone(this.agendaItem_));
    },
  },
};
</script>

<style scoped></style>
