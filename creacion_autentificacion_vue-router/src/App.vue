<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button {
   background-image: linear-gradient(rgb(246, 250, 33), rgb(230, 185, 39));
    width: 80px;
    height: 25px;
    border: none;
    border-radius: 5px;
}
input {
  width: 200px;
    height: 25px;
    border: 1px solid rgb(37, 37, 16);
    border-radius: 5px;
    color: #3c455c;
    margin: 5px;
    font-size: 12px;
    font-family: 'Century Gothic', sans-serif;
}
</style>
