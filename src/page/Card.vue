<template id="card">
  <v-ons-page>
    <h2>{{ title }}</h2>
  </v-ons-page>
</template>


<script>
  const Card = {
    data() {
      return {
        title: 'Card'
      }
    },
    props: ['pageStack']
  };

  export default Card;
</script>