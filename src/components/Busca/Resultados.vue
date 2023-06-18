<template>
    <div class="container">
      <h1>Resultados:</h1>
      <div class="resultados">
        <perfilCard v-for="item in users" :key="item.id" :nome="item.nome" :avaliacao="item.avaliacao" />
      </div>
    </div>
  </template>
  
  <script>
  import perfilCard from '../common/perfilCard.vue';
  
  export default {
    name: 'ResultadosBusca',
    components: {
      perfilCard
    },
    data() {
      return {
        users: [
          { id: 0, nome: 'Yan', avaliacao: 10.0 },
          { id: 1, nome: 'Joel', avaliacao: 5.5 },
          { id: 2, nome: 'João', avaliacao: 1.8 },
          { id: 3, nome: 'Gabriela', avaliacao: 1.0 },
          { id: 4, nome: 'Amanda', avaliacao: 9.9 },
          { id: 5, nome: 'Alexandre', avaliacao: 8.5 },
          { id: 6, nome: 'Julio', avaliacao: 7.8 },
          { id: 7, nome: 'Cleopatra', avaliacao: 2 }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  
  .container {
    background-color: rgba(29, 36, 45, 0.84);
    color: white;
    border-radius: 20px;
    padding: 1rem;
    margin: 10px;
    width: 90%; /* Ocupa 90% da largura disponível */
    height: 100%; /* Ocupa toda a altura disponível */
  }
  
  h1 {
    font-size: 47px;
  }
  
  .resultados {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  </style>
  