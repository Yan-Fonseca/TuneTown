<template>
    <div class="header">
        <img class="logo" src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
        <form id="search" action="">
            <input type="search" class="busca">
            <button id="botao" type="submit">Buscar</button>
        </form>
        <div class="icon">
            <div id="links">
                <a class="home" @click="inicio"><img class="icon-home" src="../../assets/icons/HomeIcon.png" alt=""></a>
                <a class="perfil" @click="navegarPerfil"><img src="../../assets/imgs/perfil.png" alt="perfil" class="icon-perfil"></a>
            </div>
            
        </div>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'BuscaPerfil',

    methods: {
    inicio(){
      router.push('/#')
    },
    navegarPerfil(){
        router.push('/Perfil')
    }
}
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
        width: 80vh;
        height: 5.1vh;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    #botao {
        background-color: rgba(42, 52, 62, 1);
        color: white;
        height: 5vh;
        width: 60px;
        margin-left: 1px;
    }

    #links{
        margin-left: 240px;
    }

    #search {
        margin-left: 320px;
    }
    .icon-home {
        width: 40px;
        height: 40px;
        padding-right: 10px;
    }

    .icon-perfil {
        width: 40px;
        height: 40px;
        margin-left: 10px;
    }

    

</style>