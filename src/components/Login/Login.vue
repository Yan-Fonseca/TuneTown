<template>
    <div class="login">
      <div class="marca">
        <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">                
        <h3>A Sua Vitrine Musical</h3>
      </div>
      
      <div class="form" @submit.prevent="realizarLogin">
        <form action="">
          <div class="input-container">
            <input type="text"  placeholder="Email" v-model="email">
          </div>
          <div class="input-container">
            <input type="password" placeholder="Senha" v-model="senha">
          </div>
          <div>
            <button class="btn">LOGIN</button>
          </div>
        </form>
      </div>
      <div class="midle">
        <div class="checkboox">
            <input type="checkbox" id="ck" name="lembrar" value="lembrar">
            <label for="lembrar">Lembrar-se de mim</label>
        </div>
        <div>
            <p>Precisa de ajuda?</p>
        </div>
     </div>
     <div class="inscrever">
         <p>Novo por aqui? 
          <a class="RegisterButton" @click=navegar>Inscreva-se agora</a>
         
         </p>
     </div>

    </div>    
  </template>

<script>
import router from '@/router'
import {signInUser} from '@/firebase'

export default {
  name: 'LoginComp',
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    navegar(){
      router.push('/Registro');
    },
    async realizarLogin() {
      try {
        await signInUser(this.email,this.senha);
        router.push('/home');
      } catch (error) {
        alert('Erro ao tentar entrar: ' + error);
      }
    }
  },
} 
</script>
  
  <style scoped>
  .inscrever{
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start  !important;
    align-items: center;
    margin-right: 115px;
  }

  .midle{
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #ck{
    margin-right: 4px;
    width: 20px;
  }
  .checkboox{
    display: flex;
    flex-direction: row;
    justify-content: flex-start  !important;
    align-items: center;
    margin-right: 75px;
  }
  .login {
    width: 650px;
    height: 620px;
    background: rgba(36, 56, 81, 0.84);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  }
  
  .marca {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

  }
  .RegisterButton:hover{
    cursor: pointer;
    text-decoration: underline;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
  }
  
  input {
    margin-bottom: 2%;
    width: 323px;
    height: 39px;
    opacity: 0.5;
    color: rgb(255, 255, 255);
    background-color: #414040;
    border-radius: 7px;
  }
  input::placeholder {
    color: rgb(255, 255, 255);
  }
  .btn {
    color: #ffffff;
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
