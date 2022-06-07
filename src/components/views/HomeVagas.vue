<template>
  <div>
    <div class="v-scroll-reveal">
      <div class="row">
        <div class="col">
          <BannerCard />
        </div>
      </div>
      <!-- Start - PesquisarVaga -->

      <div class="container py-4">
        <div class="row">
          <div class="col">
            <PesquisarVaga />
          </div>
        </div>
        <!-- End - PesquisarVaga -->

        <ListaVagas />
        <!-- Start - IndicadorDados -->
        <div id="indicadores" class="d-flex justify-content-evenly mt-5">
          <div class="m-2">
            <IndicadorDados
              titulo="Numero de vagas já cadastradas"
              :indicador="indicadorVagas"
              bg="bg-dark"
              color="text-white"
            />
          </div>

          <div class="m-2">
            <IndicadorDados
              titulo="Profissionais cadastrados"
              indicador="219"
              bg="bg-dark"
              color="text-white"
            />
          </div>

          <div class="m-2">
            <IndicadorDados
              titulo="Visitantes onlines"
              :indicador="usuariosOnline"
              bg="bg-light"
              color="text-dark"
            />
          </div>
        </div>
        <!-- End - IndicadorDados -->
      </div>
    </div>
  </div>
</template>

<script>
import BannerCard from "@/components/comuns/BannerCard.vue";
import IndicadorDados from "@/components/comuns/IndicadorDados.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";

export default {
  name: "HomeVagas",

  components: {
    BannerCard,
    IndicadorDados,
    ListaVagas,
    PesquisarVaga,
  },

  data() {
    return {
      usuariosOnline: 0,
      vagas: [
        {
          id: 1,
          titulo: "Analista Programador PHP Pleno",
          descricao:
            "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
          salario: 6000,
          modalidade: "Home Office",
          tipo: "PJ",
          publicacao: "2021-10-10",
          favoritada: false,
        },
        {
          id: 2,
          titulo: "Programador JavaScript Angular",
          descricao:
            "Profissional com conhecimentos avançados em JavaScript e Angular.",
          salario: 5000,
          modalidade: "Presencial",
          tipo: "CLT",
          publicacao: "2021-10-07",
          favoritada: true,
        },
        {
          id: 3,
          titulo: "Programador JavaScript Vue",
          descricao:
            "Profissional com conhecimentos avançados em JavaScript e Vue.",
          salario: 5000,
          modalidade: "Home Office",
          tipo: "CLT",
          publicacao: "2021-10-06",
          favoritada: false,
        },
        {
          id: 4,
          titulo: "Analista de Banco de Dados Sênior",
          descricao:
            "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
          salario: 9000,
          modalidade: "Presencial",
          tipo: "PJ",
          publicacao: "2021-10-06",
          favoritada: false,
        },
        {
          id: 5,
          titulo: "Programador Web Júnior",
          descricao:
            "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
          salario: 3000,
          modalidade: "Presencial",
          tipo: "CLT",
          publicacao: "2021-10-05",
          favoritada: false,
        },
      ],

      indicadorVagas: 342,
    };
  },

  created() {
    setInterval(this.getUserOnline, 2000);
  },

  activated() {
    let vagas = JSON.parse(localStorage.getItem("vagas"));
    this.indicadorVagas = 342 + vagas.length;
  },

  mounted() {
    let vagas = JSON.parse(localStorage.getItem("vagas"));
    if (!vagas) {
      vagas = this.vagas;
      localStorage.setItem("vagas", JSON.stringify(vagas));
    }
    this.indicadorVagas = 342 + vagas.length;
    this.emitter.emit("atualizarPag", 1);
  },

  methods: {
    getUserOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 580px) {
  #indicadores {
    flex-direction: column !important;
  }
}
</style>