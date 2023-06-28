<template>
  <div class="container">
    <div class="info">
      <div class="info-basica">
        <div class="img">
          <img src="../../assets/imgs/perfil.png" alt="imagem de perfil" />
          <div class="profile-info">
            <h3>{{ nome }}</h3>
            <p class="id">@id_usuário</p>
          </div>
          <div class="calendar">
            <button @click="acessarCalendario">Calendário</button>
          </div>
        </div>
        <div class="contatos" :style="{ borderColor: corBorda }">
          <h3>
            Estado:
            <input
              v-model="estado"
              :readonly="true"
              :style="{ background: 'rgba(0, 0, 0, 0)', color: 'white' }"
            />
          </h3>
          <h3>
            Cidade:
            <input
              v-model="cidade"
              :readonly="!editando"
              :style="{ background: 'rgba(0, 0, 0, 0)', color: 'white' }"
            />
          </h3>
          <h3>
            Telefone:
            <input
              v-model="telefone"
              :readonly="!editando"
              :style="{ background: 'rgba(0, 0, 0, 0)', color: 'white' }"
            />
          </h3>
          <h3>
            Email:
            <input
              v-model="email"
              :readonly="true"
              :style="{ background: 'rgba(0, 0, 0, 0)', color: 'white' }"
            />
          </h3>
        </div>
      </div>
      <div class="biography">
        <div class="work-info">
          <h3>Trabalho como: <input v-model="trabalho"
              :readonly="!editando"
              :style="{ background: 'rgba(0, 0, 0, 0)', color: 'white' }">
          </h3>
          <div class="biography-box" :style="{ borderColor: corBorda }">
            <textarea
              v-model="biografia"
              :readonly="!editando"
              :style="{ background: 'rgba(29, 36, 45, 0.84)', color: 'white' }"
            ></textarea>
          </div>
        </div>
        <div class="edit">
          <button v-if="autenticado" @click="toggleEdicao">
            {{ editando ? "Salvar" : "Editar" }}
          </button>
        </div>
      </div>
      <div class="comentarios-avaliacao">
        <div class="avaliacao-media">
          <h2>Avaliação Geral do Perfil:</h2>
          <p class="avaliacao-valor">{{ avaliacaoGeral }}</p>
        </div>

        <div class="comentarios-container">
          <h2>Comentários:</h2>
          <ul class="comentarios-lista">
            <li
              v-for="comentario in comentarios"
              :key="comentario.id"
              class="comentario-item"
            >
              <p>{{ comentario.mensagem }}</p>
              <p>Avaliação: {{ comentario.avaliacao }}</p>
              <p>Por: {{ comentario.nome }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <button
          v-if="!autenticado"
          class="feedback-button"
          @click="openFeedbackForm"
        >
          Feedback
        </button>
      </div>
      <div class="logout">
        <button v-if="autenticado" class="sair" @click="sairDoSistema">
          Sair
        </button>
      </div>
    </div>

    <!-- Tela flutuante com o formulário de feedback -->
    <div class="feedback-overlay" v-if="showFeedbackForm">
      <div class="feedback-container">
        <h2 class="feedback-title">Feedback</h2>
        <form class="feedback-form">
          <div class="form-row">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" v-model="feedback.name" />
          </div>

          <div class="form-row">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="feedback.email"
            />
          </div>

          <div class="form-row">
            <label for="rating">Avaliação:</label>
            <div class="star-rating">
              <input
                type="radio"
                id="rating-5"
                name="rating"
                value="5"
                @change="setRating(5)"
              />
              <label for="rating-5" title="5 estrelas">&#9733;</label>
              <input
                type="radio"
                id="rating-4"
                name="rating"
                value="4"
                @change="setRating(4)"
              />
              <label for="rating-4" title="4 estrelas">&#9733;</label>
              <input
                type="radio"
                id="rating-3"
                name="rating"
                value="3"
                @change="setRating(3)"
              />
              <label for="rating-3" title="3 estrelas">&#9733;</label>
              <input
                type="radio"
                id="rating-2"
                name="rating"
                value="2"
                @change="setRating(2)"
              />
              <label for="rating-2" title="2 estrelas">&#9733;</label>
              <input
                type="radio"
                id="rating-1"
                name="rating"
                value="1"
                @change="setRating(1)"
              />
              <label for="rating-1" title="1 estrela">&#9733;</label>
            </div>
          </div>

          <div class="form-row">
            <label for="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              v-model="feedback.message"
            ></textarea>
          </div>
          <!-- Botões de ação -->
          <div class="form-buttons">
            <button type="button" @click="cancelFeedbackForm" class="cancelar">
              Cancelar
            </button>
            <button
              type="submit"
              @click.prevent="submitFeedback"
              class="enviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  signOutUser,
  getCurrentUserEmail,
  updateUserData,
  updateUserDataByEmail,
} from "@/firebase";
import router from "@/router";

