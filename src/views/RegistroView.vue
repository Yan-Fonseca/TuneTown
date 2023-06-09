<template>
    <div class="corpo">
        <RegistroComp/>
    </div>
</template>

<script>
import RegistroComp from '@/components/Registro/Registro.vue'

export default {
    name: 'RegistroVue',
    components: {
        RegistroComp
    }
}
</script>

<style scoped>
    .corpo {
        background-image: url("../assets/imgs/fundo_registro.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
        margin: 0px;
    }
</style>