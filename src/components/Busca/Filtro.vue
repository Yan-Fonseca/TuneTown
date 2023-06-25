<template>
  <div class="filtro">
    <h2>Filtrar Busca</h2>
    <div class="info">
      <form>
        <div class="form-group">
          <div class="label-wrapper">
            <label for="selecao">Estado:</label>
          </div>
          <div class="input-wrapper">
            <select v-model="selectedOption" id="selecao" :class="[selectedOption !== null ? 'custom-background' : '', 'custom-select']">
              <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="label-wrapper">
            <label for="cidade">Cidade:</label>
          </div>
          <div class="input-wrapper">
            <input type="text" id="cidade" :class="{ 'custom-background': cidadeFilled }" @input="cidadeFilled = $event.target.value !== ''" v-model="cidade">
          </div>
        </div>
        <div class="form-group">
          <div class="label-wrapper">
            <label for="genero">Gênero musical:</label>
          </div>
          <div class="input-wrapper">
            <input type="text" id="genero" :class="{ 'custom-background': generoFilled }" @input="generoFilled = $event.target.value !== ''" v-model="genero">
          </div>
        </div>
        <div class="form-group">
          <div class="label-wrapper">
            <label for="profissao">Profissão:</label>
          </div>
          <div class="input-wrapper">
            <input type="text" id="profissao" :class="{ 'custom-background': profissaoFilled }" @input="profissaoFilled = $event.target.value !== ''" v-model="profissao">
          </div>
        </div>
        <div class="form-group">
          <div class="label-wrapper">
            <label for="avaliacao">Avaliação:</label>
          </div>
          <div class="rating-filter">
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5">&#9733;</label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4">&#9733;</label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3">&#9733;</label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2">&#9733;</label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1">&#9733;</label>
           </div>
        </div>

        <button class="buscar" @click="realizarBusca">Buscar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { estados } from "@/scripts/data.js";

export default {
  name: "FiltroBusca",
  data() {
    return {
      selectedOption: null,
      options: estados,
      optionFilled: false,
      cidadeFilled: false,
      generoFilled: false,
      profissaoFilled: false,
      cidade: '',
      genero: '',
      profissao: ''
    };
  },

  watch: {
    selectedOption(newValue) {
      this.optionFilled = newValue !== '';
    }
  },
  methods: {
    realizarBusca() {
      const dados = {
        cidade: this.cidade,
        estado: this.selectedOption,
        profissao: this.profissao,
        genero: this.genero
      };

      this.$emit('buscarUsuarios', dados);
    }
  }
};
</script>

<style scoped>

.filtro {
  background-color: rgba(29, 36, 45, 0.84);
  color: white;
  height: 100%;
  width: 95%;
  float: left;
  margin: 10px;
  padding: 5px;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  margin-top: 5px;
}

label {
  margin-right: 0.5rem;
  font-size: 0.8rem;
}

input {
    background-color: #5870827a;
    color: white;
    border-radius: 10px;
    height: 3vh;
    width: 100%;
    margin-top: 10px;
}

select {
    margin-top: 10px;
    height: 4vh;
    float: right;
}
.form-group {
  display: grid; /* Altera para grid */
  grid-template-columns: 1fr auto; /* Divide em duas colunas, uma com tamanho flexível e outra com tamanho automático */
  gap: 1rem;
  align-items: center; /* Centraliza verticalmente os elementos dentro de cada form-group */
}

.input-wrapper {
  display: flex; /* Adiciona flex para alinhar os elementos na coluna automática */
  justify-content: flex-end; /* Alinha os elementos à direita */
  align-items: center; /* Centraliza verticalmente o conteúdo */
}

.input-wrapper input,
.input-wrapper select {
  flex: 1; /* Ocupa o espaço disponível */
}

.form-group label {
  margin-top: 7px;
  display: flex;
  align-items: center;
  height: 100%;
}

.label-wrapper {
  display: flex;
  align-items: center;
}

.custom-background {
  background-color: #5870827a;
  color: white;
}

.buscar {
  margin-top: 1rem;
  color: white;
  margin-top: 5px;
  margin-left: 2px;
  border-radius: 8px;
  align-self: flex-start; /* Alinha o botão à esquerda */
  background-color: #1f5b86ce;
}

.custom-select {
  background-color: #5870827a;
  border-radius: 10px;
}

.custom-select option {
  background-color: #5870827a;
}

.rating-filter {
  font-size: 24px;
  text-align: left;
  display: flex;
  direction: rtl;
  justify-content: flex-start;
}

.rating-filter input {
  display: none;
}

.rating-filter label {
  color: gray;
  cursor: pointer;
}

.rating-filter label:hover,
.rating-filter input:checked ~ label {
  color: gold; /* Altera a cor das estrelas para dourado */
}

</style>
