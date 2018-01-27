import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Entry point

Vue.use(VueResource)
Vue.http.options.root = 'https://japan-dbdemo.firebaseio.com'

// Event Bus is a centralized code/data/event object accessed from all components
export const eventBus = new Vue({
  methods: {
    dataWasChanged(data) {
      console.log('eventBus: dataWasChanged')
      this.$emit('dataWasChanged', data)
    },
    editingWasToggled(data) {
      console.log('eventBus: editingWasToggled')
      this.$emit('editingWasToggled', data)
    }
  }
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

Notes:

AppTableEdit.vue contains the lifecycle hooks we can use.


 */
