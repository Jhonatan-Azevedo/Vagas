<template>
  <footer
    class="
      border-top
      p-3
      w-100
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <a
      class="text-decoration-none link-secondary"
      href="https://github.com/Jhonatan-Azevedo"
      target="_blank"
    >
      <i class="bi bi-github"></i> Github
    </a>

    <span class="text-secondary mx-5"
      >Jhonatan Azevedo Developer@{{ date }}</span
    >
    <a
      class="text-decoration-none link-secondary"
      href="https://www.linkedin.com/in/jazevedodev/"
      target="_blank"
    >
      <i class="bi bi-linkedin"></i> Linkedin
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

@media screen and (max-width: 580px) {
  footer {
    padding: 15% !important;
  }
}
</style>