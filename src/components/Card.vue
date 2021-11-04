<template>
  <!-- básicamente es una carta con la imagen y nombre del pokemón obtenido del prop -->
  <div class="card d-flex align-items-center">
    <img
      :src="getImgUrl(id)"
      :alt="'pokemon-' + id"
      class="img-fluid"
      style="width: 215px"
    />
    <h4>{{ name }}</h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    poke: {
      entry_number: Number,
      pokemon_species: {
        name: String,
      },
    },
  },
  data() {
    return {
      name:
        this.poke.pokemon_species.name[0].toUpperCase() +
        this.poke.pokemon_species.name.slice(1),
      id: this.poke.entry_number,
    };
  },
  methods: {
    getImgUrl(id) {
      let temp = "";
      if (id < 10) temp = `00${id}`;
      if (id >= 10 && id < 100) temp = `0${id}`;
      if (id >= 100 && id < 1000) temp = id;
      return require("@/assets/" + temp + ".png");
    },
  },
};
</script>