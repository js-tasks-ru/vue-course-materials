import MeetupsPage from './MeetupsPage.js';

const App = {
  name: 'App',

  components: { MeetupsPage },

  template: `
    <main id="app" class="main">
      <meetups-page />
    </main>`,
};

export default App;
