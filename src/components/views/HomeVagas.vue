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

      <ListaVagas>
        <p>Conteudo Subistituido</p>
      </ListaVagas>

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
import IndicadorDados from "@/components/comuns/IndicadorDados.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";

export default {
  name: "HomeVagas",

  components: {
    IndicadorDados,
    ListaVagas,
    PesquisarVaga,
  },

  data() {
    return {
      usuariosOnline: 0,
    };
  },

  created() {
    setInterval(this.getUserOnline, 1000);
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