<template>
  <div class="container" id="app">
    <h1>{{ title }}</h1>
    <keep-alive>
      <component :is="selectedComp" :rows="rows">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Size</th>
          <th scope="col">Volume</th>
          <th scope="col">Sale Price</th>
          <th scope="col">Price per bottle</th>
          <th scope="col">Price per ml</th>
        </tr>
        </thead>
      </component>
    </keep-alive>
    <!--<app-table-view v-if="this.editing === false" :rows="rows"></app-table-view>-->
    <!--<app-table-edit v-else-if="this.editing === true" :rows="rows"></app-table-edit>-->
    <button class="btn btn-primary" @click="fetchData">Fetch from Firebase</button>
    <button class="btn btn-primary" @click="submitData">Save to Firebase</button>
    <button class="btn btn-primary" @click="changeMode">{{ changeModeButton }}</button>
    <button class="btn btn-primary" @click="seedData">Seed Data</button>
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
        selectedComp: 'app-table-view',   // default component view
        changeModeButton: 'Edit'          // default
      }
    },

    methods: {

      submitData() {



        //This is where we save data to the db

        this.$http.put('data.json', this.rows)
          .then(response => {
            console.log(response)
            // alert("Data was submitted")
          }, error => {
            console.log(error)
            // alert("There was an error sending data to the db")
          })

      },

      fetchData() {

        // This is where we will fetch data from the backend db
        this.$http.get('data.json')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.rows = data
            // alert("Data was fetched")
          })
      },

      seedData() {
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
        console.log(newData)
        eventBus.dataWasChanged(newData)
      },

      changeMode() {
        if (this.selectedComp === 'app-table-view') {
          this.selectedComp = 'app-table-edit'
          this.changeModeButton = 'Save'
        }
        else if (this.selectedComp === 'app-table-edit') {
          this.selectedComp = 'app-table-view'
          this.changeModeButton = 'Edit'
        }
      }

    },

    created() {
      // this is where the eventBus listeners for this comp are defined

      eventBus.$on("dataWasChanged", (data) => {
        this.rows = data
      })

      this.fetchData()
    }
  }

</script>

