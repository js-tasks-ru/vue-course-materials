export const windowSizeOptions = {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },

  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowSize);
  },

  methods: {
    updateWindowSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
  },
};
