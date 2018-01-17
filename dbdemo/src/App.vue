<template>
  <div class="container" id="app">
    <h1>{{ title }}</h1>

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
        title: "Japanese Whisky Demo"
      }
    },
    methods: {
      fetchAll() {
        // connect to db here
      }
    }
  }

</script>

