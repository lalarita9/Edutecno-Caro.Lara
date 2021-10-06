<template>
<div >
  
  <b-navbar toggleable toggle-class="text-dark" variant="ligth">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand>Mi APP</b-navbar-brand>
    <b-collapse id="nav-collapse"  is-nav>
      <b-navbar-nav >
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     
     <b-nav>
        <b-nav-item link-classes="text-dark" href="#">Inicio</b-nav-item>
        <b-nav-item link-classes="text-dark" href="#">Buscar</b-nav-item>
        <b-nav-item link-classes="text-dark" href="#">Acerca de</b-nav-item>
     </b-nav>
  </b-navbar>

  <b-container class="my-5 bv-example-row">
    <b-card-group>
    <b-row>
      <b-col class="mb-3" cols="6" sm="8" md="4" lg="4" xl="4" v-for="(producto,index) in productos" :key="index">
          <b-card>
            <b-img thumbnail fluid  :src="producto.imagen" img-alt="Card image" img-top></b-img>
            <b-card-text>
              {{producto.nombre}}
            </b-card-text>
          </b-card>
      </b-col>
    </b-row>
    </b-card-group>
  </b-container>
</div>
  
</template>

<script>  
export default {
  name: 'Personajes',
    data(){
      return {
        productos: [
          {
          'id' : 1 ,
          'nombre' : 'Morty' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          },
          {
          'id' : 2 ,
          'nombre' : 'Rick' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
          'id' : 3 ,
          'nombre' : 'Summer' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
          },
          {
          'id' : 4 ,
          'nombre' : 'Beth' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
          },
          {
          'id' : 5 ,
          'nombre' : 'Jerry' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
          }
          ]
      }
    }
  }
</script>


<style scoped>

</style>
