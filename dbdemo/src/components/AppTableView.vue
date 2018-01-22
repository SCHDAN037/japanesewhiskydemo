<template>
  <div>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
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


    //NOTE: Objects and arrays are pass by reference but primitives are pass by copy-value
    //these are inherited from App.vue $data
    //TODO: maybe use callback functions, defined in the parent, and passed as a prop fn: Function and called on @click event (like saving data)
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
