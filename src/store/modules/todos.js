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
    console.log(response.data);
  }

};

//mutations are what mutate/change the state
const mutations = {};


export default {
  state,
  getters,
  actions,
  mutations
};
