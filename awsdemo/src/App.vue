<template>
  <div class="container">
    <h1>AWS + Vue.js Demo</h1>
    <p><i>by Daniel Schwartz</i></p>
    <hr>
    <router-view :records="records"/>
    <button-panel :records="records"></button-panel>
  </div>
</template>

<script>
  import ButtonPanel from './components/ButtonPanel'

  export default {
  name: 'App',
  components: {
    'button-panel': ButtonPanel
  },
  data () {
    return {
      records: [
        {
          id: 'jw-1',
          name: 'Hibiki',
          age: '12yo',
          location: 'Hibiki',
          volume: '43%',
          quantity: '4 bottles',
          price: 'R 2000'
        },
        {
          id: 'jw-2',
          name: 'Suntory',
          age: '17yo',
          location: 'Suntory',
          volume: '40%',
          quantity: '2 bottles',
          price: 'R 5000'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
