import Vue from "vue";
import Vuex from "vuex";
import Router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    faceMood: "neutral"
  },
  mutations: {
    SET_MOOD(state, mood) {
      state.faceMood = mood;
    }
  },
  actions: {
    sadFace({ commit }) {
      commit("SET_MOOD", "sad");
      Router.push({
        name: "face",
        params: { mood: "sad" }
      });
    },
    neutralFace({ commit }) {
      commit("SET_MOOD", "neutral");
      Router.push({
        name: "face",
        params: { mood: "neutral" }
      });
    },
    happyFace({ commit }) {
      commit("SET_MOOD", "happy");
      Router.push({
        name: "face",
        params: { mood: "happy" }
      });
    }
  }
});
