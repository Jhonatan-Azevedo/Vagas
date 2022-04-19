<template>
  <section id="banner">
    <div
      id="fundo"
      class="d-flex flex-column justify-content-center align-items-end px-5"
    >
      <h3 class="text-light">Aqui na Encontre, sempre temos as</h3>
      <h1 class="text-light fw-bold">melhores opotunidades do mercado!</h1>
      <div class="small text-secondary">Atuando no desde 2015</div>
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