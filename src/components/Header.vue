<template id="app-header">
  <header>
    <h1>{{ AppTitle }}</h1>
  </header>
</template>

<script>
  export default {
    template: '#app-header',
    data() {
      return {
        AppTitle: 'Smart Athlete'
      }
    }
  }
</script>