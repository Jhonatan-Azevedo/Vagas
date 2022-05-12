<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" class="fixed-top" />
    <ConteudoSistema :caminho="componente" />
  </div>
</template>

<script>
import ConteudoSistema from "@/components/layouts/ConteudoSistema.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  components: {
    ConteudoSistema,
    TopoPadrao,
    VagasFavoritas,
  },

  data() {
    return {
      componente: "Home",
    };
  },

  mounted() {
    this.emitter.on("alerta", (params) => {
      this.sweetAlert(params.icon, params.text);
    });
  },

  methods: {
    sweetAlert(icon, text) {
      this.$swal.fire({
        position: "center",
        icon: icon,
        html: text,
        showConfirmButton: false,
        timer: 3500,
      });
    },
  },
};
</script>

<style>
#app {
  overflow-x: hidden;
}
.cores {
  background: #0f1d2b;
  background: #17456b;
  background: #419fb7;
  background: #f5f6ee;
  background: #ffb000;
}
</style>
