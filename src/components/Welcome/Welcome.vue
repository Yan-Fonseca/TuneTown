<template>
    <div class="login">
      <div class="marca">
        <img src="../../assets/imgs/logott2.png" alt="logo TuneTown">                
        <h3>Welcome!</h3>
      </div>
      <div>
        <button class="btn" @click="goHome">Comece Já</button>
      </div>
    </div>    
  </template>

<script>
export default {
  name: 'WelcomeComp',
  methods:{
    goHome(){
        this.$router.push('/');
    }
  }
} 
</script>
  
  <style scoped>
  .login {
    margin-right: 200px;
    width: 648px;
    height: 610px;
    background: #1D242D;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;

  }
  
  .marca {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border-radius: 20px;

  }
  
  h3 {
    font-family: Arapey;
    font-size: 70px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin-top: 20px;
  }
  .btn {
    font-size: 40px;
    color: #ffffff;
    background: #E33FC9;
    border-radius: 7px;
    justify-content: center;
    width: 302px;
    height: 94px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5px;
  }
  img {
    margin-bottom: 20px;
    width: 342px;
    height: 313px;
  }
  </style>

  
  