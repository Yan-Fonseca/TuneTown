<template>
    <div class="portfolio">
        <div class="novo-trabalho">
            <div class="descricao">
                <h3>Trabalho</h3>
                <textarea v-model="texto" rows="6"></textarea>
            </div>
        </div>
        <div class="upload">
            <input type="file" accept="image/*, video/*" @change="handleFileUpload">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioMusic',
    data() {
        return {
        texto: ""
        };
    },
    methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      // ações futuras
      console.log("Arquivo selecionado:", file);
    }
  }
}
</script>

<style>
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  resize: vertical;
}
</style>