<template>
  <div>
    <TopoPadrao @navegar="componente = $event" />
    <ConteudoSistema :caminho="componente" />
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

  data() {
    return {
      componente: "Home",
    };
  },

  methods: {
    acao(n1, n2) {
      let soma = n1 + n2;
      console.log("chegou: ", soma);
    },
  },
};
</script>

<style>
</style>
