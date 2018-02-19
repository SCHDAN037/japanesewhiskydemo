<template>
  <div class="container">
    <h1>AWS + Vue.js Demo</h1>
    <p><i>by Daniel Schwartz</i></p>
    <hr>
    <router-view :records="records" :editing="editing"/>
    <button-panel :records="records" :editing="editing"></button-panel>
  </div>
</template>

<script>
  import ButtonPanel from './components/ButtonPanel'
  import { eventBus } from './main'

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
      ],
      editing: false
    }
  },
  created () {
    eventBus.$on('RecordsUpdated', (records) => {
      this.records = records
    })
    eventBus.$on('ToggleEdit', (editing) => {
      this.editing = editing
    })
  }
}
</script>

<style scoped>
</style>
