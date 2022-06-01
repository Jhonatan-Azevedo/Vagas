<template>
  <footer
    class="border-top w-100 d-flex justify-content-center align-items-center"
  >
    <a
      class="text-decoration-none link-secondary"
      href="https://github.com/Jhonatan-Azevedo"
      target="_blank"
    >
      <i class="bi bi-github"></i> Jhonatan Azevedo Developer@{{ date }}
    </a>
  </footer>
</template>

<script>
export default {
  name: "RodapePadrao",

  computed: {
    date() {
      return new Date().getFullYear(2011);
    },
  },
};
</script>

<style scoped>
footer {
  height: 50px !important;
  background-color: #0f1d2b;
}
</style>