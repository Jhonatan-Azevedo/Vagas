<template>
  <div>
    <div :class="estilo">
      <p>{{ titulo }}</p>
      <h2>{{ indicador }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndicadorDados",
  props: ["titulo", "indicador", "bg", "color"],
  computed: {
    estilo() {
      return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>