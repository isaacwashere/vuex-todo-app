//This is the todos module
//This is where I put all of state, getters, actions, mutations etc.
//I am going to make requests from here to the backend 
import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  //actions take in an object
  //use commit to make a mutation, do not call it directly
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    commit('setTodos',response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  }
};

//mutations are what mutate/change the state
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
