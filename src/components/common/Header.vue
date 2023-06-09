<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/perfil">Perfil</router-link>
        <router-link to="/search">Buscar</router-link>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderCommon'
}
</script>

<style scoped>
    div {
        display:block;
        width: 100%;
        height: 56px;
        background-color: rgba(36, 56, 81, 0.64);
    }
</style>