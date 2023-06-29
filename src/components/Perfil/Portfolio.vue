<template>
    <div class="portfolio">
        <div v-if="autenticado" class="container">
            <div class="novo-trabalho">
                <div class="descricao">
                    <h3>Novo Trabalho</h3>
                    <textarea v-model="texto" rows="6"></textarea>
                </div>
                <div class="upload">
                    <input type="file" accept="image/*, video/*" @change="handleFileUpload">
                </div>
                <button @click.prevent="salvarTrabalho" id="enviar">Enviar</button>
            </div>
        </div>
        <div class="trabalhos">
            <div class="trabalhos">
                <h3>Trabalhos:</h3>
            </div>
            <div v-for="trabalho in trabalhos" :key="trabalho.id" class="trabalho">
                <div class="trabalho-info">
                    <div class="descricao">
                        <img :src="trabalho.imagem" alt="Imagem" v-if="trabalho.imagem">
                        <video :src="trabalho.video" controls v-if="trabalho.video"></video>
                        <div class="descricao">
                            <p>{{ trabalho.descricao }}</p>
                        </div>
                    </div>
                    <p>Data de publicação: {{ trabalho.dataPublicacao }}</p>
                </div>
                <div class="botoes">
                    <button v-if="autenticado" @click="editarTrabalho(trabalho.id)">Editar</button>
                    <button v-if="autenticado" @click="removerTrabalho(trabalho.id)">Remover</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {updateUserData, getCurrentUserEmail, uploadFileToFirebase, deleteFileFromFirebase} from '@/firebase';

export default {
    name: 'PortfolioMusic',
    data() {
        return {
        texto: "",
        trabalhos: [],
        arquivo: null,
        trabalhoEditado: null,
        autenticado: true
        };
    },
    methods: {
    handleFileUpload(event) {
      this.arquivo = event.target.files[0];
      console.log("Arquivo selecionado:", this.arquivo);
    },

    async enviarArquivoParaFirebase() {
      try {
        const userEmail = getCurrentUserEmail();
        const fileURL = await uploadFileToFirebase(this.arquivo,userEmail);
        return fileURL;
      } catch (error) {
        alert('Erro ao enviar arquivo para o Firebase: ' + error);
        throw error;
      }
    },

    async removerArquivoDoFirebase(url) {
      try {
        await deleteFileFromFirebase(url);
      } catch (error) {
        alert('Erro ao excluir arquivo do Firebase: ' + error);
        throw error;
      }
    },

    preencherVetor(dados, id) {
        this.autenticado = getCurrentUserEmail() == id;
        this.trabalhos = dados;
    },

    async enviarTrabalhoParaFirestore() {
        try {
            const userData = { trabalhos: this.trabalhos };
            await updateUserData(userData);
        } catch (error) {
            alert('Erro: ' + error);
        }
    },

    salvarTrabalho() {
        if(this.texto !== "") {
            if (this.trabalhoEditado) {
                this.trabalhoEditado.descricao = this.texto;
                this.trabalhoEditado = null; // Limpar trabalhoEditado após a edição
            } else {
                this.adicionarTrabalho();
            }
            this.texto = '';

            this.enviarTrabalhoParaFirestore();
        }
    },

    async adicionarTrabalho() {
      const data = new Date();
      let counter = 0;
      this.trabalhos.forEach(element => {
        if (element.id > counter) {
          counter = element.id;
        }
      });
      counter++;

      let publicacao = data.getDate().toString() + '-' + (data.getUTCMonth() + 1).toString() + '-' + data.getFullYear().toString();

      let trabalho = {
        id: counter,
        descricao: this.texto,
        dataPublicacao: publicacao,
        imagem: "",
        video: ""
      };

      if (this.arquivo) {
        const fileURL = await this.enviarArquivoParaFirebase();
        if (this.arquivo.type.startsWith('image/')) {
          trabalho.imagem = fileURL;
        } else if (this.arquivo.type.startsWith('video/')) {
          trabalho.video = fileURL;
        }
      }

      this.trabalhos.push(trabalho);
    },

    editarTrabalho(id) {
        const trabalho = this.trabalhos.find(trabalho => trabalho.id === id);
        if (trabalho) {
            this.trabalhoEditado = trabalho;
            this.texto = trabalho.descricao;
        } else {
            console.log('Trabalho não encontrado');
        }
    },

    async removerTrabalho(id) {
      const index = this.trabalhos.findIndex((trabalho) => trabalho.id === id);
      if (index !== -1) {
        const trabalhoRemovido = this.trabalhos.splice(index, 1)[0];
        if (trabalhoRemovido.imagem) {
          await this.removerArquivoDoFirebase(trabalhoRemovido.imagem);
        }
        if (trabalhoRemovido.video) {
          await this.removerArquivoDoFirebase(trabalhoRemovido.video);
        }
        await this.enviarTrabalhoParaFirestore();
      } else {
        console.log('Trabalho não encontrado');
      }
    }
  }
}
</script>

<style scoped>
    .container, .trabalho {
        background-color: rgba(29, 36, 45, 0.84);
        color: white;
        border-radius: 20px;
        margin-top: 20px;
        font-size: 20px;
    }

    textarea {
        width: 100%;
        padding: 10px;
        font-size: 20px;
        border: 1px solid #ccc;
        resize: vertical;
        background-color: rgba(88, 112, 130, 0.26);
        color: white;
        margin-bottom: 15px;
    }

    .novo-trabalho {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .trabalho {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
    }

    .trabalho-info {
        margin-top: 1vh;
    }

    .descricao {
        display: flex;
        align-items: justify;
        flex-direction: column;
        width: 70%;
        margin-right: auto;
        margin-left: auto;
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

    #enviar {
        margin-right: 10vh;
    }

    h3 {
        font-size: 30px;
        color: white;
    }
</style>