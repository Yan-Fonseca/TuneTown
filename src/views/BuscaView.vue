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
        grid-template-rows: auto 1fr; /* A primeira linha se ajusta ao conteúdo, a segunda ocupa o restante da altura */
        height: 100vh; /* Define a altura total da página */
    }

    .content {
        display: grid;
        grid-template-columns: minmax(200px, 1fr) 1fr; /* Define a largura do FiltroBusca e ResultadosBusca */
    }
</style>
