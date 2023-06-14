<template>
    <div class="container">
        <CalendarioUser/>
        <h1>Olá!</h1>
    </div>
</template>

<script>
    import CalendarioUser from '../components/Calendario/Calendario.vue'

    export default {
        name: 'CalendarioView',
        components: {
            CalendarioUser
        }
    }
</script>

<style scoped>
    h1 {
        color: white;
        font-size: 50px;
    }
</style>