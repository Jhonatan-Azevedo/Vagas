<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" />
    <AlertaMensagem v-if="exibirAlerta">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </AlertaMensagem>
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
      alerta: { titulo: "", descricao: "" },
    };
  },

  mounted() {
    this.emitter.on("alerta", (params) => {
      this.alerta = params;
      this.exibirAlerta = true;
      setTimeout(() => (this.exibirAlerta = false), 3000);
    });
  },

  methods: {},
};
</script>

<style>
</style>
