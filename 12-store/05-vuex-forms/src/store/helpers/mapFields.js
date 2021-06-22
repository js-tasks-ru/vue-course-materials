export function mapFields(fields, getter, setter) {
  return fields.reduce((map, field) => {
    map[field] = {
      get() {
        return this[getter](field);
      },
      set(value) {
        this[setter](field, value);
      },
    };
    return map;
  }, {});
}
