<template>
  <div class="page-tabs">
    <button
      type="button"
      class="page-tabs__tab"
      :class="{
        'page-tabs__tab_active': selected === '' || selected === 'list',
      }"
      @click="select('list')"
    >
      <svg
        fill="none"
        height="28"
        viewBox="0 0 28 28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="m5 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h.01c.55228 0 1-.44772 1-1s-.44772-1-1-1zm5 0c-.55228 0-1 .44772-1 1s.44772 1 1 1h13c.5523 0 1-.44772 1-1s-.4477-1-1-1zm0 6c-.55228 0-1 .4477-1 1s.44772 1 1 1h13c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1 7c0-.5523.44772-1 1-1h13c.5523 0 1 .4477 1 1s-.4477 1-1 1h-13c-.55228 0-1-.4477-1-1zm-5-6c0-.5523.44772-1 1-1h.01c.55228 0 1 .4477 1 1s-.44772 1-1 1h-.01c-.55228 0-1-.4477-1-1zm1 5c-.55228 0-1 .4477-1 1s.44772 1 1 1h.01c.55228 0 1-.4477 1-1s-.44772-1-1-1z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button
      type="button"
      class="page-tabs__tab"
      :class="{ 'page-tabs__tab_active': selected === 'calendar' }"
      @click="select('calendar')"
    >
      <svg
        height="22"
        viewBox="0 0 20 22"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="m15 1c0-.552285-.4477-1-1-1s-1 .447715-1 1v1h-6v-1c0-.552285-.44772-1-1-1s-1 .447715-1 1v1h-2c-1.65685 0-3 1.34315-3 3v14c0 1.6569 1.34315 3 3 3h14c1.6569 0 3-1.3431 3-3v-14c0-1.65685-1.3431-3-3-3h-2zm3 7v-3c0-.55228-.4477-1-1-1h-2v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-6v1c0 .55228-.44772 1-1 1s-1-.44772-1-1v-1h-2c-.55228 0-1 .44772-1 1v3zm-16 2h16v9c0 .5523-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageTabs',

  props: {
    selected: String,
  },

  methods: {
    select(name) {
      this.$emit('update:selected', name);
    },
  },
};
</script>

<style scoped></style>
