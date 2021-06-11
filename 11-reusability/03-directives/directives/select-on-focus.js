let handler;

export const selectOnFocus = {
  bind(el, { value }) {
    if (value !== undefined && !Array.isArray(value)) {
      throw new TypeError('Directive value must be an Array if any');
    }

    const [start, end] = value ?? [0, -1];

    handler = ($event) => {
      $event.currentTarget.setSelectionRange(start, end);
    };

    el.addEventListener('focus', handler);
  },

  unbind(el) {
    el.removeEventListener('focus', handler);
  },
};
