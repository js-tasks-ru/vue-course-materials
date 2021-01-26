import { MeetupsPage } from './MeetupsPage.js';

export const App = {
  name: 'App',

  template: `
    <main id="app" class="main">
      <meetups-page />
    </main>`,

  components: { MeetupsPage },
};
