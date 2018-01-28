<template>
  <div class="col col-md-5 col-sm-6">

    <div class="row">
      <h3>Login:</h3>
    </div>
    <div class="row">
      <label for="username">Username:</label>
      <input type="text" id="username" placeholder="Username" v-model="user.username">
      <br><br>
    </div>
    <div class="row">
      <label for="password"></label>
      <input type="password" id="password" placeholder="Password" v-model="user.password">
    </div>
    <div class="row">
      <button @click="login"></button>
    </div>
  </div>
</template>

<script>

  export default {

    name: "login",
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {

      }
    }
  }
</script>

<style scoped>
  div {
    alignment: center;
  }
</style>