export default {
  name: "BasicInfo",
  data() {
    return {
      biografia: "",
      nome: "",
      estado: "",
      cidade: "",
      telefone: "",
      email: "",
      trabalho: "",
      editando: false,
      autenticado: false,
      corBorda: "rgba(29, 36, 45, 0.84)",
      showFeedbackForm: false,
      feedback: {
        // Adicione esta seção
        name: "",
        email: "",
        rating: 0,
        message: "",
      },
      comentarios: [],
      avaliacaoGeral: 0.0
    };
  },
  methods: {
    preencherDadosDePerfil(dados) {
      this.nome = dados.nome;
      this.biografia = dados.biografia;
      this.estado = dados.estado;
      this.cidade = dados.cidade;
      this.telefone = dados.telefone;
      this.email = dados.email;
      this.trabalho = dados.trabalho;

      if (getCurrentUserEmail() == this.email) {
        this.autenticado = true;
      }

      this.comentarios = dados.comentarios;
      this.avaliacaoGeral = dados.rating;
    },
    acessarCalendario() {
      const id = this.$route.params.id;
      this.$router.push("/calendario/" + id);
    },
    async toggleEdicao() {
      this.editando = !this.editando;
      this.corBorda = this.editando ? "green" : "rgba(29, 36, 45, 0.84)";
      if (!this.editando) {
        const dadoParaSalvar = {
          biografia: this.biografia,
          estado: this.estado,
          cidade: this.cidade,
          telefone: this.telefone,
          trabalho: (this.trabalho).toLowerCase(),
        };

        await updateUserData(dadoParaSalvar);
      }
    },
    sairDoSistema() {
      try {
        signOutUser();
        router.push("/login");
      } catch (error) {
        alert("Erro ao sair: " + error);
      }
    },

    openFeedbackForm() {
      this.showFeedbackForm = true; // Exibe o formulário de feedback
    },
    cancelFeedbackForm() {
      this.showFeedbackForm = false; // Oculta o formulário de feedback
      this.resetFeedbackFields();
    },
    resetFeedbackFields() {
      this.feedback.name = "";
      this.feedback.email = "";
      this.feedback.rating = 0;
      this.feedback.message = "";
    },
    setRating(rating) {
      this.feedback.rating = rating;
    },
    submitFeedback() {
      console.log("Feedback:", this.feedback);
      this.comentarios.push({
        mensagem: this.feedback.message,
        avaliacao: this.feedback.rating,
        nome: this.feedback.name,
      });
      this.enviarFeedBackParaFirestore();
      this.cancelFeedbackForm();
    },
    async enviarFeedBackParaFirestore() {
      try {
        const media = this.calcularMediaAvaliacao();
        const userData = { feedbacks: this.comentarios, avaliacaoMedia: media };
        await updateUserDataByEmail(userData, this.email);
      } catch (error) {
        alert("Erro: " + error);
      }
    },
    calcularMediaAvaliacao() {
      let somador = 0;
      let media = 0.0;
      for (const comentario of this.comentarios) {
        somador += comentario.avaliacao;
      }
      console.log("Tamanho:" + this.comentarios.length)
      console.log("somador:" + somador)
      media = somador / this.comentarios.length;
      return media;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background-color: rgba(29, 36, 45, 0.84);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  margin-top: 1vh;
  padding: 10px;
}

.info {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.info-basica {
  margin-right: 20px;
  margin-left: 20px;
}

.img {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}

.img img {
  width: 90px;
  height: 93px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-info {
  text-align: center;
}

.profile-info input {
  font-size: 20px;
  font-weight: bold;
  border: none;
  color: white;
}

.profile-info .id {
  font-size: 14px;
  color: white;
}

.contatos {
  margin-left: 20px;
  border: 1px solid;
}

.contatos h3 {
  margin-bottom: 5px;
}

.contatos input {
  border: none;
  color: white;
  font-size: 20px;
}

.biography {
  flex: 1;
}

.work-info {
  margin-bottom: 10px;
}

.work-info input {
  border: none;
  color: white;
  font-size: 20px;
}

.work-info h3 {
  font-weight: bold;
}

.biography-box {
  border: 1px solid;
  padding: 10px;
  background-color: rgba(88, 112, 130, 0.26);
  width: 300px;
  margin-top: 10px;
}

.biography-box textarea {
  color: white;
  margin: 0;
  text-align: left;
  text-justify: inter-word;
  width: 100%;
  height: 100px;
  border: none;
  resize: none;
  font-size: 20px;
}

.sair {
  background-color: crimson;
  color: white;
  width: 5vw;
  padding: 10%;
  border-radius: 5px;
}

.feedback-form {
  width: 100%;
}
.feedback-button {
  background-color: #2e7a32;
  color: white;
  width: 5vw;
  padding: 10%;
  border-radius: 5px;
  margin-right: 3px;
}

.feedback-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.feedback-container {
  background-color: rgba(36, 56, 81, 1);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.feedback-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}

.feedback-container form {
  display: flex;
  flex-direction: column;
}

.feedback-container .form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.feedback-container label {
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
}

.feedback-container input,
.feedback-container textarea {
  padding: 5px;
  border-radius: 4px;
  border: none;
  width: 100%;
}

.feedback-container .form-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.feedback-container .form-buttons button {
  margin-left: 10px;
}

.feedback-container .form-buttons .cancelar {
  background-color: #d32f2f;
  color: white;
}

.feedback-container .form-buttons .enviar {
  background-color: #2e7a32;
  color: white;
}

.star-rating {
  direction: rtl;
  unicode-bidi: bidi-override;
  text-align: left;
}

.star-rating input[type="radio"] {
  display: none;
}

.star-rating label {
  color: #ddd;
  font-size: 20px;
  display: inline-block;
  padding: 5px;
  cursor: pointer;
}

.star-rating label:hover,
.star-rating label:hover ~ label,
.star-rating input[type="radio"]:checked ~ label {
  color: #ffd700;
}

.comentarios-avaliacao {
  display: flex;
  flex-direction: row;
  margin-right: 80px;
}

.comentarios-lista {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll; /* Adiciona uma barra de rolagem vertical */
  max-height: 200px; /* Define uma altura máxima para cada item de comentário */
  margin-right: 5px;
}

.comentario-item {
  background-color: rgba(88, 112, 130, 0.26);
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  width: 30vw;
}

.comentarios-container {
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
}
.avaliacao-media {
  margin-right: 70px;
  margin-bottom: 10px;
}

.avaliacao-valor {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
</style>
