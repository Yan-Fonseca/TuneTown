<template>
    <div class="container">
        <PerfilCard/>
        <PerfilCard/>
        <PerfilCard/>
        <PerfilCard/>
    </div>
</template>

<script>
    import PerfilCard from "../common/perfilCard.vue"

    export default {
        name: 'PerfilContainer',
        components: {
            PerfilCard
        }
    }
</script>

<style scoped>
    .container {
        background-color: rgba(42, 52, 62, 1);
        border-radius: 20px;
        display: flex; /* Adicionado para usar flexbox */
        flex-direction: row; /* Alinha os itens verticalmente */
        justify-content: center; /* Centraliza verticalmente */
        align-items: center; /* Centraliza horizontalmente */

        margin-bottom: 20px;
        margin-top: 20px;

        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>