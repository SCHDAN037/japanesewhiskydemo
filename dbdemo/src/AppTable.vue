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
          <td >{{ row.Name }}</td>
          <td >{{ row.Quantity }}</td>
          <td >{{ row.Size }}ml</td>
          <td >{{ row.Volume }}%</td>
          <td >R {{ row.SalePrice }}</td>
          <td >R {{ row.PricePerBottle }}</td>
          <td >R {{ row.PricePerMl }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>

  export default {
    data () {
      return {
        rows: [
          {
            Name: "Daniel's Whisky",
            Quantity: 1,
            Size: 700,
            Volume: 43,
            SalePrice: 2000,
            PricePerBottle: 2000,
            PricePerMl: (2000/700).toFixed(2)
          },
          {
            Name: "Yossi's Whisky",
            Quantity: 3,
            Size: 700,
            Volume: 45,
            SalePrice: 15000,
            PricePerBottle: 5000,
            PricePerMl: (5000/700).toFixed(2)
          },
          {
            Name: "Igna's Whisky",
            Quantity: 2,
            Size: 750,
            Volume: 40,
            SalePrice: 10000,
            PricePerBottle: 5000,
            PricePerMl: (5000/750).toFixed(2)
          }
        ]
      }
    }

  }

</script>
