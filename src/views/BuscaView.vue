<template>
    <div class="container">
        <BuscaPerfil/>
        <FiltroBusca/>
    </div>
</template>

<script>
    import BuscaPerfil from "../components/Busca/Busca.vue"
    import FiltroBusca from "../components/Busca/Filtro.vue"

    export default {
        name: 'BuscaView',
        components: {
            BuscaPerfil,
            FiltroBusca
        }
    }
</script>

<style scoped>

</style>