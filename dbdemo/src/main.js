import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://japan-dbdemo.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => {
      return {messages: response.body}
    }
  })
})

// Event Bus is a centralized code/data/event object accessed from all components

//TODO consider redoing this
export const eventBus = new Vue({
  methods: {
    dataWasChanged(data) {
      console.log('eventBus: dataWasChanged')
      this.$emit('dataWasChanged', data)
    },
    editingWasToggled(data) {
      console.log('eventBus: editingWasToggled')
      this.$emit('editingWasToggled', data)
    },

    loggedIn(user, auth) {
      if (auth) {
        console.log("******** Successful Login: " + user)
        this.$emit("userLoggedIn", user)
      }
      else {
        console.log("Failed login attempt: " + user)
        this.$emit("loginFailed", user)
      }
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
