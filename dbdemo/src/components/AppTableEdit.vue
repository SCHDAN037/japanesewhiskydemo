<template>
  <div class="col-auto">
    <!--TODO: create form validation-->
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
          <th scope="row">
            <p>{{index + 1}}</p>
          </th>
          <td>
            <span class="input-group input-group-sm"><input class="form-control" type="text" v-model="row.Name"></span>
          </td>
          <td>
            <span class="input-group input-group-sm"><input class="form-control" type="text" v-model="row.Quantity"></span>
          </td>
          <td>
            <span class="input-group input-group-sm"><input class="form-control" type="text" v-model="row.Size"></span>
          </td>
          <td>
            <span class="input-group input-group-sm"><input class="form-control" type="text" v-model="row.Volume"> %</span>
          </td>
          <td>
            <span class="input-group input-group-sm">R <input class="form-control" type="text" v-model="row.SalePrice"></span>
          </td>
          <td>
            <span class="input-group input-group-sm">R <input class="form-control" type="text" v-model="row.PricePerBottle"></span>
          </td>
          <td>
            <span class="input-group input-group-sm">R <input class="form-control" type="text" v-model="row.PricePerMl"></span>
          </td>
        </tr>
        </tbody>
    </table>
    <slot></slot>
    <button class="btn btn-secondary" @click="changeTestData">Change seed data</button>
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
