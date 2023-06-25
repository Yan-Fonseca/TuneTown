<template>
  <div class="container">
    <h1>Resultados:</h1>
    <div class="resultados-container">
      <div class="resultados">
        <perfilCard
          v-for="item in users"
          :key="item.id"
          :nome="item.nome"
          :avaliacao="item.avaliacao"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from "@/firebase";
import perfilCard from "../common/perfilCard.vue";

export default {
  name: "ResultadosBusca",
  components: {
    perfilCard,
  },
  data() {
    return {
      users: [],
      counter: 0,
    };
  },
  methods: {
    async buscarUsuarios(dados) {
      try {
        const usersDataPromise = fetchData(dados);
        const usersData = await usersDataPromise;
        if (usersData) {
          this.users = [];
          for (var i = 0; i < usersData.length; i++) {
            const user = usersData[i]
            const data = {
              id: this.counter,
              nome: user.nome,
              avaliacao: 5,
            };
            this.counter++;
            this.users.push(data);
          }
        }
      } catch (error) {
        console.log("erro: " + error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgba(29, 36, 45, 0.84);
  color: white;
  border-radius: 15px;
  padding: 1rem;
  margin: 7px;
  width: 95%;
  height: 100%;
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
