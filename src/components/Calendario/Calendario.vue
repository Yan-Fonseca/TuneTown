<template>
    <div class="calendar">
      <vue-cal
      :time="false"
      active-view="month"
      events-on-month-view="short"
      :styles="calendarStyles"
      :event-styles="eventStyles"
      class="vuecal--full-height-delete"
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
        events: [
          {
            title: 'Event 1',
            start: '2023-06-15',
            end: '2023-06-15'
          },
          {
            title: 'Event 2',
            start: '2023-06-17',
            end: '2023-06-19'
          }
        ],
        calendarStyles: {
          calendar: {
            background: '#ffffff',
            color: '#333333'
          },
          header: {
            background: '#f0f0f0',
            color: '#333333',
            fontWeight: 'bold'
          },
          event: {
            background: '#f0f0f0',
            color: '#333333',
            borderRadius: '4px'
          }
        },
        eventStyles: {
          backgroundColor: '#f0f0f0',
          color: '#333333',
          borderRadius: '4px'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .calendar {
  background-color: #ffffff;
}


.vuecal__calendar-body .vuecal__day-cell {
  height: 60px; 
}
  </style>
  