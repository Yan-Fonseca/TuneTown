<template>
    <div class="FooterBody">
        <div class="Logo">
            <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
        </div>
        <div class= "links">
            <p>Perguntas Frequentes</p>
            <p>Central de Ajuda</p>
            <p>Termos de Uso</p>
            <p>Privacidade</p>
        </div>
        <div><p>©TuneTown</p></div>
    </div>
  </template>
  
  <script>

    export default {
      name: 'LoginFooter',
    }
  </script>
  
  <style scoped>
    .FooterBody{
        width: 100%;
        background: rgba(36, 56, 81, 0.84);
        font-family: 'Arapey', serif;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .links{
        margin-left: 90px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    p{
        color: #ffffff;
        font-size: 20px;
        margin-right: 30px;
    }

    .Logo img{
        width: 70px;
    }
  </style>
  