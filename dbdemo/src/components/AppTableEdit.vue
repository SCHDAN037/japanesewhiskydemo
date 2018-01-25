<template>
  <div>
    <form>
      <!--TODO: fix form submission and create form validation-->
      <table class="table table-striped table-bordered">
        <slot></slot>
        <tbody>
        <!--TODO: Make the table cells format nicely on edit-->
        <tr v-for="(row, index) in rows" :key="index">
          <td>
            <p>{{index + 1}}</p>
          </td>
          <td>
            <input type="text" v-model="row.Name">
          </td>
          <td>
            <input type="text" v-model="row.Quantity">
          </td>
          <td>
            <input type="text" v-model="row.Size">
          </td>
          <td>
            <input type="text" v-model="row.Volume">%
          </td>
          <td>R
            <input type="text" v-model="row.SalePrice">
          </td>
          <td>R
            <input type="text" v-model="row.PricePerBottle">
          </td>
          <td>R
            <input type="text" v-model="row.PricePerMl">
          </td>
        </tr>
        </tbody>
      </table>
    </form>
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
      }

    },


    //life cycle hooks:

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
