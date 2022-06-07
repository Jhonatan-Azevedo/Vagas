<template>
  <section id="banner">
    <div class="container-fluid">
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active animatioShow">
            <div
              :id="estilo"
              class="d-flex flex-column justify-content-center align-items-end"
            >
              <div :class="estiloFundo"></div>
              <div v-if="estiloFundo == 'fundoBanner1'" class="titleBunner">
                <h1 class="text-right px-5">
                  <span class="h3 m-0 text-end text-light d-block"
                    >Aqui na Encontre, sempre temos as</span
                  >
                  <span class="h1 m-0 text-light fw-bold"
                    >MELHORES OPORTUNIDADES DO MERCADO!</span
                  >
                </h1>
                <div class="small text-secondary titleBunner px-5">
                  Atuando desde 2015
                </div>
              </div>

              <div
                v-else-if="estiloFundo == 'fundoBanner2'"
                class="titleBunner w-100"
              >
                <h2 class="text-right px-5 titleBunner w-100 text-center">
                  <span class="m-0 text-light d-block"
                    >Pesquisas apontam que a <br />Encontre! esta entre os 5
                    sites que mais divulgam vagas.</span
                  >
                </h2>
              </div>

              <div v-else class="titleBunner">
                <div class="text-center mb-5 text-light">
                  <h1 id="title-nav">Encontre!</h1>
                </div>

                <h2 class="text-light px-5 w-100 text-center">
                  <span class="m-0 text-light d-block">
                    Publique agora sua vaga onde <br />
                    milhares de profissionais poderam ver!
                  </span>
                </h2>
                <hr />
                <br />
                <div class="text-center">
                  <button class="btn btn-secondary" @click="publicarVaga">
                    Publicar vaga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerCard",

  data() {
    return {
      estilo: "banner1",
      estiloFundo: "fundoBanner1",
    };
  },

  mounted() {
    this.animateBanner();
    this.estilo = "banner1";
    this.estiloFundo = "fundoBanner1";
  },

  activated() {},

  methods: {
    animateBanner() {
      setInterval(() => {
        if (this.estilo == "banner1" && this.estiloFundo == "fundoBanner1") {
          this.estilo = "banner2";
          this.estiloFundo = "fundoBanner2";
          return;
        } else if (
          this.estilo == "banner2" &&
          this.estiloFundo == "fundoBanner2"
        ) {
          this.estilo = "banner3";
          this.estiloFundo = "fundoBanner3";
          return;
        } else {
          this.estilo = "banner1";
          this.estiloFundo = "fundoBanner1";
        }
      }, 5000);
    },

    publicarVaga() {
      this.emitter.emit("publicarVaga");
    },
  },
};
</script>

<style scoped>
.fundoBanner1 {
  z-index: 1 !important;
  position: absolute;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.fundoBanner2 {
  z-index: 1 !important;
  position: absolute;
  width: 100vw;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 33%,
    rgba(0, 212, 255, 0) 100%
  );
}

.fundoBanner3 {
  z-index: 1 !important;
  position: absolute;
  width: 100vw;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 0.6278886554621849) 49%,
    rgba(0, 0, 0, 1) 91%
  );
}

#title-nav {
  font-family: "Bebas Neue", cursive;
  font-size: 60px;
}

.titleBunner {
  z-index: 2;
}

#banner1 {
  width: 100%;
  height: 100vh;
  background-image: url("./../../assets/banner_principal.jpg");
  background-size: cover;
  background-position: center;
  animation: showBanner 1s linear;
}

#banner2 {
  width: 100%;
  height: 100vh;
  background-image: url("./../../assets/graph_banner.jpg");
  background-size: cover;
  background-position: center;
  animation: showBanner2 1s linear;
}

#banner3 {
  width: 100%;
  height: 100vh;
  background-image: url("./../../assets/divilgar.svg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: left;
  animation: showBanner3 1s linear;
}

.container-fluid {
  padding: 0;
}

.animatioShow {
  opacity: 0;
}

@keyframes showBanner {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes showBanner2 {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes showBanner3 {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>