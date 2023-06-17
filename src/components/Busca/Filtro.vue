<template>
  <div class="filtro">
    <h2>Filtrar Busca</h2>
    <div class="info">
      <form>
        <div class="form-group">
          <label for="selecao">Estado:</label>
          <select v-model="selectedOption" id="selecao" :class="[selectedOption !== null ? 'custom-background' : '', 'custom-select']">
            <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" :class="{ 'custom-background': cidadeFilled }" @input="cidadeFilled = $event.target.value !== ''">
        </div>
        <div class="form-group">
          <label for="genero">Gênero musical:</label>
          <input type="text" id="genero" :class="{ 'custom-background': generoFilled }" @input="generoFilled = $event.target.value !== ''">
        </div>
        <div class="form-group">
          <label for="profissao">Profissão:</label>
          <input type="text" id="profissao" :class="{ 'custom-background': profissaoFilled }" @input="profissaoFilled = $event.target.value !== ''">
        </div>
        <div class="form-group">
          <label for="avaliacao">Avaliação:</label>
          <input type="text" id="avaliacao" :class="{ 'custom-background': avaliacaoFilled }" @input="avaliacaoFilled = $event.target.value !== ''">
        </div>

        <button class="buscar">Buscar</button>
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
      avaliacaoFilled: false,
    };
  },

  watch: {
    selectedOption(newValue) {
      this.optionFilled = newValue !== '';
    }
  }
};
</script>

<style scoped>
.filtro {
  background-color: rgba(29, 36, 45, 0.84);
  color: white;
  height: 100%;
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
  padding: 5px;
  position: absolute;
  margin-top: -1.5rem;
  font-size: 0.8rem;
}

input {
    background-color: #5870827a;
    color: white;
    border-radius: 10px;
    height: 3vh;
    margin-top: 20px;
}

select {
    margin-top: 20px;
    height: 4vh;
}
.form-group {
  display: flex;
  align-items: center;
}

.custom-background {
  background-color: #5870827a;
  color: white;
}

.buscar {
  margin-top: 1rem;
  height: 5vh;
  width: 40vh;
  color: white;
  margin-top: 5px;
  margin-left: 2px;
  border-radius: 12px;
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
.info {
  margin-top: 40px;
}
</style>
