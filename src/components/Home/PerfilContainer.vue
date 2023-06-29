<template>
    <div class="container">
        <div class="scrollable-wrapper">
            <div class="cards-wrapper">
                <PerfilCard
                v-for="item in displayedUsers"
                :key="item.id"
                :nome="item.nome"
                :avaliacao="item.avaliacao"
                :email="item.email"
                />
            </div>
            <div class="button-wrapper">
                <button class="ver-mais-button" @click="verMais">Ver Mais</button>
            </div>
        </div>
    </div>
</template>

<script>
import PerfilCard from "../common/perfilCard.vue"

export default {
  name: 'PerfilContainer',
  components: {
    PerfilCard
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      displayedUsers: [],
      visibleCount: 6,
      showMoreButton: true
    };
  },
  computed: {
    hasMoreUsers() {
      return this.visibleCount < this.users.length;
    }
  },
  mounted() {
    this.updateDisplayedUsers();
  },
  watch: {
    users: {
      immediate: true,
      handler() {
        this.updateDisplayedUsers();
      }
    }
  },
  methods: {
    updateDisplayedUsers() {
      this.displayedUsers = this.users.slice(0, this.visibleCount);
      this.showMoreButton = this.hasMoreUsers;
    },
    verMais() {
      this.visibleCount += 4;
      if (!this.hasMoreUsers) {
        alert('Não há mais usuários para mostrar.');
      }
      this.updateDisplayedUsers();
    }
  }
}
</script>




<style scoped>
.container {
    background-color: rgba(42, 52, 62, 1);
    border-radius: 20px;

    margin-bottom: 20px;
    margin-top: 20px;

    padding-top: 10px;
    padding-bottom: 10px;
    overflow-x: auto; 
    white-space: nowrap;
    position: relative; 
}

.scrollable-wrapper {
    overflow-x: scroll; 
    scrollbar-width: thin; 
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent; 
}

.scrollable-wrapper::-webkit-scrollbar {
    height: 8px; 
}

.scrollable-wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px; 
}

.cards-wrapper {
    display: inline-flex; 
    gap: 10px; 
    padding: 10px; 
}

.ver-mais-button {
    background-color: rgba(56, 123, 223, 1);
    border-radius: 10px;
    font-size: large;
}

button:hover {
    cursor: pointer;
}

.button-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
}


</style>