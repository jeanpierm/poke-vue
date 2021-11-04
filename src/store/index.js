import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokes: [],
    criteria: "",
    filter: false,
  },
  mutations: {
    async fetchPokes(state) {
      // Para filtrar se resetea el state pokes para evitar bugs
      // resetPokes
      state.pokes = [];

      console.log("fetching pokemons..");
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokedex/2/"
      ).then((res) => res.json());

      //si existe un criterio y el switch-filtro está on se filtra
      if (state.criteria && state.filter) {
        state.pokes = response.pokemon_entries.filter(
          (poke) =>
            poke.pokemon_species.name.indexOf(state.criteria.toLowerCase()) ===
            0
        );
      } else {
        state.pokes = response.pokemon_entries;
      }
    },

    
  },
  actions: {
    fetchPokes({ commit }) {
      commit("fetchPokes");
    },
    resetPokes({ commit }) {
      commit("resetPokes");
    },
  },
  modules: {},
});
