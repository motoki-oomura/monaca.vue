<template id="app-tabs">
  <v-ons-page>
    <v-ons-toolbar>
      <h2 class="center">{{ pageTitle }}</h2>
    </v-ons-toolbar>
    <v-ons-tabbar swipeable position="auto" :tabs="tabs" :index.sync="activeIndex">
      <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.page" :page-stack="pageStack"></component>
      </template>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import Home from './page/Home.vue';
  import Graph from './page/Graph.vue';
  import Calendar  from './page/Calendar.vue';

  const AppTabs = {
    template: '#app-tabs',
    data() {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: 'ion-home',
            label: 'Home',
            page: Home
          },
          {
            icon: 'ion-home',
            label: 'Graph',
            page: Graph
          },
          {
            icon: 'ion-calendar',
            label: 'Calendar',
            page: Calendar
          }
        ]
      }
    },
    computed: {
      pageTitle() {
        return this.tabs[this.activeIndex].label;
      }
    },
    props: ['pageStack']
  };

  export default AppTabs;
</script>
