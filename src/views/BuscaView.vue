<template>
    <div class="container">
        <div class="header-busca">
            <BuscaPerfil @buscarUsuariosNome="buscarNome"/>
        </div>
        <div class="content">
            <div class="sidebar">
                <FiltroBusca @buscarUsuarios="buscar"/>
            </div>
            
            <div class="main-content">
                <ResultadosBusca ref="results"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BuscaPerfil from "../components/Busca/Busca.vue"
    import FiltroBusca from "../components/Busca/Filtro.vue"
    import ResultadosBusca from "@/components/Busca/Resultados.vue";

    export default {
        name: 'BuscaView',
        components: {
            BuscaPerfil,
            FiltroBusca,
            ResultadosBusca
        },
        methods: {
            buscar(dados) {
                this.$refs.results.buscarUsuarios(dados);
            },
            buscarNome(nome){
                this.$refs.results.buscarUsuariosNome(nome);
            }
        }
    }
</script>

<style scoped>
.container {
    display: grid;
    grid-template-rows: auto 1fr; 
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.sidebar {
  position: sticky;
  top: 70px; /* Ajuste a altura do cabeçalho */
  height: calc(100vh - 70px); /* Subtrai a altura do cabeçalho */
  overflow-y: auto;
}

.main-content {
  position: sticky;
  overflow-y: auto; 
 }

.content {
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 70px; /* Ajuste a altura do cabeçalho */
}
</style>
