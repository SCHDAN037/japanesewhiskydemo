<template>
  <div>
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
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ row.Name }}</td>
        <td>{{ row.Quantity }}</td>
        <td>{{ row.Size + 'ml'}}</td>
        <td>{{ row.Volume + '%'}}</td>
        <td>{{ 'R ' + row.SalePrice }}</td>
        <td>{{ 'R ' + row.PricePerBottle }}</td>
        <td>{{ 'R ' + row.PricePerMl }}</td>
      </tr>
      </tbody>
    </table>
  </div>


</template>


<script>

  export default {

    name: 'app-table-view',

    //NOTE: Objects and arrays are pass by reference but primitives are pass by copy-value
    //these are inherited from App.vue $data
    props: {
      rows: Array
    },

    data() {
      return {
        //this is where our local props go
      }
    },

    //TODO: look into computed props

    methods: {},

    created() {
      // this is where the eventBus listeners for this comp are defined


    }
  }

</script>

<style scoped>

</style>
