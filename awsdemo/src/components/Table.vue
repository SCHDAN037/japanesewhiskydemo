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
        <tbody v-if="editing === false">
          <tr v-for="row in records" :key="row.id">
            <td v-for="value in row" :key="value">{{ value }}</td>
          </tr>
        </tbody>
        <tbody v-else-if="editing === true">
        <tr v-for="row in records" :key="row.id">
          <!--<th scope="row">{{row.id}}</th>-->
          <td v-for="value in row" :key="value">
            <input class="form-control form-control-sm" type="text" :value="value">
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['records', 'editing'],
  data () {
    return {
      headings: ['ID', 'Name', 'Age', 'Location', 'Volume', 'Quantity', 'Price']
    }
  }
}
</script>

<style scoped>
</style>
