<template>
  <div>
    <div class="h-100 p-5 bg-light border rounded-3">
      <h2>Pesquisar Vagas</h2>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Título da Vaga</label>
            <input
              type="text"
              class="form-control"
              v-model="titulo"
              placeholder="Pesquise por pavalas chaves. Ex: 'C#', 'java', 'node', 'PHP'"
              @keyup.enter="pesquisarVaga()"
            />
            <small class="form-text text-muted"
              >Informe palavras que estejam relacionadas ao título que você
              procura</small
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn btn-outline-dark mt-2" @click="pesquisarVaga()">
            Buscar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisarVaga",
  data() {
    return {
      titulo: "",
    };
  },

  activated() {
    this.titulo = "";
  },

  methods: {
    pesquisarVaga() {
      this.emitter.emit("filtarVagas", { titulo: this.titulo });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>