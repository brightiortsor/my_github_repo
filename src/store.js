import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    setCounter(state, newValue) {
      state.counter = newValue;
    },
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
  actions: {
    setCounter({ commit }, newValue) {
      commit("setCounter", newValue);
    },
    incrementCounter({ commit }) {
      commit("incrementCounter");
    },
    decrementCounter({ commit }) {
      commit("decrementCounter");
    },
    resetCounter({ commit }) {
      commit("resetCounter");
    },
  },
});

export default store;
