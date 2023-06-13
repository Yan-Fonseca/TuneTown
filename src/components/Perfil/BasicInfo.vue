<template>
    <div class="container">
      <div class="info">
        <div class="img">
          <img src="../../assets/imgs/perfil.png" alt="imagem de perfil">
          <div class="profile-info">
            <p class="name">Nome</p>
            <p class="id">@id_usuário</p>
          </div>
          <div class="calendar">
            <button>Calendario</button>
          </div>
        </div>
        <div class="contatos">
          <h3>Estado:</h3>
          <h3>Cidade:</h3>
          <h3>Telefone:</h3>
          <h3>Email:</h3>
        </div>
        <div class="biography">
          <div class="work-info">
            <h3>Trabalho com:</h3>
            <div class="biography-box">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia mollitia obcaecati libero cumque cupiditate temporibus, iure enim assumenda magnam. Perferendis illum aliquam possimus aliquid reprehenderit placeat earum! Minima, minus suscipit!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'BasicInfo'
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
}

.info {
  display: flex;
  align-items: center;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.img img {
  width: 150px;
  height: 150px;
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
  background-color: #f9f9f9;
  width: 300px;
}

.biography-box p {
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}
</style>
