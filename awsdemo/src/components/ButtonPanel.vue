<template>
  <div class="row">
    <div class="col">
      <button class="btn btn-primary" @click="fetchFromDb">Fetch Data from DynamoDB</button>
      <button class="btn btn-secondary" @click="toggleEdit">{{ editing ? "View" : "Edit" }} Table</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { eventBus } from '../main'

  export default {
  props: {
    'records': {
      'type': Array
    },
    'editing': {
      'type': Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    fetchFromDb () {
      // Here we start a fetch sequence and repopulate the records globally
      console.log('ButtonPanel: Fetching from db...')
      axios.get('https://dlc6w6f0zh.execute-api.us-west-2.amazonaws.com/dev/get')
        .then(res => {
          // console.log('ButtonPanel: response: ', res)
          eventBus.$emit('RecordsUpdated', res.data.records)
        })
        .catch(err => console.log('ButtonPanel: error: ', err))
      console.log('ButtonPanel: records: ', this.records)
    },
    toggleEdit () {
      eventBus.$emit('ToggleEdit', !this.editing)
    }
  }
}
</script>

<style scoped>

</style>
