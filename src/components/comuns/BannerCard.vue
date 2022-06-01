<template>
  <section id="banner">
    <div
      id="fundo"
      class="d-flex flex-column justify-content-center align-items-end px-5"
    >
      <h1 class="text-right">
        <span class="h3 m-0 text-end text-light d-block"
          >Aqui na Encontre, sempre temos as</span
        >
        <span class="h1 m-0 text-light fw-bold"
          >MELHORES OPORTUNIDADES DO MERCADO!</span
        >
      </h1>
      <div class="small text-secondary">Atuando no desde 2015</div>
      <!-- melhores opotunidades do mercado! -->
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerCard",
};
</script>

<style scoped>
#banner {
  width: 100%;
  height: 100vh;
  background-image: url("./../../assets/banner_principal.jpg");
  background-size: cover;
  background-position: center;
}

#fundo {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>