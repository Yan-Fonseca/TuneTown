<template>
    <div class="container">
      <div class="ano">
        <h1>2023</h1>
      </div>
  
      <div class="events">
        <div class="card" v-for="evento in eventos" :key="evento.id" :style="getCardStyle(evento.id)">
          <div id="header">
            <div class="btns">
              <button v-if="autenticado" id="remove" @click="deleteEvent(evento.id)">X</button>
              <button v-if="autenticado" id="edit" @click="editEvent(evento.id)">Edit</button>
            </div>
            <div class="date">
              <h3>{{evento.data}}</h3>
            </div>
          </div>
          <div class="content">
            <div class="info">
              <p>horário: {{ evento.horario }}</p>
              <p>descrição: {{ evento.descricao }}</p>
              <p>integrantes: {{ evento.integrantes }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="btn">
        <button v-if="autenticado" class="add" @click="openForm">+</button>
      </div>
  
      <!-- Tela flutuante com o formulário -->
      <div class="form-overlay" v-if="showForm">
        <div class="form-container">
          <h2 class="form-title">Novo Evento</h2>
          <form>
            <div class="form-row">
              <label for="nome">Nome do Evento:</label>
              <input type="text" id="nome" name="nome" v-model="nome"/>
            </div>

            <div class="form-row">
              <label for="data">Data:</label>
              <input type="date" id="data" name="data" v-model="data"/>
  
              <label for="horario">Horário:</label>
              <input type="time" id="horario" name="horario" v-model="horario"/>
            </div>

            <div class="form-row integrantes-row">
              <label for="integrantes">Integrantes:</label>
              <input type="text" id="integrantes" name="integrantes" v-model="integrantes"/>
            </div>
            
            <div>
              <label for="nome">Descrição do Evento:</label>

              <div class="input-contaneir"> 
                <textarea id="descricao" name="descricao" v-model="descricao"></textarea>
              </div>
            </div>
            
            <!-- Botões de ação -->
            <div class="form-buttons">
              <button type="button" @click="cancelForm" class="cancelar">Cancelar</button>
              <button type="submit" @click.prevent="saveEvent" class="salvar">{{ editMode ? 'Editar' : 'Salvar' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script>
  import {updateCalendarData, getCurrentUserEmail} from '@/firebase';

  export default {
    name: 'AgendaUser',
    data() {
      return {
        eventos: [],
        showForm: false, // Variável para controlar a exibição do formulário
        counter: 1, // Contador para atribuir as Ids dos eventos
        nome: '',
        descricao: '',
        data: '',
        horario: '',
        integrantes: '',
        editMode: false, // Indicador do modo de edição
        editEventId: null, // ID do evento em edição
        autenticado: false
      };
    },
    methods: {
      getCardStyle(eventId) {
        const colors = {
          1: 'rgba(187, 62, 130, 1)',
          2: 'rgba(10, 162, 180, 1)',
          3: 'rgba(240, 203, 41, 1)',
          0: 'rgba(0, 95, 175, 1)',
        };
        const backgroundColor = colors[eventId % 4];
        return {
          backgroundColor,
        };
      },

      preencherEventos(dados) {
        console.log(dados);
        if(dados.empty || dados===undefined) {
          dados = [];
        }
        else {
          this.eventos = dados;
          this.atualizarCalendario();
        }
      },

      estaAutenticado(email_ID) {
        const userEmail = getCurrentUserEmail(); // Obtém o email do usuário atual
        this.autenticado = userEmail === email_ID;
      },

      async enviarEventosParaFirestore() {
        try {
            const userData = { eventos: this.eventos };
            await updateCalendarData(userData);
        } catch (error) {
            alert('Erro: ' + error);
        }
      },

      openForm() {
        this.showForm = true; // Exibe o formulário
      },
      cancelForm() {
        this.showForm = false; // Oculta o formulário
        this.resetarCampos();
        this.editMode = false;
      },

      deleteEvent(id) {
        this.eventos = this.eventos.filter((evento) => evento.id !== id);
        this.counter--;

        for (let i = 0; i < this.eventos.length; i++) {
          this.eventos[i].id = i + 1;
        }

        this.atualizarCalendario();
        this.enviarEventosParaFirestore();
      },

      saveEvent() {
        if (!this.editMode) {
          let evento = {
            id: this.counter,
            nome: this.nome,
            data: this.data,
            horario: this.horario,
            descricao: this.descricao,
            integrantes: this.integrantes
          }
          this.eventos.push(evento);
          this.counter++;
        } else {
          this.saveEditedEvent();
        }

        this.cancelForm();
        this.atualizarCalendario();
        this.enviarEventosParaFirestore();
      },

      resetarCampos() {
        this.nome = ''
        this.data = '';
        this.horario = '';
        this.descricao = '';
        this.integrantes = '';
      },

      preencherCampos(evento) {
        this.nome = evento.nome;
        this.data = evento.data;
        this.horario = evento.horario;
        this.descricao = evento.descricao;
        this.integrantes = evento.integrantes;
      },

      editEvent(id) {
        let evento = this.eventos.find((evento) => evento.id === id);
        if(evento) {
          this.editMode = true; // Ativar o modo de edição
          this.editEventId = id; // Definir o ID do evento em edição
          this.openForm();
          this.preencherCampos(evento);
        }
      },

      saveEditedEvent() {
        let evento = this.eventos.find((evento) => evento.id === this.editEventId);
        if (evento) {
          evento.nome = this.nome;
          evento.data = this.data;
          evento.horario = this.horario;
          evento.descricao = this.descricao;
          evento.integrantes = this.integrantes;
        }
        this.editMode = false;
      },

      atualizarCalendario() {
        this.$emit('attCalendario',this.eventos);
      }
    },
  };
</script>
  
<style scoped>
  .container {
    background-color: rgba(36, 43, 52, 1);
    color: white;
    position: relative;
    max-height: 93vh;
  }
  
  .ano {
    background-color: rgba(41, 51, 61, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  }
  
  h1 {
    font-size: 40px;
    align-items: center;
  }
  
  .card {
    background-color: rgba(0, 31, 56, 1);
  }
  
  .btn {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  
  .add {
    background: #2e7a32;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: white;
    font-family: 'Arapey';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 53px;
    text-align: center;
    padding-left: 60px;
    padding-right: 60px;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  .events {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: auto;
    height: 70vh;
    justify-content: center;
  }
  
  .card {
    width: 300px;
    max-height: 15vh;
    padding: 20px;
    border-radius: 8px;
    color: white;
  }
  
  #header {
    text-align: center;
  }
  
  .date {
    background-color: rgba(41, 51, 61, 1);
    padding: 10px;
  }
  
  h3 {
    margin: 0;
  }
  
  .content {
    background-color: rgba(36, 43, 52, 1);
    margin-top: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
  }
  
  .info p {
    margin: 0;
  }
  
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  
  /* Estilos para a tela flutuante do formulário */
  .form-overlay {
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
  
  .form-container {
    background-color: rgba(36, 56, 81, 1);
    padding: 20px;
    border-radius: 8px;
  }

  .form-title {
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .form-row {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
  }

  .form-row input {
    margin-right: 10px;
    float: right;
    background-color: rgb(161, 159, 159);
  }
  .integrantes-row input {
    width: 202px;
  }

  textarea {
    flex: 1;
    resize: vertical;
    min-height: 150px;
    max-height: 150px;
    width: 305px;
    margin-top: 5px;
    background-color: rgb(161, 159, 159);
  }
  
  .form-row label {
    margin-right: 5px;
  }

  .input-container {
    flex: 1;
  }

  .textarea-container {
    flex: 1;
  }

  .form-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 18px;
  }
  
  .form-buttons button {
    margin-left: 10px;
    padding: 5px;
    border-radius: 3px;
    color: #FFF;
  }
  
  .cancelar {
    background-color: rgba(233, 63, 63, 0.904);
  }

  .salvar {
    background-color: rgb(35, 163, 35);
  }
  #nome {
    width: 160px;
  }

  #data {
    margin-right: 37px;
  }
  </style>
  