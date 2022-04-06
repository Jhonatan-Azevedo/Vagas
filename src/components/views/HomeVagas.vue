<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <PesquisarVaga />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col"><VagaCard /></div>
      </div>

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