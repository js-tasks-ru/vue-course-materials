import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const PageA = {
  template: `<div>Page A</div>`,
};

const PageB = {
  template: `<div>Page B</div>`,
};

const PageC = {
  template: `<div>Page C</div>`,
};

const App = {
  template: `
    <main id="app" style="text-align: center">
    <nav>
      <button @click="go('/A')">Page A</button>
      <button @click="go('/B')">Page B</button>
      <button @click="go('/C')">Page C</button>
    </nav>
    <hr>
    <page-a v-if="current === '/A'" />
    <page-b v-else-if="current === '/B'" />
    <page-c v-else-if="current === '/C'" />
    <div v-else>404 - Not Found</div>
    </main>
  `,

  components: {
    PageA,
    PageB,
    PageC,
  },

  mounted() {
    window.addEventListener('popstate', this.updateCurrent);
  },

  data() {
    return {
      current: location.pathname,
    };
  },

  methods: {
    go(page) {
      this.current = page;
      history.pushState(null, 'Title', this.current);
    },

    updateCurrent() {
      this.current = location.pathname;
    },
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.updateCurrent);
  },
};

new Vue(App).$mount('#app');
