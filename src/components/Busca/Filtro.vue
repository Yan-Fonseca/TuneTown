<template>
    <div class="filtro">
        <h2>Filtrar Busca</h2>
        <div class="info">
            <form>
                <div class="form-group">
                    <label for="selecao">Estado:</label>
                    <select v-model="selectedOption" id="selecao">
                        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade">
                </div>
                <div class="form-group">
                    <label for="genero">Gênero musical:</label>
                    <input type="text" id="genero">
                </div>
                <div class="form-group">
                    <label for="profissao">Profissão:</label>
                    <input type="text" id="profissao">
                </div>
                <div class="form-group">
                    <label for="avaliacao">Avaliação:</label>
                    <input type="text" id="avaliacao">
                </div>

                <button class="buscar">Buscar</button>
            </form>
        </div>
    </div>
</template>

<script>
import {estados} from "@/scripts/data.js"

export default {
    name: 'FiltroBusca',
    data() {
        return {
            selectedOption: null,
            options: estados
        };
    }
}
</script>

<style scoped>
    .filtro {
        background-color: rgba(29, 36, 45, 0.84);
        color: white;
        height: 100%; 
        float: left; 
        margin: 10px;
    }

    form {
        display: grid;
        grid-template-columns: 1fr; 
        gap: 1rem; 
        padding: 1rem;
    }

    .form-group {
        display: flex;
        align-items: center;
    }

    label {
        margin-right: 0.5rem;
    }

    .buscar {
        margin-top: 1rem;
        align-self: flex-start; /* Alinha o botão à esquerda */
    }
</style>