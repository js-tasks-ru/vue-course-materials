import Vue from './vendor/vue.esm.browser.js';
import { loginWithApi } from './api.js';

const state = Vue.observable({
  user: null,
});

export const getUser = () => state.user;

export const isAuthenticated = () => {
  return !!state.user;
};

export const setUser = (user) => {
  state.user = user;
};

export const login = (email, password) =>
  loginWithApi(email, password).then((user) => {
    setUser(user);
  });
