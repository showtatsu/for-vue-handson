<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>User Profile</h2>
    <ul v-if='activeUser'>
      <li>name: {{ activeUser.name }}</li>
      <br />
      <li>email: {{ activeUser.email }}</li>
      <br />
      <li>address: {{ activeUser.address }}</li>
      <br />
    </ul>
  </div>
</template>

<script>
import { default as axios } from 'axios'
export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  methods: {
    getUser (id) {
      const uri = 'http://localhost:3000/api/users/' + id
      return axios.get(uri)
        .then(res => this.activeUser = res.data)
    }
  },
  mounted: function () {
    this.getUser(1)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
