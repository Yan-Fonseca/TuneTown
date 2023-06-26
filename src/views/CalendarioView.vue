<template>
    <div class="container">
      <HeaderCal/>
      <div class="content">
        <div class="calendar-wrapper">
          <CalendarioUser ref="calendar"/>
        </div>
        <div class="agenda-wrapper">
          <AgendaUser @attCalendario="atualizarCalendario" ref="agenda"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CalendarioUser from '../components/Calendario/Calendario.vue'
  import HeaderCal from '../components/Calendario/HeaderCalendar.vue'
  import AgendaUser from '../components/Calendario/Evento.vue'
  import {getUserCalendarByEmail} from '@/firebase'
  
  export default {
    name: 'CalendarioView',
    components: {
      HeaderCal,
      CalendarioUser,
      AgendaUser
    },
    async mounted() {
      // Acessando o valor do ID
      const id = this.$route.params.id;
      const documento = await getUserCalendarByEmail(id);

      const vetor = documento.eventos;

      this.$refs.agenda.preencherEventos(vetor);
    },
    methods: {
      atualizarCalendario(dados) {
        this.$refs.calendar.tratarEventosParaCalendario(dados);
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
  