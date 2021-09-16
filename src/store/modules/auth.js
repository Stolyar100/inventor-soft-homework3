const state = () => ({
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
});

const getters = {
  isLoggedIn: state => state.isLoggedIn
};

const actions = {
  async login({ commit }) {
    console.log("login");
    commit("setIsLoggedIn", true);
  },
  async logout({ commit }) {
    commit("setIsLoggedIn", false);
  },
};

const mutations = {
  setIsLoggedIn(state, value) {
    state.isLoggedIn = value;
    localStorage.setItem("isLoggedIn", value);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
