<template>
    <div class="container">
        <BuscaPerfil/>
        <div class="content">
            <FiltroBusca/>
            <ResultadosBusca/>
        </div>
    </div>
</template>

<script>
    import BuscaPerfil from "../components/Busca/Busca.vue"
    import FiltroBusca from "../components/Busca/Filtro.vue"
    import ResultadosBusca from "@/components/Busca/Resultados.vue";

    export default {
        name: 'BuscaView',
        components: {
            BuscaPerfil,
            FiltroBusca,
            ResultadosBusca
        }
    }
</script>

<style scoped>
    .container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh; 
}

.content {
    display: grid;
    grid-template-columns: 25% 75%;
}
</style>
