import TodoService from "@/services/todo.service";

const state = () => ({
  todos: [],
});

const getters = {
  todos: (state) => state.todos,
};

const actions = {
  async getTodos({ commit }) {
    const todos = await TodoService.getTodos();
    return commit("setTodos", todos);
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
