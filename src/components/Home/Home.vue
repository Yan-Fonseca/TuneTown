<template>
    <div class="Home">
      <div class="avaliados">
        <h1>Profissionais mais bem avaliados</h1>
        <PerfilContainer/>
      </div>
      <div class="perto">
        <h1>Profissionais perto de você!</h1>
        <PerfilContainer/>
      </div>
    </div>
  </template>
  
  <script>
  import PerfilContainer from './PerfilContainer.vue';
  
  export default {
    name: 'HomePage',
    components: {
      PerfilContainer
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: black;
  }
  
  .Home {
    display: flex;
    flex-direction: column; /* Alinha os containers verticalmente */
    align-items: center; /* Centraliza horizontalmente */
  }
  
  .avaliados,
  .perto {
    width: 75%;
    margin-bottom: 20px; /* Adiciona um espaço entre os containers */
    margin-top: 20px;
  }

  h1 {
    font-size: 50px;
    color: white;
  }
  </style>
  