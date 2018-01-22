import Vue from 'vue'
import App from './App.vue'

// Entry point

export const eventBus = new Vue({
  methods: {}
})


new Vue({
  el: '#app',
  render: h => h(App)
})

/*

Important terms:

view: the displaying of data
authenticate: ensure credentials are valid
authorize: ensure only authorized access, check privileges
edit: change data in a table
update: take new data and update a View of it in the app
validate: ensure data is correct/valid format
save: send these changes to the backend
commit: commit changes to the db

 */
