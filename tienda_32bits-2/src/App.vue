<template>
  <div id="app">
    <nav>
      <span>32bits</span>
      <ul>
      <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
       <li><router-link :to="{name: 'busquedas'}">Búsquedas</router-link></li>
        <li><router-link :to="{name: 'ventas'}">Ventas</router-link></li>
         <li><router-link :to="{name: 'total'}">Total</router-link></li>
    </ul>
    </nav>
    <div>
      <h2>Juegos de PC y consolas</h2>
<hr>
    </div>
    
    
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
#app {
  text-align:center;
}
nav {
  width: 100%;
  background-color: #323339;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
span {
 width: 100px;
 color: #4bbcf4;
 margin-left: 15px;
 font-family:'Colonna MT';
 font-size: 40px;
}
ul {
  list-style: none;
  padding: 0;
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-family: 'Century Gothic';
  }
a {
  text-decoration: none;
  color: #fff;
}

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}

</style>
