<template>
  <div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasTopLabel">Vagas Favoritas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(vaga, index) in vagas"
            :key="index"
          >
            {{ vaga }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  data() {
    return {
      vagas: [],
    };
  },
  mounted() {
    this.emitter.on("favoritarVaga", (titulo) => {
      this.vagas.push(titulo);
    });

    this.emitter.on("desfavoritarVaga", (titulo) => {
      let indiceArray = this.vagas.indexOf(titulo);
      if (indiceArray !== -1) this.vagas.splice(indiceArray, 1);
    });
  },
};
</script>

<style  scoped>
</style>