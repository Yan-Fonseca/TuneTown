<template>
  <div class="Home">
    <div class="avaliados" v-if="recomendados.length">
      <h1>Profissionais mais bem avaliados</h1>
      <PerfilContainer :users="recomendados" />
    </div>
    <div class="perto" v-if="profissionaisPerto.length">
      <h1>Profissionais perto de você!</h1>
      <PerfilContainer :users="profissionaisPerto" />
    </div>
  </div>
</template>

<script>
import PerfilContainer from './PerfilContainer.vue';
import { getCurrentUserEmail, getUserDocumentByEmail, fetchData, getBestUsers } from '@/firebase';

export default {
  name: 'HomePage',
  components: {
    PerfilContainer
  },
  data() {
    return {
      contadorRecomendados: 0,
      recomendados: [],
      contadorProfPerto: 0,
      profissionaisPerto: []
    };
  },
  async mounted() {
    await this.getUsuariosMelhorAvaliados();
    await this.getUsuariosPerto();
  },
  methods: {
    async getUsuariosMelhorAvaliados() {
      const bestUsers = await getBestUsers();
      this.recomendados = bestUsers.map((user, index) => ({
        id: this.contadorRecomendados + index,
        nome: user.nome,
        avaliacao: user.avaliacao,
        email: user.email
      }));
      this.contadorRecomendados += bestUsers.length;
    },

    async getUsuariosPerto() {
      const user = getCurrentUserEmail();
      const userDoc = await getUserDocumentByEmail(user);
      const data = {
        estado: userDoc.estado,
        cidade: userDoc.cidade
      };
      const usuariosPerto = await fetchData(data);
      this.profissionaisPerto = usuariosPerto.map((user, index) => ({
        id: this.contadorProfPerto + index,
        nome: user.nome,
        avaliacao: user.avaliacao,
        email: user.email
      }));
      this.contadorProfPerto += usuariosPerto.length;
    }
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
  margin-bottom: 40px; /* Adiciona um espaço entre os containers */
  margin-top: 10px;

}

h1 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: white;
}
</style>
