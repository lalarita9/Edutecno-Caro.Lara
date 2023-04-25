<template>
   <div id="home">
    <NavBar />
    <router-view/>
    <div >

    <h3>Home</h3>
    <b-jumbotron lead="Vitrina">
    <p>For more information visit website</p>
      </b-jumbotron>
  
  
</div>


 
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'Home',
    components: {
      NavBar
      
    },
}
</script>
