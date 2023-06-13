<template>
    <div class="corpo">
        <LoginHeader />
        <LoginComp />
        <LoginFooter />
      

    </div>
  </template>
  
  <script>
  import LoginComp from "@/components/Login/Login.vue";
  import LoginHeader from "@/components/LoginHeader/LoginHeader.vue";
  import LoginFooter from "@/components/LoginFooter/LoginFooter.vue";
  
  
  export default {
    name: 'LoginView',
    components: {
      LoginComp,
      LoginHeader,
      LoginFooter
    }
  }
  </script>
  
  <style scoped>
  .corpo {
    background-image: url("../assets/imgs/fundo_login.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  * {
    

    font-family: 'Arapey', serif;
  }
 
  
  </style>
  
  