export const windowSizeMixin = {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },

  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
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
