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
export default {
    name: 'FiltroBusca',
    data() {
        return {
            selectedOption: null,
            options: [
            { value: 1, label: 'Acre' },
            { value: 2, label: 'Alagoas' },
            { value: 3, label: 'Amapá' },
            { value: 4, label: 'Amazonas' },
            { value: 5, label: 'Bahia' },
            { value: 6, label: 'Ceará' },
            { value: 7, label: 'Distrito Federal' },
            { value: 8, label: 'Espírito Santo' },
            { value: 9, label: 'Goiás' },
            { value: 10, label: 'Maranhão' },
            { value: 11, label: 'Mato Grosso' },
            { value: 12, label: 'Mato Grosso do Sul' },
            { value: 13, label: 'Minas Gerais' },
            { value: 14, label: 'Pará' },
            { value: 15, label: 'Paraíba' },
            { value: 16, label: 'Paraná' },
            { value: 17, label: 'Pernambuco' },
            { value: 18, label: 'Piauí' },
            { value: 19, label: 'Rio de Janeiro' },
            { value: 20, label: 'Rio Grande do Norte' },
            { value: 21, label: 'Rio Grande do Sul' },
            { value: 22, label: 'Rondônia' },
            { value: 23, label: 'Roraima' },
            { value: 24, label: 'Santa Catarina' },
            { value: 25, label: 'São Paulo' },
            { value: 26, label: 'Sergipe' },
            { value: 27, label: 'Tocantins' }
            ]
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