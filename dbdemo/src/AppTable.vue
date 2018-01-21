<template>
  <div v-if="!editing">
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

  <!--TODO: possibly separate Table View from Edit View-->
  <div v-else-if="editing">
    <!--TODO: fix form submission and create validation-->
    <form METHOD="post" :onsubmit="updateData">
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
          <td><input type="text" :id="index + ',quantity'" :placeholder="row.Quantity"></td>
          <td><input type="text" id="size" :placeholder="row.Size"></td>
          <td><input type="text" id="volume" :width="row.Volume.length + 1" :placeholder="row.Volume">%</td>
          <td>R <input type="text" id="saleprice" :placeholder="row.SalePrice"></td>
          <td>R <input type="text" id="priceperbottle" :placeholder="row.PricePerBottle"></td>
          <td>R <input type="text" id="priceperml" :placeholder="row.PricePerMl"></td>
        </tr>
        </tbody>
      </table>
      <button type="submit">Save Data</button>
    </form>
  </div>
</template>


<script>

  export default {

    //NOTE: Objects and arrays are pass by reference but primitives are pass by copy-value
    //these are inherited from App.vue $data
    //TODO: express properties as a object with type validation
    props: ['rows', 'editing'],

    data() {
      return {
        //this is where our local props go

      }
    },

    methods: {
      updateData() {
        console.log("updating new data")

        var thing = this.document.getElementById('1,,quantity')
        console.log(thing)


        // remember when updating a primitive value, emit and event to notify parent class of change
      }
    }
  }

</script>
