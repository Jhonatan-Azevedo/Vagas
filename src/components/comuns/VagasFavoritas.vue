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
        <ul class="list-group" v-if="vagas.length > 0">
          <li
            class="list-group-item"
            v-for="(vaga, index) in vagas"
            :key="index"
          >
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapseExample-${index}`"
              aria-expanded="false"
              :aria-controls="`collapseExample-${index}`"
              @click="isBusy = !isBusy"
            >
              <i class="bi bi-caret-right-fill" v-if="isBusy"></i
              ><i class="bi bi-caret-down-fill" v-else></i> {{ vaga.titulo }}
            </button>
            <div class="collapse" :id="`collapseExample-${index}`">
              <hr />
              <span>Salário: {{ vaga.salario }}</span>
              <br />
              <span>Modalidade: {{ vaga.modalidade }}</span>
              <br />
              <span>Tipo: {{ vaga.tipo }}</span>
            </div>
          </li>
        </ul>

        <div v-else class="w-100 text-center">
          Nenhuma vaga favoritada <i class="bi bi-heartbreak-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  data() {
    return {
      isBusy: true,
      vagas: [],
    };
  },
  mounted() {
    this.emitter.on("favoritarVaga", () => {
      let vagasDB = JSON.parse(localStorage.getItem("vagas")).reverse()   ;
      this.vagas = vagasDB.filter((item) => item.favoritada);
    });
  },
};
</script>

<style  scoped>
</style>