//This is the todos module
//This is where I put all of state, getters, actions, mutations etc.
//I am going to make requests from here to the backend 
import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: "Learn VueX"
    },
    {
      id: 2,
      title: "Eat VueX"
    },
    {
      id: 3,
      title: "Sleep VueX"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {};

const mutations = {};


export default {
  state,
  getters,
  actions,
  mutations
};
