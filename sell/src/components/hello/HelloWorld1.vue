<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{post}}</h3>
    <h2>Essential Links</h2>
    <h4>{{$route.params.userId}}</h4>
    <router-link :to="{ name: 'test'}">User</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App  2018-04-02',
      loading: false,
      post: this.$route.params.userId,
      error: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
