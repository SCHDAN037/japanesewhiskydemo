<template>
  <div class="container" id="app">
    <h1>{{ title }}</h1>

    <button @click="fetchAll">Connect to database</button>

    <app-table></app-table>


  </div>
</template>

<script>
  import AppTable from './AppTable.vue'

  export default {
    name: 'app',
    components: {
      'app-table': AppTable
    },
    data () {
      return {
        title: "Japanese Whisky Demo",
      }
    },
    methods: {
      fetchAll() {
        // connect to db here
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
