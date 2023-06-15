<template>
    <div class="portfolio">
        <div class="novo-trabalho">
            <div class="descricao">
                <h3>Trabalho</h3>
                <textarea v-model="texto" rows="6"></textarea>
            </div>
            <div class="upload">
                <input type="file" accept="image/*, video/*" @change="handleFileUpload">
            </div>
        </div>
        <div class="trabalhos">
            <div v-for="trabalho in trabalhos" :key="trabalho.id" class="trabalho">
                <div class="trabalho-info">
                    <div class="descricao">
                        <img :src="trabalho.imagem" alt="Imagem">
                        <div class="descricao">
                            <p>{{ trabalho.descricao }}</p> 
                        </div>
                    </div>
                    <p>Data de publicação: {{ trabalho.dataPublicacao }}</p>
                </div>
            <div class="botoes">
                <button @click="editarTrabalho(trabalho.id)">Editar</button>
                <button @click="removerTrabalho(trabalho.id)">Remover</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioMusic',
    data() {
        return {
        texto: "",
        trabalhos: [
            {
            id: 1,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            dataPublicacao: "2023-06-01",
            imagem: "caminho/imagem1.jpg"
            },
            {
            id: 2,
            descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            dataPublicacao: "2023-06-02",
            imagem: "caminho/imagem2.jpg"
            }
        ]
        };
    },
    methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      // ações futuras
      console.log("Arquivo selecionado:", file);
    },

    editarTrabalho(id) {
      // Lógica para editar o trabalho com o ID fornecido
      console.log("Editar trabalho:", id);
    },

    removerTrabalho(id) {
      // Lógica para remover o trabalho com o ID fornecido
      console.log("Remover trabalho:", id);
    }
  }
}
</script>

<style scoped>
    .portfolio {
        background-color: rgba(29, 36, 45, 0.84);
        color: white;
        border-radius: 20px;
        margin-top: 20px;
    }

    textarea {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        resize: vertical;
        background-color: rgba(88, 112, 130, 0.26);
    }

    .novo-trabalho {
        margin-bottom: 20px;
    }
    .trabalho {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
    }

    .descricao {
        display: flex;
        align-items: center;
    }

    .descricao img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        background-color: rgba(88, 112, 130, 0.26);
    }

    .botoes {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }

    button {
        margin-left: 10px;
    }
</style>