<template>
  <section>
    <slot >
      <!-- Start - VagaCard -->
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <VagaCard v-bind="vaga" />
        </div>
      </div>
      <!-- End - VagaCard -->
    </slot>
  </section>
</template>

<script>
import VagaCard from "@/components/comuns/VagaCard.vue";

export default {
  name: "ListaVagas",
  components: {
    VagaCard,
  },
  data() {
    return {
      vagas: [],
    };
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
};
</script>

<style lang="scss" scoped />