import Vue from './vendor/vue.esm.browser.js';

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
  components: {
    PageA,
    PageB,
    PageC,
  },

  data() {
    return {
      currentPath: location.pathname,
    };
  },

  mounted() {
    window.addEventListener('popstate', this.updateCurrentPath);
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.updateCurrentPath);
  },

  methods: {
    push(path) {
      this.currentPath = path;
      history.pushState(null, 'Title', this.currentPath);
    },

    updateCurrentPath() {
      this.currentPath = location.pathname;
    },
  },

  template: `
    <main id="app" style="text-align: center">
      <nav>
        <a href="/A" @click.prevent="push('/A')">Page A</a>
        <a href="/B" @click.prevent="push('/B')">Page B</a>
        <a href="/C" @click.prevent="push('/C')">Page C</a>
      </nav>
      <hr>
      <page-a v-if="currentPath === '/A'" />
      <page-b v-else-if="currentPath === '/B'" />
      <page-c v-else-if="currentPath === '/C'" />
      <div v-else>404 - Not Found</div>
    </main>
  `,
};

new Vue(App).$mount('#app');
