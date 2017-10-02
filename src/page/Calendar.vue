<template id="page-calendar">
  <v-ons-page>
    <div>{{ title }}</div>
  </v-ons-page>
</template>

<script>
  const Calendar = {
    template: 'page-calendar',
    data() {
      return {
        title: 'calendar'
      }
    }
  };

  export default Calendar;
</script>