<template>
  <div class="alert alert-success">
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
};
</script>

<style>
</style>