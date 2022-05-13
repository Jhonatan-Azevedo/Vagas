<template>
  <section>
    <!-- Start - VagaCard -->
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <VagaCard v-bind="vaga" :index="index" />
      </div>
    </div>
    <!-- End - VagaCard -->

    <PaginacaoVagasVue
      class="w-100 bg-light"
      @paginacao="paginacao($event)"
      :listVagas="vagasTotal"
    />
  </section>
</template>

<script>
import PaginacaoVagasVue from "./PaginacaoVagas.vue";
import VagaCard from "@/components/comuns/VagaCard.vue";

export default {
  name: "ListaVagas",
  components: {
    PaginacaoVagasVue,
    VagaCard,
  },
  data() {
    return {
      vagas: [],
      vagasTotal: [],
    };
  },

  mounted() {
    this.emitter.on("filtarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      const vagasFiltradas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
      this.vagasTotal = vagasFiltradas;
    });
  },

  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas")).slice(0, 3);
    this.vagasTotal = JSON.parse(localStorage.getItem("vagas"));
  },

  methods: {
    paginacao(vagas) {
      this.vagas = vagas;
    },
  },
};
</script>

<style lang="scss" scoped />