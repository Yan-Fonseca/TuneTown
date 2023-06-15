<template>
  <div class="container">
    <div class="info">
      <div class="info-basica">
        <div class="img">
          <img src="../../assets/imgs/perfil.png" alt="imagem de perfil">
          <div class="profile-info">
            <p class="name">{{ nome }}</p>
            <p class="id">@id_usuário</p>
          </div>
          <div class="calendar">
            <button @click="acessarCalendario">Calendário</button>
          </div>
        </div>
        <div class="contatos">
          <h3>Estado: {{ estado }}</h3>
          <h3>Cidade: {{ cidade }}</h3>
          <h3>Telefone: {{ telefone }}</h3>
          <h3>Email: {{ email }}</h3>
        </div>
      </div>
      <div class="biography">
        <div class="work-info">
          <h3>Trabalho com: {{ trabalho }}</h3>
          <div class="biography-box">
            <p>{{ biografia }}</p>
          </div>
          <div class="edit">
            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInfo',
  methods: {
    acessarCalendario() {
      this.$router.push('/calendario');
    }
  },
  data() {
    return {
      biografia: 'Estudante e especialista em engenharia de som e afins',
      nome: 'Baiao',
      estado: 'minas gerais',
      cidade: 'juiz de fora',
      telefone: '32 98888-8888',
      email: 'baiao.mixer@teste.com',
      trabalho: 'Engenharia de som'
    };
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
  border-radius: 20px;;
  color: white;
}

.info {
  display: flex;
  align-items: center;
  flex-direction: row;
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

.profile-info .name {
  font-size: 20px;
  font-weight: bold;
}

.profile-info .id {
  font-size: 14px;
  color: gray;
}

.contatos {
  margin-left: 20px;
}

.contatos h3 {
  margin-bottom: 5px;
}

.biography {
  margin-top: 20px;
}

.work-info {
  margin-bottom: 10px;
}

.work-info h3 {
  font-weight: bold;
}

.biography-box {
  border: 1px solid gray;
  padding: 10px;
  background-color: rgba(88, 112, 130, 0.26);
  width: 300px;
}

.biography-box p {
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}
</style>
