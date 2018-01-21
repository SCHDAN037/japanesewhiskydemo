<template>
  <div>
    <!--TODO: fix form submission and create form validation-->
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
      <!--TODO: Make the table cells format nicely on edit-->
      <tr v-for="(row, index) in rows" :key="index">
        <td>
          <input type="text" id="name" :placeholder="row.Name">
        </td>
        <td><input type="text" :placeholder="row.Quantity"></td>
        <td><input type="text" :placeholder="row.Size"></td>
        <td><input type="text" :width="row.Volume.length + 1" :placeholder="row.Volume">%</td>
        <td>R <input type="text" :placeholder="row.SalePrice"></td>
        <td>R <input type="text" :placeholder="row.PricePerBottle"></td>
        <td>R <input type="text" :placeholder="row.PricePerMl"></td>
      </tr>
      </tbody>
    </table>
    <button type="submit">Save Data</button>
  </div>
</template>

<script>
  export default {

    data() {
      return {}
    },

    props: {
      rows: Array
    }

  }
</script>

<style scoped>

</style>
