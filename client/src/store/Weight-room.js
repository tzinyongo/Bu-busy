// store/weight-room.js
export default {
    state: {
      ratings: [],
    },
    mutations: {
      addRating(state, rating) {
        state.ratings.push(rating);
      },
    },
    actions: {
      submitRating({ commit }, rating) {
        commit('addRating', rating);
      },
    },
    getters: {
      averageRating(state) {
        if (state.ratings.length === 0) return 0;
        const sum = state.ratings.reduce((total, rating) => total + rating, 0);
        return sum / state.ratings.length;
      },
    },
  };