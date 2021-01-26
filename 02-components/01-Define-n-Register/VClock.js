export default {
  template: `
    <div>{{ time }}</div>`,

  data() {
    return {
      time: '',
      intervalId: null,
    };
  },

  mounted() {
    this.intervalId = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
