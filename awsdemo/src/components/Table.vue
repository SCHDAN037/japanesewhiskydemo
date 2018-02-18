<template>
<div class="row">
  <div class="col">
  <table class="table table-bordered table-hover table-striped">
    <caption>Table of whisky</caption>
    <thead>
      <tr>
        <th v-for="header in headings" :key="header" scope="col">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in records" :key="row.id">
        <th scope="row">{{row.id}}</th>
        <td>{{row.name}}</td>
        <td>{{row.age}}</td>
        <td>{{row.location}}</td>
        <td>{{row.volume}}</td>
        <td>{{row.quantity}}</td>
        <td>{{row.price}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script>
export default {
  props: ['records'],
  data () {
    return {
      headings: ['ID', 'Name', 'Age', 'Location', 'Volume', 'Quantity', 'Price']
    }
  }
}
</script>

<style scoped>
</style>
