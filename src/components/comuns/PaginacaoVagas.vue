<template>
  <section>
    <nav class="w-100 my-3 bg-light d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="this.atualizarLista(1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li
          class="page-item"
          v-for="(vaga, index) in numeroPaginacao"
          :key="index"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="proximaPagina($event)"
          >
            {{ index + 1 }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="this.atualizarLista(numeroPaginacao.length)"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "PaginacaoVagas",

  data() {
    return {
      vagas: [],
      numeroPaginacao: 0,
      vlrAnteriosatualizarPagina: 0,
      listVagas: [],
    };
  },

  watch: {},

  activated() {
    let count = 0;
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
    this.vagas.forEach(() => {
      console.log();
      count++;
    });

    this.numeroPaginacao = count / 3;
    const numeroPagAux = Math.ceil(this.numeroPaginacao);
    this.numeroPaginacao = [];

    for (let i = 1; i <= numeroPagAux; i++) {
      this.numeroPaginacao.push(i);
    }
  },

  mounted() {
    this.emitter.on("atualizarPag", (pag) => {
      this.atualizarLista(pag);
    });
  },

  methods: {
    paginacao(items, pagAtual, limitItens) {
      let result = [];
      const totalPage = Math.ceil(items.length / limitItens);
      let count = pagAtual * limitItens - limitItens;
      let delimitador = count + limitItens;

      if (pagAtual <= totalPage) {
        for (let i = count; i < delimitador; i++) {
          if (items[i] != undefined) {
            result.push(items[i]);
            count++;
          }
        }
      }

      return { result, pagAtual };
    },

    proximaPagina(e) {
      let proximaPage = e.target.textContent || 1;

      this.$emit("paginacao", this.paginacao(this.listVagas, proximaPage, 3));
    },

    atualizarLista(pag) {
      this.listVagas = JSON.parse(localStorage.getItem("vagas"));
      this.$emit("paginacao", this.paginacao(this.listVagas, pag, 3));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>