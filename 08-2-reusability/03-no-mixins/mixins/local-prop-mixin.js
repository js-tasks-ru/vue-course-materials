const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export const localPropMixin = (
  propName,
  propOptions = { type: Object },
  getLocalPropName = (propName) => `${propName}_`,
) => {
  const localPropName = getLocalPropName(propName);

  return {
    props: {
      [propName]: propOptions,
    },

    data() {
      return {
        [localPropName]: null,
      };
    },

    watch: {
      [propName]: {
        immediate: true,
        deep: true,
        handler(newValue) {
          if (!deepEqual(this[propName], this[localPropName])) {
            this[localPropName] = deepClone(newValue);
          }
        },
      },

      [localPropName]: {
        deep: true,
        handler(newValue) {
          this.$emit(`update:${propName}`, deepClone(newValue));
        },
      },
    },
  };
};
