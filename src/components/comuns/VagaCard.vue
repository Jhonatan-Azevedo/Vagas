<template>
  <div>
    <div class="card">
      <div class="card-header bg-dark text-white">
        <div class="row">
          <div class="col d-flex justify-content-between">
            <div>
              {{ titulo }}
            </div>
            <div>
              <button
                type="button"
                class="btn btn-danger"
                @click="favoritarVaga(index)"
              >
                <i :class="estilo"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p>{{ descricao }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">
          Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
          {{ getTipo }} | Publicação: {{ getPublicacao }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagaCard",

  data() {
    return {
      favoritadaIcon: false,
      estilo: "bi bi-heart",
    };
  },

  props: {
    titulo: {
      type: String,
      required: true,
      validator(p) {
        if (p.length < 6) return false;
        return true;
      },
    },
    descricao: {
      type: String,
      default() {
        return "*".repeat(20);
      },
    },
    salario: {
      type: [Number, String],
      required: true,
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
    favoritada: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    getModalidade() {
      let modalidadeDescricao;
      switch (this.modalidade) {
        case "1":
          modalidadeDescricao = "Home Office";
          break;
        case "2":
          modalidadeDescricao = "Presencial";
          break;
        case "3":
          modalidadeDescricao = "Híbrido";
          break;
      }

      return modalidadeDescricao;
    },

    getTipo() {
      let tipoDescrito;
      switch (this.tipo) {
        case "1":
          tipoDescrito = "CLT";
          break;
        case "2":
          tipoDescrito = "PJ";
          break;
      }

      return tipoDescrito;
    },

    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao);
      return dataPublicacao.toLocaleDateString("pt-BR");
    },
  },

  mounted() {
    this.favoritadaIcon = this.favoritada;
    this.alterarIcon();
  },

  watch: {
    favoritada(newValue) {
      if (newValue) {
        return this.emitter.emit("favoritarVaga", this.titulo);
      }
      return this.emitter.emit("desfavoritarVaga", this.titulo);
    },
  },

  methods: {
    favoritarVaga(index) {
      this.favoritadaIcon = !this.favoritadaIcon;
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      vagas[index].favoritada = this.favoritadaIcon;

      localStorage.setItem("vagas", JSON.stringify(vagas));
      this.alterarIcon();
    },

    alterarIcon() {
      if (this.favoritadaIcon) {
        return (this.estilo = "bi bi-heart-fill");
      }

      return (this.estilo = "bi bi-heart");
    },
  },
};
</script>

<style scoped>
.bg-dark {
  background: #0f1d2b !important;
}
</style>