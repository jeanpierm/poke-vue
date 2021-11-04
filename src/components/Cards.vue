<template>
  <div>
    <div class="row">
      <router-link
        class="mb-4 col-6 text-decoration-none text-dark"
        v-for="(poke, index) of pokes"
        :key="index"
        :to="{ name: 'Pokemon', params: { id: poke.entry_number } }"
      >
        <Card :poke="poke" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  methods: {
    ...mapActions(["fetchPokes"]),
  },
  computed: {
    ...mapState(["pokes", "criteria", "filter"]),
  },
  mounted() {
    this.fetchPokes();
  },
};
</script>