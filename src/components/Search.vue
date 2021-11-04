<template>
  <div class="my-4">
    <!-- título -->
    <h1>PokeVue</h1>

    <!-- si el filtro está activo y se presiona una tecla en el input, se hace fetch a la API-->
    <input
      type="text"
      class="form-control form-control-lg"
      placeholder="Busca un pokemón"
      v-model="$store.state.criteria"
      @keydown="$store.state.filter && fetchPokes()"
    />
    <!-- si el switch cambia de valor y existe un criterio en el input, se hace fethc a la API -->
    <b-form-checkbox
      v-model="$store.state.filter"
      name="check-button"
      switch
      class="mt-2 text-left user-select-none"
      size="lg"
      @change="$store.state.criteria && fetchPokes()"
    >
      Filtrar
    </b-form-checkbox>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions } from "vuex";

export default {
  name: "Search",
  methods: {
    ...mapActions(["fetchPokes"]),
  },
  computed: {
    // ...mapState(["criteria", "filter"]),
  },
};
</script>
