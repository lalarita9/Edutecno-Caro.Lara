<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <!-- MENU DE NAVEGACION -->
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                    <router-link to="/">Portada</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                    <router-link to="/sobremi">Sobre Mí</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                    <router-link to="/contacto">Contacto</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                    <router-link to="/post/1" >Ultimo Post</router-link>
                    </li>
                </ul>
        </div>
        </div>
    </nav>
    <transition name= "mi-transicion">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#found {
  padding: 50px;
  background-color: #3e3e3b;
  text-align: center;
  color: #fff;
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
.mi-transicion-enter-active , .mi-transicion-leave-active {
transition : opacity 0.2s;
}
.mi-transicion-enter , .mi-transicion-leave-to {
opacity : 0 ;
}

</style>
