<template>
    <div class="container">
        <BuscaPerfil/>
        <FiltroBusca/>
        <ResultadosBusca/>
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

</style>