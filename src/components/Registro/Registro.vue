<template>
  <div class="Registro">
    <div class="top">
      <div class="logo">
        <img src="../../assets/imgs/logo_TuneTown.png" alt="Logo">
        <h1>TuneTown</h1>
      </div>
      <h2>Inscreva-se grátis e viva a música</h2>
    </div>
    <div class="form-box">
      <form @submit.prevent="enviarFormulario">
        <div class="test">
        <div class="formP">
          <label for="email">Qual é o seu Email?</label>
          <input type="text" id="email" placeholder="Insira o seu email" class="input-large" v-model="email">

          <label for="senha">Crie uma senha</label>
          <input type="password" id="senha" placeholder="Crie uma senha" class="input-large" v-model="senha">

          <label for="repSenha" id="formPlabel">Repita a sua senha</label>
          <input type="password" id="repSenha" placeholder="Repita a senha" class="input-large" v-model="repSenha">

          <label for="nome">Como devemos te chamar?</label>
          <input type="text" id="nome" placeholder="Insira o seu nome de perfil" class="input-large" v-model="nome">
          <p> Isso aparece no seu perfil.</p>
       
        <div class="row">
          <div class="column">
            <label for="selecao">Estado:</label>
            <select v-model="selectedOption" id="selecao">
                <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="column">
            <label for="cidade">Cidade: </label>
            <input type="text" id="cidade" placeholder="Insira a cidade" class="input-small" v-model="cidade">
          </div>
        </div>
        <div class="column">
            <label for="dataNascimento">Data de Nascimento</label>
            <VueDatePicker v-model="dataNascimento" model-type="dd.MM.yyyy" :dark="true"></VueDatePicker>
          </div>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="musico" v-model="musico">
          <label for="musico">Criar perfil como profissional musical</label>
        </div>
        <div class="checkbox2">
          <input type="checkbox" id="termos" v-model="termos">
          <label for="termos">Eu concordo com os<p class="text4"></p><a class="Login" @click=navegar> Termos de Uso da TuneTown.</a></label>
        </div>
        <p class="text3">Para saber mais sobre como a TuneTown coleta, utiliza, compartilha e protege</p>
        <p class="text2">seus dados pessoais leia a 
          <a class="Login" @click=navegar>Política de Privacidade da TuneTown.</a>
        </p>
        <button class="btn" type="submit">Inscreva-se</button>
        <p class="text">Já tem uma conta? 
        <a class="Login" @click=navegar>Faça Login.</a>
        </p>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import { estados } from "@/scripts/data.js";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { registerUser, createUserData } from '@/firebase';

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
      musico: false,
      termos: false
    }
  },
  methods: {
    navegar() {
      this.$router.push('/Login');
    },
    async enviarFormulario() {
      let data = {
        nome: this.nome,
        email: this.email,
        dataNascimento: this.dataNascimento,
        estado: this.options[this.selectedOption - 1].label,
        cidade: this.cidade,
        profissional: this.musico,
        biografia: '',
        telefone: '',
        trabalho: ''
      };

      try {
        await registerUser(this.email, this.senha);
        await createUserData(data);
      } catch (error) {
        console.log('erro: ', error);
      }
    }
  }
}
</script>

<style scoped>
.dp__theme_dark {
   --dp-background-color: rgba(217, 217, 217, 0.47);
   --dp-text-color: #ffffff;
   --dp-hover-color: #484848;
   --dp-hover-text-color: #ffffff;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #005cb2;
   --dp-primary-text-color: #ffffff;
   --dp-secondary-color: #a9a9a9;
   --dp-border-color: #2d2d2d;
   --dp-menu-border-color: #2d2d2d;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #737373;
   --dp-scroll-bar-background: #212121;
   --dp-scroll-bar-color: #484848;
   --dp-success-color: #00701a;
   --dp-success-color-disabled: #428f59;
   --dp-icon-color: #959595;
   --dp-danger-color: #e53935;
   --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
.text{
  margin-left: 70px;
  font-size: 20px;
  margin-top: 10px;
}
.text2{
  margin-top: 5px;
  margin-left: 45px;
}
.text4{
  margin-left: 10px;
}
.text3{
  margin-left: 20px;
}
.test{
  margin-left: 100px;
  margin-right: 100px;
}

.formP{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
}
p{
  color: white;
  font-size: 12px;
}

.input-large {
  width: 400px;
  height: 40px;
  background-color: rgba(217, 217, 217, 0.47);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 2px;
  
}

.input-small {
  width: 200px;
  height: 40px;
  background-color: rgba(217, 217, 217, 0.47);
  border-radius: 5px;
  margin-bottom: 10px;
}

input::placeholder {
  color: white;
}

label {
  align-self: flex-start;
  font-family: 'Arapey';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  color: #FFFFFF;
  align-items: flex-start;
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
  margin-left: 100px;
}

select {
  background-color: rgba(217, 217, 217, 0.47);
}

.logo {
  display: flex;
  margin-bottom: 10px;
}

.logo img {
  margin-left: 150px;
  width: 125px;
  height: 133px;
}

.top {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-box {
  background: rgba(88, 112, 130, 0.26);
  border-radius: 20px;
  padding: 40px;
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
  margin-bottom: 20px;
}
.checkbox2 {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 20px;
}

.btn {
  margin-top: 10px;
  margin-left: 120px;
  font-size: 20px;
  color: white;
  background: #E33FC9;
  border-radius: 20px;
  justify-content: center;
  width: 40%;
  height: 40px;
}

.Registro{
  margin-left: 100px;
  margin-right: 100px;
}
.Login:hover{
  color: #E33FC9;
  cursor: pointer;
  text-decoration: underline;
}
</style>
