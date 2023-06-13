<template>
    <div class="perfil-card">
      <img src="../../assets/imgs/perfil.png" alt="foto de perfil">
      <div class="data">
        <p class="nome">Nome</p>
        <button class="perfil-btn">Perfil</button>
        <p class="avaliacao">Avaliação: x.x/5.0</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PerfilCard'
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
  }
  </style>
  