<template>
  <div class="Home">
    <div class="avaliados">
      <h1>Profissionais mais bem avaliados</h1>
      <PerfilContainer :users="recomendados"/>
    </div>
    <div class="perto">
      <h1>Profissionais perto de você!</h1>
      <PerfilContainer :users="profissionaisPerto"/>
    </div>
  </div>
</template>

<script>
import PerfilContainer from './PerfilContainer.vue';

export default {
  name: 'HomePage',
  components: {
    PerfilContainer
  },
  data() {
    return {
      recomendados: [
        { id: 0, nome: 'Yan', avaliacao: 9.9 },
        { id: 1, nome: 'Gabriela', avaliacao: 9.6 },
        { id: 2, nome: 'Amanda', avaliacao: 9.9 },
        { id: 3, nome: 'Cleopatra', avaliacao: 9.6 }
      ],
      profissionaisPerto: [
        { id: 0, nome: 'Yan', avaliacao: 9.9 },
        { id: 1, nome: 'Joel', avaliacao: 8.5 },
        { id: 2, nome: 'João', avaliacao: 7.8 },
        { id: 3, nome: 'Gabriela', avaliacao: 9.6 }
      ]
    };
  }
}
</script>

<style scoped>
body {
  background-color: black;
}

.Home {
  display: flex;
  flex-direction: column; /* Alinha os containers verticalmente */
  align-items: center; /* Centraliza horizontalmente */
}

.avaliados,
.perto {
  width: 75%;
  margin-bottom: 20px; /* Adiciona um espaço entre os containers */
  margin-top: 20px;
}

h1 {
  font-size: 50px;
  color: white;
}
</style>
