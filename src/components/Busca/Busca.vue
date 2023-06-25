<template>
    <div class="header">
        <div class="logo">
            <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown"> 
            <h1>TuneTown</h1>   
        </div>
        
        <div id="search">
                <input type="search" class="busca">
                <button id="botao" type="submit">Buscar</button>
        </div>
        
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
        display: grid;
        grid-template-columns: 25% 65% 15%;
        flex-direction: row;
        align-items: center;
    }

    .logo img {
        width: 68px;
        height: 72px;
    }

    .logo {
        font-family: Arapey;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        font-size: 25px;
        font-weight: lighter;
    }

 input {
     background-color: rgba(83, 87, 103, 0.76);
     width: 80%;
     height: 5vh;
 }

    #botao {
        background-color: rgba(42, 52, 62, 1);
        color: white;
        height: 5vh;
        width: 60px;
        margin-left: 1px;
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

    a:hover {
        cursor: pointer;
    }

</style>