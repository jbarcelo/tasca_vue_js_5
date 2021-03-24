import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  numbers: [1, 2, 3],
  people: [
    {
      id: 1,
      dni: "43135949R",
      nom: "Jaume",
      llinatge1: "Barcelo",
      llinatge2: "Vicens"
    }
  ]
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload);
  },
  ADD_PERSON(state, person) {
    state.people = [...state.people, person];
  },
  DELETE_PERSON(state, id) {
    state.people = state.people.filter((person) => person.id !== id);
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  },
  addPerson(context, person) {
    context.commit("ADD_PERSON", person);
  },
  deletePerson(context, id) {
    context.commit("DELETE_PERSON", id);
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  },
  getPeople(state) {
    return state.people;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
