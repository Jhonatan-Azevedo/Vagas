<template>
  <div class="container mt-3 py-4 bg-light">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vafa para milhates de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da vaga</label>
        <input type="text" class="form-control" />
        <div class="form-text">Por exemplo: Progamador JavaScript e VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea type="text" class="form-control"></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" />
        <div class="form-text">Informe o salário da vaga.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select">
          <option disabled selected>Selecione a modalidade</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
          <option value="3">Híbrido</option>
        </select>
        <div class="form-text">
          Informe onde as atividades serão realizadas.
        </div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select">
          <option disabled selected>Selecione o tipo</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
};
</script>

<style lang="scss" scoped>
</style>