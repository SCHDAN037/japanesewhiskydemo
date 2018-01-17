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
      <tr v-for="(row, index) in $data.rows" :key="index">
        <td>{{ row.Name }}</td>
        <td>{{ row.Quantity }}</td>
        <td>{{ row.Size }}ml</td>
        <td>{{ row.Volume }}%</td>
        <td>R {{ row.SalePrice }}</td>
        <td>R {{ row.PricePerBottle }}</td>
        <td>R {{ row.PricePerMl }}</td>
      </tr>
      </tbody>
    </table>

    <button @click="fetchData()">Fetch Data</button>

  </div>
</template>


<script>

  export default {

    props: ['rows', 'fetchData'],
    data() {
      return {
        //this is where our properties go
      }
    }

  }

</script>
