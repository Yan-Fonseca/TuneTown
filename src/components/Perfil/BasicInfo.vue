<template>
  <div class="container">
    <div class="info">
      <div class="info-basica">
        <div class="img">
          <img src="../../assets/imgs/perfil.png" alt="imagem de perfil">
          <div class="profile-info">
            <h3>{{ nome }}</h3>
            <p class="id">@id_usuário</p>
          </div>
          <div class="calendar">
            <button @click="acessarCalendario">Calendário</button>
          </div>
        </div>
        <div class="contatos" :style="{ borderColor: corBorda }">
          <h3>Estado: <input v-model="estado" :readonly="true" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Cidade: <input v-model="cidade" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Telefone: <input v-model="telefone" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Email: <input v-model="email" :readonly="true" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
        </div>
      </div>
      <div class="biography">
        <div class="work-info">
          <h3>Trabalho com: {{ trabalho }}</h3>
          <div class="biography-box" :style="{ borderColor: corBorda }">
            <textarea v-model="biografia" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></textarea>
          </div>
        </div>
        <div class="edit">
          <button v-if="autenticado" @click="toggleEdicao">{{ editando ? 'Salvar' : 'Editar' }}</button>
        </div>
      </div>
      <div class="logout">
        <button class="sair" @click="sairDoSistema">Sair</button>
      </div>
    </div>
  </div>
</template>

<script>
import {signOutUser, getCurrentUserEmail} from '@/firebase'
import router from '@/router';

export default {
  name: 'BasicInfo',
  data() {
    return {
      biografia: '',
      nome: '',
      estado: '',
      cidade: '',
      telefone: '',
      email: '',
      trabalho: '',
      editando: false,
      autenticado: false,
      corBorda: 'rgba(29, 36, 45, 0.84)'
    };
  },
  methods: {
    preencherDadosDePerfil(dados) {
      this.nome = dados.nome;
      this.biografia = dados.biografia;
      this.estado = dados.estado;
      this.cidade = dados.cidade;
      this.telefone = dados.telefone;
      this.email = dados.email;
      this.trabalho = dados.trabalho;

      if(getCurrentUserEmail()==this.email) {
        this.autenticado = true;
      }
    },
    acessarCalendario() {
      this.$router.push('/calendario');
    },
    toggleEdicao() {
      this.editando = !this.editando;
      this.corBorda = this.editando ? 'green' : 'rgba(29, 36, 45, 0.84)';
    },
    sairDoSistema() {
      try {
        signOutUser();
        router.push('/login');
      } catch (error) {
        alert('Erro ao sair: ' + error);
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  background-color: rgba(29, 36, 45, 0.84);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  margin-top: 1vh;
  padding: 10px;
}

.info {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.info-basica {
  margin-right: 20px;
  margin-left: 20px;
}

.img {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}

.img img {
  width: 90px;
  height: 93px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-info {
  text-align: center;
}

.profile-info input {
  font-size: 20px;
  font-weight: bold;
  border: none;
  color: white;
}

.profile-info .id {
  font-size: 14px;
  color: white;
}

.contatos {
  margin-left: 20px;
  border: 1px solid;
}

.contatos h3 {
  margin-bottom: 5px;
}

.contatos input {
  border: none;
  color: white;
  font-size: 20px;
}

.biography {
  flex: 1;
}

.work-info {
  margin-bottom: 10px;
}

.work-info h3 {
  font-weight: bold;
}

.biography-box {
  border: 1px solid;
  padding: 10px;
  background-color: rgba(88, 112, 130, 0.26);
  width: 300px;
  margin-top: 10px;
}

.biography-box textarea {
  color: white;
  margin: 0;
  text-align: left;
  text-justify: inter-word;
  width: 100%;
  height: 100px;
  border: none;
  resize: none;
  font-size: 20px;
}

.sair {
  background-color: crimson;
  color: white;
  width: 5vw;
  padding: 10%;
}
</style>
