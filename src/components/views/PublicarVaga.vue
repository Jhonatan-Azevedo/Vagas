<template >
  <section class="w-100 d-flex justify-content-center align-items-center">
    <div class="corpo-publicar-vagas bg-light container p-5 rounded">
      <div class="row">
        <div class="col">
          <h4>
            Apresente a sua vaga para milhares de profissionais e de graça!
          </h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Título da vaga</label>
          <input type="text" class="form-control" v-model="titulo" />
          <div class="form-text">
            Por exemplo: Progamador JavaScript e VueJS.
          </div>
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

      <div
        class="campo-select d-flex justify-content-center flex-row mt-3 w-100"
      >
        <div class="mx-1">
          <label class="form-label">Salário</label>
          <input type="number" class="form-control" v-model="salario" />
          <div class="form-text">Informe o salário da vaga.</div>
        </div>

        <div class="mx-1">
          <label class="form-label">Modalidade</label>
          <select class="form-select custom-color-input" v-model="modalidade">
            <option value="" disabled selected>Selecione a modalidade</option>
            <option value="1">Home Office</option>
            <option value="2">Presencial</option>
            <option value="3">Híbrido</option>
          </select>
          <div class="form-text">
            Informe onde as atividades serão realizadas.
          </div>
        </div>

        <div class="mx-1">
          <label class="form-label">Tipo</label>
          <div class="form-check mx-1 d-flex">
            <div class="w-50">
              <input
                class="form-check-input"
                type="radio"
                name="tipoVaga"
                value="1"
                v-model="tipo"
              />
              <label class="form-check-label"> CLT </label>
            </div>
            <div class="w-50">
              <input
                class="form-check-input custom-color-input"
                type="radio"
                name="tipoVaga"
                value="2"
                v-model="tipo"
              />
              <label class="form-check-label"> PJ </label>
            </div>
          </div>
          <div class="form-text">Informe o tipo de contratação.</div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Nome da empresa:</label>
          <input type="text" class="form-control" v-model="nomeEmpresa" />
          <div class="form-text">Por exemplo: Encontre vagas LTDA.</div>
        </div>
        <div class="col">
          <label class="form-label">Upload do logo da empresa:</label>
          <input
            id="uploadfoto"
            class="form-control"
            type="file"
            @change="uploadFoto($event)"
          />
          <div class="form-text">Não obrigatório.</div>
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
  </section>
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
      nomeEmpresa: "",
      fotoEmpresa: "",
    };
  },

  watch: {
    tipo(newValue) {
      console.log(newValue);
    },
  },

  activated() {
    this.resetaFormularioCadastroVaga();
  },

  methods: {
    salvarVaga() {
      let id;
      let vagas = JSON.parse(localStorage.getItem("vagas"));
      if (!vagas) {
        vagas = [];
        id = 1;
      } else {
        id = vagas[vagas.length - 1].id + 1;
      }

      let tempoDecorrido = Date.now();
      let dataAtual = new Date(tempoDecorrido);

      let vaga = {
        id,
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString(),
        favoritada: false,
        nomeEmpresa: this.nomeEmpresa,
        fotoEmpresa: this.fotoEmpresa,
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
      this.nomeEmpresa = "";
      this.fotoEmpresa = "";
      document.querySelector("#uploadfoto").value = "";
    },

    validaFormulario() {
      let valido = true;
      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;
      if (this.nomeEmpresa === "") valido = false;

      return valido;
    },

    uploadFoto(event) {
      let files = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.fotoEmpresa = e.target.result;
      };

      reader.readAsDataURL(files);
    },
  },
};
</script>


<style scoped>
section {
  margin-top: 60px;
  height: calc(100vh - 110px);
}

.btn-primary {
  background: #17456b !important;
  border-color: #17456b !important;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #0f1d2b !important;
  border-color: #0f1d2b !important;
}

.campo-select > div {
  width: 33%;
}

@media screen and (max-width: 580px) {
  section {
    display: block;
    margin-top: 10%;
  }

  corpo-publicar-vagas {
    width: 98%;
  }

  .campo-select {
    flex-direction: column !important;
  }

  .campo-select > div {
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  section {
    margin-top: 20%;
  }
}
</style>