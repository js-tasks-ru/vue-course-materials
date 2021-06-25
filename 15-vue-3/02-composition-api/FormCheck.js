const FormCheck = {
  name: 'FormCheck',

  model: {
    prop: 'value',
    event: 'change',
  },

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

  methods: {
    handleChange(option) {
      this.$emit('change', option.value)
    },
  },

  template: `
    <div class="form-check">
      <div v-for="option in options" :key="option.value" class="form-check__group">
        <input
          :id="\`form-check_\${name}_\${option.value}\`"
          class="form-check__input"
          type="radio"
          :name="name"
          :checked="option.value === value"
          @input="handleChange(option)"
          :value="option.value"
        />
        <label :for="\`form-check_\${name}_\${option.value}\`" class="form-check__label">{{ option.text }}</label>
      </div>
    </div>
  `,
};

export default FormCheck;
