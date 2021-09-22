<template>
    <div>
         <h1>Lista de Juegos</h1>
    <h3>Filtrar Juego por Código</h3>
    <input type="text" v-model="filtroCodigo">
    <div v-if="filtroJuego.length > 0">
      <div v-for="(id, clave) in filtroJuego" :key="clave">
        <div><h4>Nombre: {{id.nombre}} - Stock: {{id.stock}} - Precio: {{id.precio}} </h4></div> 
      </div>
    </div>
    <h3>Total Número de Juegos</h3>
    <div><h4>{{totalJuegos}}</h4></div>
    <div  v-for="(cantidad, index) in stock" :key="index"></div> 
    <div>
       <h3>Cantidad Total de Juegos en Stock</h3>
      <h4>{{totalS}}</h4></div>
    <br>
    <table class="tabla">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Color</th>
          <th>Destacado</th>
        </tr>
      </thead>
        <tbody>
            <tr v-for="(lista, index) in listas" :key="index" :style="{backgroundColor: lista.color}">
            <td> {{lista.codigo}} </td>
            <td> {{lista.nombre}} </td>
            <td> {{lista.stock}} </td>
            <td> {{lista.precio}} </td>
            <td>{{lista.color}}</td>
          <td>{{lista.destacado}}</td>
            </tr>   
        </tbody>   
    </table>  
    </div>
</template>
<script>
export default {
   name: 'Listado',
    data() {
      return {
        filtroCodigo: '',
      }
    },
    computed: {
    listas() {
      return this.$store.getters.numeroJuegos;
    },
    filtroJuego(){
      return this.$store.getters.filtroJuego(this.filtroCodigo);
    },
    totalJuegos(){
      return this.$store.getters.totalJuegos;
    },
    stock(){
        
      return this.$store.getters.totalStock;
    },
    totalS() {
      return this.$store.getters.totalS;
    }
    },
  
}

</script>
<style >
.tabla {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
  
}
tr, td, th {
    font-family: 'Century Gothic';
    
  
}
h4 {
color: #4bbcf4;
}
</style>