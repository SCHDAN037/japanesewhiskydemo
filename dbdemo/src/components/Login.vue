<template>
  <div class="col-auto">
    <form>
      <div class="form-group">
        <div class="row">
          <h3>Login:</h3>
        </div>
        <div class="row">
          <label for="username">Username: </label>
          <input type="text" id="username" placeholder="Username" v-model="currentUser.username">

        </div>
        <br>
        <div class="row">
          <label for="password">Password: </label>
          <input type="password" id="password" placeholder="Password" v-model="currentUser.password">
        </div>
        <br>
        <div class="row">
          <button class="btn btn-primary" @click.prevent="login">Submit</button>
        </div>
      </div>
    </form>
    <div class="row">
      <h3 v-if="auth">{{ successMessage }}</h3>
      <h3 v-if="failedLogin">{{ failedMessage }}</h3>
    </div>
    <!--<p>{{ currentUser.username }}</p>-->
    <!--<p>{{ currentUser.password }}</p>-->
  </div>
</template>

<script>

  import Creds from '../../.creds'
  import {eventBus} from '../main'

  export default {

    name: "login",

    data() {
      return {
        currentUser: {
          username: '',
          password: ''
        },
        creds: Creds,
        auth: false,
        failedLogin: false,
        loggedInUser: '',
        successMessage: 'Welcome ',
        failedMessage: 'Username or Password is incorrect, please try again'
      }
    },
    methods: {
      login() {
        let credUsers = this.creds

        let currentUsername = this.currentUser.username
        let currentPassword = this.currentUser.password

        console.log("Username: " + currentUsername + "\nPassword: " + currentPassword)
        console.log("credUsers: " + credUsers)

        this.creds.forEach(x => {
          console.log(x.username, x.password)

          console.log("INSIDE FOR LOOP")

          if (x.username === currentUsername && x.password === currentPassword) {
            console.log("IF IS TRUE")
            this.loggedInUser = currentUsername
            this.successMessage = this.successMessage + currentUsername
            this.auth = true
          }
        })
        console.log("User to log in: " + currentUsername + "\nPassword for user: " + currentPassword)

        eventBus.loggedIn(currentUsername, this.auth)
      }
    },

    created() {

      eventBus.$on("userLoggedIn", (user) => {
        this.failedLogin = false
        this.loggedInUser = user
        console.log("logged in as: " + user)
      })

      eventBus.$on("loginFailed", (user) => {
        this.failedLogin = true
        console.log("failed to login in as: " + user)
      })

    }
  }
</script>

<style scoped>

</style>
