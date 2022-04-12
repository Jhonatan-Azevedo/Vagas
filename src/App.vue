<template>
  <div>
    <AlertaMensagem />
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" />
    <ConteudoSistema :caminho="componente" />
  </div>
</template>

<script>
import AlertaMensagem from "@/components/comuns/AlertaMensagem.vue";
import ConteudoSistema from "@/components/layouts/ConteudoSistema.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  components: {
    AlertaMensagem,
    ConteudoSistema,
    TopoPadrao,
    VagasFavoritas,
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
