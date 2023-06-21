<template>
    <div class="container">
      <div class="ano">
        <h1>2023</h1>
      </div>
  
      <div class="events">
        <div class="card" v-for="evento in eventos" :key="evento.id" :style="getCardStyle(evento.id)">
          <div id="header">
            <div class="btns">
              <button id="remove" @click="deleteEvent(evento.id)">X</button>
              <button id="edit">Edit</button>
            </div>
            <div class="date">
              <h3>{{ evento.dia }} / {{ evento.mes }}</h3>
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
        <button class="add" @click="openForm">+</button>
      </div>
  
      <!-- Tela flutuante com o formulário -->
      <div class="form-overlay" v-if="showForm">
        <div class="form-container">
          <h2>Novo Evento</h2>
          <form>
            <label for="nome">Nome do Evento:</label>
            <input type="text" id="nome" name="nome" />
  
            <label for="data">Data:</label>
            <input type="text" id="data" name="data" />
  
            <label for="horario">Horário:</label>
            <input type="time" id="horario" name="horario" />
  
            <!-- Botões de ação -->
            <div class="form-buttons">
              <button type="button" @click="cancelForm">Cancelar</button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'AgendaUser',
    data() {
      return {
        eventos: [
          {
            id: 1,
            dia: '10',
            mes: '6',
            horario: '22:00',
            descricao: 'Balada',
            integrantes: 'Baião',
          },
          {
            id: 2,
            dia: '14',
            mes: '6',
            horario: '22:00',
            descricao: 'Balada',
            integrantes: 'Baião',
          },
          {
            id: 3,
            dia: '18',
            mes: '6',
            horario: '22:00',
            descricao: 'Balada',
            integrantes: 'Baião',
          },
          {
            id: 4,
            dia: '23',
            mes: '6',
            horario: '22:00',
            descricao: 'Balada',
            integrantes: 'Baião',
          },
          {
            id: 5,
            dia: '23',
            mes: '6',
            horario: '22:00',
            descricao: 'Balada',
            integrantes: 'Baião',
          },
        ],
        showForm: false, // Variável para controlar a exibição do formulário
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

      openForm() {
        this.showForm = true; // Exibe o formulário
      },
      cancelForm() {
        this.showForm = false; // Oculta o formulário
      },

      deleteEvent(id) {
        this.eventos = this.eventos.filter((evento) => evento.id !== id);
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
    z-index: 1;
  }
  
  .form-container {
    background-color: rgba(36, 56, 81, 1);
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .form-buttons button {
    margin-left: 10px;
  }
  
  </style>
  