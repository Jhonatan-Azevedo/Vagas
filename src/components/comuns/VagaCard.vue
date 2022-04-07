<template>
  <div>
    <div class="card">
      <div class="card-header bg-dark text-white">
        {{ titulo }}
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
};
</script>

<style>
</style>