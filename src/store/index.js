import { createStore } from 'vuex';

export default createStore({
  state: {
    ratings: {
      gym: [],
      courts: [],
    },
  },
  mutations: {
    addRating(state, { section, rating }) {
      state.ratings[section].push(rating);
    },
  },
  actions: {
    submitRating({ commit }, { section, rating }) {
      commit('addRating', { section, rating });
    },
  },
  getters: {
    averageRating: (state) => (section) => {
      const ratings = state.ratings[section];
      if (ratings.length === 0) return 0;
      const sum = ratings.reduce((total, rating) => total + rating, 0);
      return sum / ratings.length;
    },
  },
});
