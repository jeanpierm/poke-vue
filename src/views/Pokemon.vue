<template>
  <div>
    <router-link to="/">
      <b-icon icon="chevron-left" class="h1 my-4"></b-icon>
    </router-link>
    <div class="card p-4">
      <div class="text-center">
        <!-- {{ pokemon[0].entry_number }} -->
        <h1>
          {{ pokemon.name }}
        </h1>
        <img
          :src="getImgUrl(id)"
          :alt="'pokemon-' + id"
          class="img-fluid"
          style="width: 215px"
        />
        <article class="mt-4">
          <h3>Habilidades</h3>
          <span
            class="btn btn-success mx-2"
            v-for="(ability, index) of pokemon.abilities"
            :key="index"
          >
            {{ ability }}
          </span>
        </article>

        <article class="mt-4">
          <h3>Descripción</h3>
          <p>{{ pokemon.description }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  name: "Pokemon",
  data() {
    return {
      id: this.$route.params.id,
      pokemon: {
        name: "",
        description: "",
        abilities: [],
      },
    };
  },
  computed: {},
  methods: {
    firstUpper(string) {
      return string.toUpperCase()[0] + string.slice(1);
    },

    async fetchDescription() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${this.id}`
      )
        .then((res) => res.json())
        .then((res) => res["flavor_text_entries"]);
      const newResponse = response.find((res) => res.language.name === "es");
      // console.log(newResponse.flavor_text);
      this.pokemon.description = newResponse.flavor_text;
    },

    async fetchNameAbilities() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.id}`
      ).then((res) => res.json());
      // console.log(response);
      response["abilities"].forEach((res) => {
        this.pokemon.abilities.push(this.firstUpper(res.ability.name))
      })
      // this.pokemon.abilities.push(
      //   this.firstUpper(response["abilities"][0].ability.name)
      // );
      // this.pokemon.abilities.push(
      //   this.firstUpper(response["abilities"][1].ability.name)
      // );
      this.pokemon.name = this.firstUpper(response["forms"][0].name);
    },

    getImgUrl(id) {
      let temp = "";
      if (id < 10) temp = `00${id}`;
      if (id >= 10 && id < 100) temp = `0${id}`;
      if (id >= 100 && id < 1000) temp = id;
      return require("@/assets/" + temp + ".png");
    },
  },
  mounted() {
    this.fetchNameAbilities();
    this.fetchDescription();
  },
};
</script>