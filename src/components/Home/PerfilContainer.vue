<template>
    <div class="container">
        <div class="scrollable-wrapper">
        <div class="cards-wrapper">
            <PerfilCard v-for="item in users" :key="item.id" :nome="item.nome" :avaliacao="item.avaliacao" />
        </div>
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

    .scrollable-wrapper {
        overflow-x: scroll; 
        scrollbar-width: thin; 
        scrollbar-color: rgba(255, 255, 255, 0.5) transparent; 
    }

    .scrollable-wrapper::-webkit-scrollbar {
        height: 8px; 
    }

    .scrollable-wrapper::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 4px; 
    }

    .cards-wrapper {
        display: inline-flex; 
        gap: 10px; 
        padding: 10px; 
    }
</style>