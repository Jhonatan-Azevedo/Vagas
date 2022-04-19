<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a id="title-nav" class="navbar-brand" href="#">Encontre!</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navegarPara('Home')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')"
              >Publicar Vaga</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopoPadrao",

  methods: {
    navegarPara(caminho) {
      this.$emit("navegar", caminho);
    },
  },
};
</script>

<style>
nav {
  background-color: #0f1d2b;
}

#title-nav {
  font-family: "Bebas Neue", cursive;
  font-size: 32px;
}

.nav-link {
  color: #f5f6ee !important;
}

.nav-link:hover {
  color: #cfcfcf !important;
}
</style>