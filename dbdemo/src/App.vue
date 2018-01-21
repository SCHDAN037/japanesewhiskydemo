<template>
  <div class="container" id="app">
    <h1>{{ title }}</h1>

    <app-table :editing="editing" :rows="rows"></app-table>

    <button @click="fetchData">Fetch Data</button>
    <button @click="editData">Edit Data</button>

  </div>
</template>

<script>

  import AppTable from './AppTable.vue'

  export default {
    name: 'app',
    components: {
      'app-table': AppTable
    },
    data() {
      return {
        title: "Japanese Whisky Demo",
        rows: [],
        editing: false
      }
    },
    methods: {
      fetchData() {
        // This is where we will update the table with all the data
        //This is just seed data
        console.log('updating rows')

        this.rows = [
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

        console.log(this.rows)

        this.$emit('updatedRows', this.rows)

      },
      editData() {
        this.editing = !this.editing

      }
    }
  }

</script>

