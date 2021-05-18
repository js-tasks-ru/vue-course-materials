export default {
  data() {
    return {
      time: '',
      intervalId: null,
    };
  },

  created() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },

  methods: {
    updateTime() {
      this.time = new Date().toLocaleTimeString();
    },
  },

  template: `<div>{{ time }}</div>`,
};
