<template>
    <div class="calendar">
        <vue-cal class="cal" :time="false" active-view="month" events-on-month-view="short"/>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
name:'CalendarioUser',
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
        background: '#f0f0f0',
        color: '#333333'
        },
        header: {
        background: '#dddddd',
        color: '#333333',
        fontWeight: 'bold'
        },
        event: {
        background: '#ffcc00',
        color: '#ffffff',
        borderRadius: '4px'
        }
    },
    eventStyles: {
        backgroundColor: '#ffcc00',
        color: '#ffffff',
        borderRadius: '4px'
    }
    };
}
};
</script>

<style scoped>
    .calendar {
        background-color: rgba(36, 43, 52, 1);
        color: white;
    }

    .cal {
        background-color: rgba(41, 51, 61, 1);
        height: 100%;
    }

</style>