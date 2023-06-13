<template>
    <div class="header">
        <img class="logo" src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
        <form action="">
            <input type="search" class="busca">
            <button id="botao">Buscar</button>
        </form>
        <div class="icon">
            <img class="icon-home" src="../../assets/icons/HomeIcon.png" alt="">
            <img src="../../assets/imgs/perfil.png" alt="perfil" class="icon-perfil">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuscaPerfil'
}
</script>

<style scoped>
    .header {
        background-color: rgba(23, 36, 52, 1);
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo {
        width: 68px;
        height: 72px;
    }

    .busca {
        background-color: rgba(83, 87, 103, 0.76);
        width: 40vh;
        height: 3vh;
    }

    #botao {
        background-color: rgba(42, 52, 62, 1);
        color: white;
        height: 3vh;
    }

    .icon-home {
        width: 40px;
        height: 40px;
    }

    .icon-perfil {
        width: 40px;
        height: 40px;
    }

</style>