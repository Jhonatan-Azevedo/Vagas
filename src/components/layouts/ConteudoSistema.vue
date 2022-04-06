<template>
  <div>
    <p>Conteudo</p>
    <button class="btn btn-dark mx-2" @click="conteudo = 'home'">Home</button>
    <button class="btn btn-secondary" @click="conteudo = 'publicarVaga'">
      Publicar Vagas
    </button>
    <component :is="conteudo" />
  </div>
</template>

<script>
import Home from "@/components/views/HomeVagas.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
export default {
  name: "ConteudoSistema",
  data() {
    return {
      conteudo: "home",
    };
  },
  components: {
    Home,
    PublicarVaga,
  },
  /*
  beforeCreate() {
    console.log("Antes de Criar");
  },
  
  created() {
    console.log("Criado");
  },

  beforeMount() {
    console.log("Antes de Montar");
  },

  mounted() {
    console.log("Montado");
  },

  beforeUpdate() {
    console.log("Antes de atualizar");
  },

  updated() {
    console.log("Atualizado");
  },

  beforeUnmount() {
    console.log("Antes de desmontar");
  },

  unmounted() {
    console.log("Desmontado");
  },

  errorCaptured() {
    console.log("Erro Capturado");
  },

  renderTracked() {
    console.log("Re-renderizado rastreada");
  },

  renderTriggered() {
    console.log("Re-renderizado acionada");
  },

  activated() {
    console.log("Componente é ativado");
  },

  deactivated() {
    console.log("Componente é desativado");
  },
  */
};
</script>

<style>
</style>