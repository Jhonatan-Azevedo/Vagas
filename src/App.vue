<template>
  <div>
    <TopoPadrao />
    <ConteudoSistema />
  </div>
</template>

<script>
import ConteudoSistema from "@/components/layouts/ConteudoSistema.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";

export default {
  name: "App",
  components: {
    ConteudoSistema,
    TopoPadrao,
  },
};
</script>

<style>
</style>
