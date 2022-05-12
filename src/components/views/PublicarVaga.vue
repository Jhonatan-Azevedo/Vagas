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
          <i class="bi bi-box-arrow-down"></i> Cadastrar
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
        favoritada: false,
      };

      vagas.push(vaga);

      if (this.validaFormulario()) {
        localStorage.setItem("vagas", JSON.stringify(vagas));
        this.emitter.emit("alerta", {
          icon: "success",
          text: `Parabéns, vaga cadastrada com sucesso! :) <br /> Vaga: ${this.titulo}`,
          descricao: ``,
        });
        this.resetaFormularioCadastroVaga();
      } else {
        this.emitter.emit("alerta", {
          icon: "error",
          text: `Opsss... Não foi possível realizar o cadastro! :( <br /> Preencha todos os campos.`,
        });
      }
    },

    resetaFormularioCadastroVaga() {
      this.titulo = "";
      this.descricao = "";
      this.salario = "";
      this.modalidade = "";
      this.tipo = "";
    },

    validaFormulario() {
      let valido = true;
      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;

      return valido;
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background: #17456b !important;
  border-color: #17456b !important;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #0f1d2b !important;
  border-color: #0f1d2b !important;
}
</style>