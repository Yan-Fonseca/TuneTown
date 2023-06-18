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
          <h3>Estado: <input v-model="estado" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Cidade: <input v-model="cidade" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Telefone: <input v-model="telefone" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
          <h3>Email: <input v-model="email" :readonly="!editando" :style="{ background:'rgba(29, 36, 45, 0.84)', color:'white'}"></h3>
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
          <button @click="toggleEdicao">{{ editando ? 'Salvar' : 'Editar' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInfo',
  data() {
    return {
      biografia: 'Estudante e especialista em engenharia de som e afins',
      nome: 'Baiao',
      estado: 'minas gerais',
      cidade: 'juiz de fora',
      telefone: '32 98888-8888',
      email: 'baiao.mixer@teste.com',
      trabalho: 'Engenharia de som',
      editando: false,
      corBorda: 'rgba(29, 36, 45, 0.84)'
    };
  },
  methods: {
    acessarCalendario() {
      this.$router.push('/calendario');
    },
    toggleEdicao() {
      this.editando = !this.editando;
      this.corBorda = this.editando ? 'green' : 'rgba(29, 36, 45, 0.84)';
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
</style>
