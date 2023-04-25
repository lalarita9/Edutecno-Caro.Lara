<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item tag="div" :to="{name: 'Home'}"> Home </b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Ordenes'}">Ordenes</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Inventario'}" >Inventario</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Profile'}" >Profile</b-nav-item>
        <b-nav-item tag="div" :to="{name: 'Log out'}" >Log out</b-nav-item>
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