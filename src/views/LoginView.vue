<template>
    <div class="corpo">
        <LoginComp />
    </div>
  </template>
  
  <script>
  import LoginComp from "@/components/Login/Login.vue";
  
  export default {
    name: 'LoginView',
    components: {
      LoginComp
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
    justify-content: center;
    align-items: center;
  }
  
  .login {
    width: 648px;
    height: 610px;
    background: rgba(36, 56, 81, 0.84);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  </style>
  
  