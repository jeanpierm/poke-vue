<template>
  <div id="app">
    <!-- Navegation Bar -->
    <Navbar />

    <!-- View (body) -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    // ...mapActions(["fetchPokes"]),
  },
  mounted() {
    // this.fetchPokes();
  },
};
</script>