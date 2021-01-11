const localPropName = propName => propName + '_';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

export const localPropMixin = (propName, propOptions) => ({
  props: {
    [propName]: propOptions,
  },

  data() {
    return {
      [localPropName(propName)]: null,
    };
  },

  watch: {
    [propName]: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (!deepEqual(this[propName], this[localPropName(propName)])) {
          this[localPropName(propName)] = deepClone(newValue);
        }
      },
    },

    [localPropName(propName)]: {
      deep: true,
      handler(newValue) {
        this.$emit('update:' + propName, deepClone(newValue));
      },
    },
  },
});
