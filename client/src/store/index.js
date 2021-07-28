import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    feedbacks: [],
  },
  mutations: {
    updateFeedbacks(state, payload) {
      state.feedbacks = payload;
    },
  },
  actions: {
    updateFeedbacksAction({ commit }) {
      fetch("http://localhost:8080/feedbacks")
        .then((res) => res.json())
        .then((feedbacks) =>
          commit({
            type: "updateFeedbacks",
            payload: feedbacks,
          })
        );
    },
  },
});

export default store;
