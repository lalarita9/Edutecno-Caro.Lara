<template>
   <div id="app">
    <NavBar />
    <router-view/>
 
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import firebase from "firebase";


  export default {
    name: 'App',
    components: {
      NavBar
      
    },
     data: () =>({
  }),
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch('agregarUser', user)
        console.log('Sesion Activa');
      } else {
        console.log('No hay sesion activa...')
        this.$store.dispatch('agregarUser', '')
      }
    });
    this.$store.dispatch('traerDatos');
  },
};

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}




</style>
