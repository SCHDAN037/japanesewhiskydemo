<template>
  <div class="row">
    <div class="col">
    <button class="btn btn-primary" @click="fetchFromDb">Fetch Data from DynamoDB</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  props: ['records'],
  methods: {
    fetchFromDb () {
      console.log('ButtonPanel: Fetching from db...')
      // Here we start a fetch sequence and repopulate the records globally

      axios.get('https://dlc6w6f0zh.execute-api.us-west-2.amazonaws.com/dev/get')
    }
  }
}
</script>

<style scoped>

</style>
