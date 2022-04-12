<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" />
    <AlertaMensagem v-if="exibirAlerta" />
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
      exibirAlerta: false,
    };
  },

  mounted() {
    this.emitter.on("alerta", () => {
      this.exibirAlerta = true;
      alert("apesentar a mensagem de alerta");

      setTimeout(() => (this.exibirAlerta = false), 3000);
    });
  },

  methods: {},
};
</script>

<style>
</style>
