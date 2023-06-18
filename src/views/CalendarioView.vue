<template>
    <div class="container">
        <HeaderCal/>
        <CalendarioUser/>
    </div>
</template>

<script>
    import CalendarioUser from '../components/Calendario/Calendario.vue'
    import HeaderCal from '../components/Calendario/HeaderCalendar.vue'

    export default {
        name: 'CalendarioView',
        components: {
            HeaderCal,
            CalendarioUser
        }
    }
</script>

<style scoped>
    
</style>