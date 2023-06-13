<template>
    <div class="container">
        <h1>Resultados:</h1>
        <div class="resultados">
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
            <perfilCard/>
        </div>
    </div>
</template>

<script>
import perfilCard from '../common/perfilCard.vue';

export default {
    name: 'ResultadosBusca',
    components: {
        perfilCard
    }
}
</script>

<style scoped>
    .resultados {
        width: 75%; /* Ocupa 75% da largura disponível */
        height: 100%; /* Ocupa toda a altura disponível */
        float: right; /* Alinha à direita */
    }

    .container {
        background-color: rgba(29, 36, 45, 0.84);
        color: white;
        border-radius: 20px;
        padding: 1rem;
        margin: 10px;
    }

    h1 {
        font-size: 47px;
    }

    .resultados .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
</style>
