<template>
    <div class="corpo">
    <div id="registro-container">
        <WelcomeComp/>
      </div>
    </div>
  </template>
  
  <script>
  import WelcomeComp from '@/components/Welcome/Welcome.vue'
  
  export default {
    name: 'WelcomeView',
    components: {
        WelcomeComp
    }
  }
  </script>
  
  <style scoped>
    #registro-container {
    margin-right: 50px;
    background-color: rgba(0, 3, 22, 1);
    background-color: transparent;
   }
  .corpo {
    background-image: url("../assets/imgs/fundo_registro.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-repeat: no-repeat;
  }
  </style>
  