<template>
  <section>
    <!-- Start - VagaCard -->
    <div class="row mt-5" v-for="vaga in vagas" :key="vaga.id">
      <div class="col">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <div class="row">
              <div class="col d-flex justify-content-between">
                <div>
                  {{ vaga.titulo }}
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="favoritarVaga(vaga.id, $event)"
                  >
                    <i :class="alterarIconFavoritada(vaga.favoritada)"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>{{ vaga.descricao }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              Salário: R$ {{ vaga.salario }} | Modalidade:
              {{ vaga.modalidade }} | Tipo: {{ vaga.getTipo }} | Publicação:
              {{ vaga.publicacao }}
            </small>
          </div>
        </div>
        <!-- <VagaCard v-bind="vaga" /> -->
      </div>
    </div>
    <!-- End - VagaCard -->

    <PaginacaoVagasVue class="w-100 bg-light" @paginacao="paginacao($event)" />
  </section>
</template>

<script>
import PaginacaoVagasVue from "./PaginacaoVagas.vue";

export default {
  name: "ListaVagas",
  components: {
    PaginacaoVagasVue,
    // VagaCard,
  },
  data() {
    return {
      vagas: [],
      vagasTotal: [],
      favoritadaIcon: false,
      pagAtual: "",
      pagAtualizacao: 0,
    };
  },

  mounted() {
    this.pagAtualizacao = 1;

    this.emitter.on("filtarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      const vagasFiltradas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
      this.vagasTotal = vagasFiltradas;
    });

    this.emitter.emit("atualizarPag", 1);

    this.emitter.on("paginacao", (vagas) => {
      this.paginacao(vagas);
    });
  },

  activated() {
    this.vagasTotal = JSON.parse(localStorage.getItem("vagas"));
    this.emitter.emit("favoritarVaga");
  },

  methods: {
    isFavoritada(boolFavoritada) {
      this.emitter.emit("favoritarVaga");
      this.favoritadaIcon = boolFavoritada;
      return this.alterarIconFavoritada();
    },

    favoritarVaga(id, event) {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      vagas.map((vaga) => {
        if (vaga.id === id) {
          vaga.favoritada = !vaga.favoritada;
        }
      });

      localStorage.setItem("vagas", JSON.stringify(vagas));

      this.pagAtualizacao = +this.pagAtual;

      this.emitter.emit("atualizarPag", this.pagAtualizacao);
      this.emitter.emit("favoritarVaga");

      if (
        event.target.className == "btn btn-danger" &&
        event.target.children[0].className == "bi bi-heart-fill"
      ) {
        return (event.target.children[0].className = "bi bi-heart");
      }

      if (
        event.target.className == "btn btn-danger" &&
        event.target.children[0].className == "bi bi-heart"
      ) {
        return (event.target.children[0].className = "bi bi-heart-fill");
      }
    },

    alterarIconFavoritada(favoritada) {
      return favoritada ? "bi bi-heart-fill" : "bi bi-heart";
    },

    paginacao(vagas) {
      this.vagas = vagas.result;
      this.pagAtual = vagas.pagAtual;
    },
  },
};
</script>
