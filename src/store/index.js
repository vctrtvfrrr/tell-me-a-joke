import Vue from "vue";
import Vuex from "vuex";
import Router from "@/router";

Vue.use(Vuex);

const state = {
  // Page mood
  faceMood: "neutral",
  // Values for the page mood
  validMoods: ["sad", "neutral", "happy"]
};

const mutations = {
  // Changes the page mood
  SET_MOOD(state, mood) {
    state.faceMood = mood;
  }
};

const actions = {};
/**
 * Each valid mood sets your value and triggers
 * a redirect to a different page.
 */
state.validMoods.forEach(mood => {
  actions[`${mood}Face`] = ({ commit }) => {
    commit("SET_MOOD", mood);
    Router.push({ name: "face", params: { mood } });
  };
});

export default new Vuex.Store({
  state,
  mutations,
  actions
});
