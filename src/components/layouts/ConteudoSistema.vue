<template>
  <div>
    <keep-alive>
      <component :is="caminho" />
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/components/views/HomeVagas.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
export default {
  name: "ConteudoSistema",
  props: {
    caminho: {
      type: String,
      required: true,
    },
  },
  components: {
    Home,
    PublicarVaga,
  },
};
</script>

<style>
</style>