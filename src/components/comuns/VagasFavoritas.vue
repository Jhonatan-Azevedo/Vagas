<template>
  <div>
    <div class="divVagasFavoritas">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Vagas Favoritas
      </button>
    </div>
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
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  mounted() {
    this.emitter.on("eventoGlobal1", (resp) => {
      alert(resp);
    });
  },
};
</script>

<style  scoped>
.divVagasFavoritas {
  position: absolute;
  z-index: 1;
  top: 60px;
  right: 0px;
}
</style>