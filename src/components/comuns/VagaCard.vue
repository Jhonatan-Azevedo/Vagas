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
          Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo:
          {{ tipo }} | Publicação: {{ dtPublicacao }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagaCard",
  props: {
    titulo: String,
    descricao: String,
    salario: [Number, String],
    modalidade: String,
    tipo: String,
    dtPublicacao: String,
  },
};
</script>

<style>
</style>