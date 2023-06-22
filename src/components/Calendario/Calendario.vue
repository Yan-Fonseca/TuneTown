<template>
  <div class="calendar">
    <vue-cal
      active-view="month"
      events-on-month-view="short"
      :events="events"
      style="height: 93vh"
    ></vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  name: 'CalendarioUser',
  components: {
    VueCal
  },
  data() {
    return {
      events: []
    };
  },
  methods: {
    tratarEventosParaCalendario(dados) {
      this.events = [];
      dados.forEach(element => {
        this.events.push({
          title: element.nome,
          start: element.data,
          end: element.data,
          content: element.descricao,
          class: 'music'
        });
      });
    }
  }
};
</script>

<style>
.calendar {
  background-color: #ffffff;
}

.vuecal__event.music {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}

</style>
  