<template>
    <div class="Home">
        <div class="avaliados">
            <h1>Profissionais mais bem avaliados</h1>
            <PerfilContainer/>
        </div>
        <div class="perto">
            <h1>Profissionais perto de você!</h1>
            <PerfilContainer/>
        </div>
    </div>
</template>

<script>
    import PerfilContainer from './PerfilContainer.vue';

    export default {
        name: 'HomePage',
        components: {
            PerfilContainer
        }
    }
</script>

<style scoped>
    body {
        background-color: black;
    }

    .avaliados, .perto {
        min-width: 75%;
        display: flex;
        flex-direction: column; /* Alinha os itens verticalmente */
        justify-content: center; /* Centraliza verticalmente */
        align-items: center; /* Centraliza horizontalmente */
    }
</style>