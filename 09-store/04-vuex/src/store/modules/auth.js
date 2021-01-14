import { loginWithApi } from '@/api';

const state = () => ({
  user: null,
  isLoading: false,
  error: null,
});

const getters = {
  IS_AUTHENTICATED(state /*getters, rootState, rootGetters*/) {
    return !!state.user;
  },
};

const mutations = {
  // MUTATION_TYPE(state, payload)
  // called by commit
  // returns NOTHING!
  SET_USER(state, user) {
    state.user = user;
  },

  SET_LOADING(state) {
    state.isLoading = true;
    state.error = null;
  },

  SET_SUCCESS(state) {
    state.isLoading = false;
    state.error = false;
  },

  SET_ERROR(state, error) {
    state.isLoading = false;
    state.error = error;
  }
};

const actions = {
  // ACTION_TYPE(context, payload)
  // context = { state, getters, commit, dispatch, rootState, rootGetters }
  // called by dispatch
  // always returns Promise!
  LOGIN({ commit, dispatch }, { email, password }) {
    commit('SET_LOADING');
    return loginWithApi(email, password)
      .then((user) => {
        commit('SET_USER', user);
        commit('SET_SUCCESS');
      }).catch((e) => {
        commit('SET_ERROR', e.message);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
