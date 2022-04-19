<template>
  <div :class="estiloAlerta" class="container text-center">
    <slot name="titulo">
      <h5>Titulo da mensagem de feedback</h5>
    </slot>
  </div>
</template>

<script>
export default {
  name: "AlertaMensagem",
  data() {
    return {
      estiloAlertaObj: {
        erro: "alert alert-danger",
        sucesso: "alert alert-success",
      },
    };
  },
  props: { tipo: String },

  computed: {
    estiloAlerta() {
      return this.estiloAlertaObj[this.tipo];
    },
  },
};
</script>

<style>
</style>