<template>
  <div :class="estiloAlerta">
    <slot name="titulo">
      <h5>Titulo da mensagem de feedback</h5>
    </slot>
    <hr />
    <slot><p>mensagem de feedback</p></slot>
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