<template>
  <div>
    <div class="container py-4">
      <!-- Start - PesquisarVaga -->
      <div class="row">
        <div class="col">
          <PesquisarVaga />
        </div>
      </div>
      <!-- End - PesquisarVaga -->

      <!-- Start - VagaCard -->
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <VagaCard v-bind="vaga" />
        </div>
      </div>
      <!-- End - VagaCard -->

      <!-- Start - IndicadorDados -->
      <div class="row mt-5">
        <div class="col-4">
          <IndicadorDados
            titulo="Vagas Abertas"
            indicador="100"
            bg="bg-dark"
            color="text-white"
          />
        </div>

        <div class="col-4">
          <IndicadorDados
            titulo="Profissionais cadastrados"
            indicador="225"
            bg="bg-dark"
            color="text-white"
          />
        </div>

        <div class="col-4">
          <IndicadorDados
            titulo="Visitantes onlines"
            :indicador="usuariosOnline"
            bg="bg-light"
            color="text-dark"
          />
        </div>
      </div>
      <!-- End - IndicadorDados -->
    </div>
  </div>
</template>

<script>
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import IndicadorDados from "@/components/comuns/IndicadorDados.vue";
import VagaCard from "@/components/comuns/VagaCard.vue";
export default {
  name: "HomeVagas",

  components: {
    PesquisarVaga,
    IndicadorDados,
    VagaCard,
  },

  data() {
    return {
      usuariosOnline: 0,
      vagas: [],
    };
  },

  created() {
    setInterval(this.getUserOnline, 1000);
  },

  mounted() {
    this.emitter.on("filtarVagas", (vaga) => {
      console.log(vaga);
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      const vagasFiltradas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );

      this.vagas = vagasFiltradas;
    });
  },

  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },

  methods: {
    getUserOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>