<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">PokeVue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link">Inicio</router-link>

          <router-link to="/about" class="nav-link">Acerca de PokeVue</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>