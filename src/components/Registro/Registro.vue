<template>
    <div class="corpo">
      <div class="top">
        <div class="logo">
          <img src="../../assets/imgs/logo_TuneTown.png" alt="Logo">
          <h1>TuneTown</h1>
        </div>
        <h2>Inscreva-se grátis e viva a música</h2>
      </div>
      <div class="form-box">
        <form @submit.prevent="enviarFormulario">
          <label for="email">Qual é o seu Email?</label>
          <input type="text" id="email" placeholder="Insira o seu email" class="input-large" v-model="email">
  
          <label for="senha">Crie uma senha</label>
          <input type="password" id="senha" placeholder="Crie uma senha" class="input-large" v-model="senha">
  
          <label for="repSenha">Repita a sua senha</label>
          <input type="password" id="repSenha" placeholder="Repita a senha" class="input-large" v-model="repSenha">
  
          <label for="nome">Como devemos te chamar?</label>
          <input type="text" id="nome" placeholder="Insira o seu nome de perfil" class="input-large" v-model="nome">
  
          <div class="row">
            <div class="column">
              <label for="dataNascimento">Data de Nascimento</label>
              <VueDatePicker v-model="dataNascimento"></VueDatePicker>
            </div>
            <div class="column">
              <label for="selecao">Estado:</label>
              <select v-model="selectedOption" id="selecao">
                  <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
              </select>
            </div>
            <div class="column">
              <label for="cidade">Cidade</label>
              <input type="text" id="cidade" placeholder="Insira a cidade" class="input-small">
            </div>
          </div>
  
          <div class="checkbox">
            <input type="checkbox" id="musico">
            <label for="musico">Sou músico</label>
          </div>
  
          <button class="btn" type="submit">Registrar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import {estados} from "@/scripts/data.js";
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    name: 'RegistroComp',
    components: {
      VueDatePicker
    },
    data() {
      return {
        selectedOption: null,
        options: estados,
        email: "",
        senha: "",
        repSenha: "",
        nome: "",
        dataNascimento: null,
        cidade: "",
        musico: false
      }
    }
  }
  </script>
  
  <style scoped>
  .corpo {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 3, 22, 1);
  }
  
  .input-large {
    width: 400px;
    height: 40px;
    background: rgba(217, 217, 217, 0.47);
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .input-small {
    width: 200px;
    height: 40px;
    background: rgba(217, 217, 217, 0.47);
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  input::placeholder {
    color: white;
  }
  
  label {
    font-family: 'Arapey';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  
  h1, h2 {
    font-family: 'Arapey';
    color: white;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  h1 {
    font-size: 47px;
    line-height: 52px;
  }
  
  h2 {
    font-size: 37px;
    line-height: 41px;
  }

  select {
    background-color: rgba(217, 217, 217, 0.47);
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo img {
    width: 125px;
    height: 133px;
  }
  
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .form-box {
    background: rgba(88, 112, 130, 0.26);
    border-radius: 20px;
    padding: 20px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .column {
    flex: 1;
    margin-right: 10px;
  }
  
  .checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .btn {
    background: #E33FC9;
    border-radius: 7px;
    justify-content: center;
    width: 100%;
    height: 40px;
  }
  </style>
  