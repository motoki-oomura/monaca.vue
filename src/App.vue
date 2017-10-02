<template id="app">
  <v-ons-splitter></v-ons-splitter>
  <v-ons-navigator :page-stack="pageStack">
    <component v-for="page in pageStack" :is="page" :key="page" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>

  const App = {
    template: '#app',
    props: ['pageStack']
  };

  export default App;
</script>
