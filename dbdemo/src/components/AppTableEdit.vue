<template>
  <div>
    <!--TODO: fix form submission and create form validation-->
    <table class="table table-striped table-bordered">
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
      <tbody>
      <!--TODO: Make the table cells format nicely on edit-->
      <tr v-for="(row, index) in rows" :key="index">
        <td>
          <p>{{index + 1}}</p>
        </td>
        <td>
          <input type="text" :value="row.Name" :placeholder="row.Name">
        </td>
        <td>
          <input type="text" :value="row.Quantity" :placeholder="row.Quantity">
        </td>
        <td>
          <input type="text" :value="row.Size" :placeholder="row.Size">
        </td>
        <td>
          <input type="text" :value="row.Volume" :placeholder="row.Volume">%
        </td>
        <td>R
          <input type="text" :value="row.SalePrice" :placeholder="row.SalePrice">
        </td>
        <td>R
          <input type="text" :value="row.PricePerBottle" :placeholder="row.PricePerBottle">
        </td>
        <td>R
          <input type="text" :value="row.PricePerMl" :placeholder="row.PricePerMl">
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="changeTestData">Change seed data</button>
    <button @click="saveData">Save Data (WIP)</button>
  </div>
</template>

<script>

  import {eventBus} from "../main"

  export default {

    name: 'app-table-edit',

    props: {
      rows: Array
    },

    data() {

      return {}
    },

    methods: {

      //not really needed, used for testing
      changeTestData() {
        let newData = [
          {
            Name: "jeff",
            Quantity: 33,
            Size: 400,
            Volume: 43,
            SalePrice: 4000.2,
            PricePerBottle: 230,
            PricePerMl: 2.56
          },
          {
            Name: "fred",
            Quantity: 3,
            Size: 800,
            Volume: 45,
            SalePrice: 12000,
            PricePerBottle: 6556,
            PricePerMl: 5
          }
        ]
        eventBus.dataWasChanged(newData)
      },

      saveData() {
        //get new data from text fields
        //eventBus.dataWasChanged(newData)
      }
    },


    //life cycle hooks for reference:

    created() {
      // executed when component is created
      // this is where the eventBus listeners for this comp are defined
    },

    activated() {
      // executed when activated (dynamic components)
    },

    deactivated() {
      // executed when deactivated (dynamic components)
    },

    destroyed() {
      // executed when component is destroyed
    }
  }
</script>

<!--scoped is css applied to this file only-->
<style scoped>

</style>
