export const FormCheck = {
  name: 'FormCheck',

  template: `
    <div class="form-check">
      <div v-for="option in options" class="form-check__group">
        <input
          class="form-check__input"
          type="radio"
          :name="name"
          :checked="option.value === value"
          @input="$emit('change', option.value)"
          :value="option.value"
        />
        <label class="form-check__label">{{ option.text }}</label>
      </div>
    </div>
  `,

  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
  },

  model: {
    prop: 'value',
    event: 'change',
  },
};
