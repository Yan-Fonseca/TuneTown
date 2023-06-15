<template>
    <div class="container">
        <div class="cards-wrapper">
        <PerfilCard v-for="item in users" :key="item.id" :nome="item.nome" :avaliacao="item.avaliacao" />
        </div>
    </div>
</template>

<script>
    import PerfilCard from "../common/perfilCard.vue"

    export default {
        name: 'PerfilContainer',
        components: {
            PerfilCard
        },
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .container {
        background-color: rgba(42, 52, 62, 1);
        border-radius: 20px;

        margin-bottom: 20px;
        margin-top: 20px;

        padding-top: 10px;
        padding-bottom: 10px;
        overflow-x: auto; 
        white-space: nowrap;

    }

    .cards-wrapper {
        display: inline-flex; /* Utiliza flexbox no eixo X */
        gap: 10px; /* Adiciona um espaço entre os cards */
        padding: 10px; /* Adiciona um espaço interno entre os cards */
    }
</style>