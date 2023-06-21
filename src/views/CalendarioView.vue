<template>
    <div class="container">
      <HeaderCal/>
      <div class="content">
        <div class="calendar-wrapper">
          <CalendarioUser :data="eventos_para_calendario"/>
        </div>
        <div class="agenda-wrapper">
          <AgendaUser @attCalendario="atualizarCalendario"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CalendarioUser from '../components/Calendario/Calendario.vue'
  import HeaderCal from '../components/Calendario/HeaderCalendar.vue'
  import AgendaUser from '../components/Calendario/Evento.vue'
  
  export default {
    name: 'CalendarioView',
    components: {
      HeaderCal,
      CalendarioUser,
      AgendaUser
    },
    data() {
      return {
        eventos_para_calendario: []
      };
    },
    methods: {
      atualizarCalendario(dados) {
        this.eventos_para_calendario = dados;
        console.log(dados[0]);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
  
.content {
  flex: 1;
  display: flex;
}
  
  .calendar-wrapper {
    width: 75%;
  }
  
  .agenda-wrapper {
    width: 25%;
  }
  </style>
  