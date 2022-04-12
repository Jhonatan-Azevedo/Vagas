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
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Progamador JavaScript e VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea
          type="text"
          class="form-control"
          v-model="descricao"
        ></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário da vaga.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="" disabled selected>Selecione a modalidade</option>
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
        <select class="form-select" v-model="tipo">
          <option value="" disabled selected>Selecione o tipo</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga",
  data() {
    return {
      titulo: "",
      descricao: "",
      salario: "",
      modalidade: "",
      tipo: "",
    };
  },

  methods: {
    salvarVaga() {
      let vagas = JSON.parse(localStorage.getItem("vagas"));
      if (!vagas) vagas = [];

      let tempoDecorrido = Date.now();
      let dataAtual = new Date(tempoDecorrido);

      let vaga = {
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString(),
      };

      vagas.push(vaga);

      localStorage.setItem("vagas", JSON.stringify(vagas));

      this.emitter.emit("alerta", {
        titulo: `Parabéns, vaga cadastrada com sucesso!`,
        descricao: `Vaga: ${this.titulo}`,
      });
      this.resetaFormularioCadastroVaga();
    },

    resetaFormularioCadastroVaga() {
      this.titulo = "";
      this.descricao = "";
      this.salario = "";
      this.modalidade = "";
      this.tipo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>