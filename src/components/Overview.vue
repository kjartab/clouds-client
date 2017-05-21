<template>
  <div class="overview">
    <h1>{{ msg }}</h1>
    
    </ul>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      msg: 'Welcome to 222Your Vue.js App'
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
