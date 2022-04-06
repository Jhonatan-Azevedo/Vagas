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
              placeholder="Pesquise por pavalas chaves. Ex: 'C#', 'java', 'node', 'PHP'"
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
          <button class="btn btn-outline-dark mt-2">Buscar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisarVaga",
};
</script>

<style lang="scss" scoped>
</style>