<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item tag="div" to="/home"> Home </b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Equipos'}">Equipos</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Planes'}" >Planes</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Prepago'}" >Prepago</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'OficinaVirtual'}" >Oficina Virtual</b-nav-item>
      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>
  
</div>

 

</template>
<script>
export default {
    name: 'Navbar',
   
}
</script>