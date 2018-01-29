<template>

  <!--TODO add bootstrap alerts to replace popups-->
  <div class="container" id="app">
    <h1>{{ title }}</h1>
    <login v-if="!loggedIn"></login>
    <div v-if="loggedIn">
      <keep-alive>
        <component :is="selectedComp" :rows="rows">
          <button class="btn btn-warning" @click="fetchData">Seed Data</button>
          <button class="btn btn-primary" @click="fetchFromDb">Fetch from Db</button>
          <button class="btn btn-success" @click="saveToDB">Save to Db</button>
          <button class="btn btn-info" @click="changeMode">{{ changeModeMessage }}</button>
          <button class="btn btn-info" @click="addNewRow" v-if="selectedComp === 'app-table-edit'">Add new Row</button>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

  import AppTableView from './components/AppTableView.vue'
  import AppTableEdit from './components/AppTableEdit.vue'
  import Login from './components/Login'
  import {eventBus} from "./main"

  export default {

    name: 'app',

    components: {
      'app-table-view': AppTableView,
      'app-table-edit': AppTableEdit,
      'login': Login
    },

    data() {

      return {
        title: "Japanese Whisky Demo",
        rows: [],
        editing: false,
        selectedComp: 'login',
        loggedIn: false,
        resource: {},
        changeModeMessage: 'Edit'
      }
    },

    methods: {

      changeMode() {
        if(this.selectedComp === 'app-table-edit') {
          this.selectedComp = 'app-table-view'
          this.changeModeMessage = 'Edit'
        }
        else {
          this.selectedComp = 'app-table-edit'
          this.changeModeMessage = 'View'
        }

      },


      deleteRow(n) {
        this.rows.splice(n)
      },

      addNewRow() {
        this.rows.push(
          {

            Name: "Whisky name",
            Quantity: 0,
            Size: 0,
            Volume: 0,
            SalePrice: 0,
            PricePerBottle: 0,
            PricePerMl: 0

          })
      },

      fetchFromDb() {
        this.resource.get('data.json')
          .then(response => {
            console.log(response)
            eventBus.dataWasChanged(response.body)
          })
      },

      saveToDB() {
        this.resource.update({}, this.rows)
          .then(() => {
            alert("Data was saved")
          })
      },

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
        console.log(newData)
        eventBus.dataWasChanged(newData)
      }

    },

    created() {
      // this is where the eventBus listeners for this comp are defined

      eventBus.$on("dataWasChanged", (data) => {
        this.rows = data
      })

      eventBus.$on("userLoggedIn", () => {
        this.loggedIn = true
        this.fetchFromDb()
        this.selectedComp = "app-table-view"
      })

      //TODO consider moving resources to a global location like main eventBus
      const customActions = {
        //configure resource for custom actions
        createNewUser: {method: 'POST', url: 'users.json'}
      }

      this.resource = this.$resource('data.json', {})
    }
  }

</script>

