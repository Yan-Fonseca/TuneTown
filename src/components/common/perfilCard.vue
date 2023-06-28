<template>
    <div class="perfil-card">
      <img src="../../assets/imgs/perfil.png" alt="foto de perfil">
      <div class="data">
        <p class="nome">{{ nome }}</p>
        <button class="perfil-btn" @click="acessarPerfil">Perfil</button>
       <!-- <p class="avaliacao">{{ avaliacao }}/10.0</p> -->
       <div class="avaliacao">
          <span v-for="i in 5" :key="i" :class="[i <= Math.ceil(avaliacao) ? 'gold' : 'gray']">&#x2605;</span>
       </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PerfilCard',
    props: {
      nome: {
        type: String,
        required: true
      },
      avaliacao: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    methods: {
      acessarPerfil() {
        this.$router.push('/perfil/'+this.email);
      }
    }
  }
  </script>
  
  <style scoped>
  .perfil-card {
    width: 187px;
    height: 241px;
    border-radius: 15px;
    background-color: rgba(29, 36, 45, 0.84);
    color: white;
    display: flex; /* Adicionado para usar flexbox */
    flex-direction: column; /* Alinha os itens verticalmente */
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */

    margin-left: 10px;
    margin-right: 10px;
  }
  
  .data {
    text-align: center; /* Alinha o conteúdo ao centro horizontalmente */
  }
  
  .nome, .perfil-btn, .avaliacao {
    margin: 5px; /* Adiciona um espaço entre os elementos */
  }
  
  .perfil-btn {
    border-radius: 7px;
    color: black;
    background-color: rgba(56, 123, 223, 1);
    padding-left: 20px;
    padding-right: 20px;
  }

  p {
    font-size: large;
  }

  .avaliacao {
  font-size: 24px;
}

.gold {
  color: gold;
}

</style>
  