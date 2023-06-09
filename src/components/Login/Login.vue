<template>
    <div class="login">
      <div class="marca">
        <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
      </div>
      <h3>A Sua Vitrine Musical</h3>
      <div class="form">
        <form action="">
          <div class="input-container">
            <input type="text" placeholder="Email">
          </div>
          <div class="input-container">
            <input type="password" placeholder="Senha">
          </div>
          <button class="btn">Login</button>
        </form>
      </div>
    </div>    
  </template>

<script>
    export default {
        name: 'LoginComp'
    }
</script>
  
  <style scoped>
  .login {
    position: absolute;
    width: 648px;
    height: 610px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  
    background: rgba(36, 56, 81, 0.84);
    border-radius: 20px;
  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  
  .marca {
    margin-top: 20px;
  }
  
  h3 {
    font-family: Arapey;
    font-size: 24px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin-top: 20px;
  }
  
  .form {
    margin-top: 20px;
  }
  
  input {
    width: 323px;
    height: 39px;
    background: rgba(217, 217, 217, 0.8);
    border-radius: 7px;
  }
  
  .btn {
    background: #E33FC9;
    border-radius: 7px;
    justify-content: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5px;
  }
  
  form {
    width: 100%;
  }
  
  img {
    width: 125px;
    height: 133px;
  }
  </style>
