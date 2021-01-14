import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import form from './modules/form';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  storage: localStorage,
  modules: ['form'],
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    form,
  },

  plugins: [vuexLocal.plugin],
});
