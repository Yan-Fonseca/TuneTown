<template>
    <div class="container">
      <h1>Resultados:</h1>
      <div class="resultados-container">
        <div class="resultados">
        <perfilCard v-for="item in users" :key="item.id" :nome="item.nome" :avaliacao="item.avaliacao" />
      </div>
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
          { id: 5, nome: 'Alexandre', avaliacao: 3.0 },
          { id: 6, nome: 'Julio', avaliacao: 7.8 },
<<<<<<< HEAD
          { id: 7, nome: 'Cleopatra', avaliacao: 9.6 },
          { id: 0, nome: 'Yan', avaliacao: 9.9 },
          { id: 1, nome: 'Joel', avaliacao: 8.5 },
          { id: 2, nome: 'João', avaliacao: 7.8 },
          { id: 3, nome: 'Gabriela', avaliacao: 9.6 },
          { id: 4, nome: 'Amanda', avaliacao: 9.9 },
=======
          { id: 7, nome: 'Cleopatra', avaliacao: 2 },
          { id: 8, nome: 'Cleo', avaliacao: 0 },
          { id: 0, nome: 'Yan', avaliacao: 10.0 },
          { id: 1, nome: 'Joel', avaliacao: 5.5 },
          { id: 2, nome: 'João', avaliacao: 1.8 },
          { id: 3, nome: 'Gabriela', avaliacao: 1.0 },
          { id: 4, nome: 'Amanda', avaliacao: 9.9 },
          { id: 5, nome: 'Alexandre', avaliacao: 3.0 },
          { id: 0, nome: 'Yan', avaliacao: 10.0 },
          { id: 1, nome: 'Joel', avaliacao: 5.5 },
          { id: 2, nome: 'João', avaliacao: 1.8 },
          { id: 3, nome: 'Gabriela', avaliacao: 1.0 },
          { id: 4, nome: 'Amanda', avaliacao: 9.9 }
>>>>>>> thiago
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  
  .container {
    background-color: rgba(29, 36, 45, 0.84);
    color: white;
    border-radius: 15px;
    padding: 1rem;
<<<<<<< HEAD
    margin: 10px;
    width: 90%; 
    height: 100%; 
=======
    margin: 7px;
    width: 95%; /* Ocupa 90% da largura disponível */
    height: 100%; /* Ocupa toda a altura disponível */
>>>>>>> thiago
  }
  
  h1 {
    font-size: 47px;
  }

  .resultados-container {
    overflow-y: auto;
  }
  
  .resultados {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-auto-rows: 250px;
  }
  
  </style>
  