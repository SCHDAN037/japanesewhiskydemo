<template>
  <div class="container" id="app">
    <h1>{{ title }}</h1>

    <component :is="selectedComp"></component>

    <!--<app-table-view v-if="this.editing === false" :rows="rows"></app-table-view>-->
    <!--<app-table-edit v-else-if="this.editing === true" :rows="rows"></app-table-edit>-->
    <button @click="fetchData">Seed Data</button>
    <button @click="selectedComp = 'app-table-edit'">Edit Data</button>
  </div>
</template>

<script>

  import AppTableView from './components/AppTableView.vue'
  import AppTableEdit from './components/AppTableEdit.vue'
  import {eventBus} from "./main"

  export default {

    name: 'app',

    components: {
      'app-table-view': AppTableView,
      'app-table-edit': AppTableEdit
    },

    data() {

      return {
        title: "Japanese Whisky Demo",
        rows: [],
        editing: false,
        selectedComp: 'app-table-view'
      }
    },

    methods: {

      fetchData() {
        // This is where we will fetch data from the backend db
        // This is just seed data
        console.log(' *** Setting rows in App with seed data')

        let newData = [
          {
            Name: "Daniel's Whisky",
            Quantity: 1,
            Size: 700,
            Volume: 43,
            SalePrice: 2000,
            PricePerBottle: 2000,
            PricePerMl: (2000 / 700).toFixed(2)
          },
          {
            Name: "Yossi's Whisky",
            Quantity: 3,
            Size: 700,
            Volume: 45,
            SalePrice: 15000,
            PricePerBottle: 5000,
            PricePerMl: (5000 / 700).toFixed(2)
          },
          {
            Name: "Igna's Whisky",
            Quantity: 2,
            Size: 750,
            Volume: 40,
            SalePrice: 10000,
            PricePerBottle: 5000,
            PricePerMl: (5000 / 750).toFixed(2)
          },
          {
            Name: "Arnon's Whisky",
            Quantity: 1,
            Size: 750,
            Volume: 40,
            SalePrice: 1000,
            PricePerBottle: 1000,
            PricePerMl: (1000 / 750).toFixed(2)
          }
        ]

        console.log(" *** Fetching data from App: ")
        this.rows = newData
        console.log(this.rows)

      },

      toggleEdit() {
        this.editing = !this.editing
        this.selectedComp = this.editing ? 'app-table-edit' : 'app-table-view'
        eventBus.editingWasToggled(this.editing)
      }
    },

    created() {
      // this is where the eventBus listeners for this comp are defined

    }
  }

</script>

