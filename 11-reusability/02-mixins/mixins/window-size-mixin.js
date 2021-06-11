export const windowSizeMixin = {
  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
  },

  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },

  methods: {
    updateWindowSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowSize);
  },
};
