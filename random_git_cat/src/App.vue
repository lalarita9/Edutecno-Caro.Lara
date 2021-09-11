<template>
  <div id="app">
    <div class="titulo">
       <h1>Random Git Cat</h1>
    </div>
    <div class="formulario">
       <form action="">
         <div><label for="titulo">Título</label>
      <input type="text" id="titulo" v-model="titulo"></div>
      
    <div> <label for="filtro">Filtro</label>
      <select id="filtro" v-model="filtro"> <option name="blur" value="blur">blur</option>
      <option name="mono" value="mono" >mono</option>
       <option name="sepia" value="sepia">sepia</option>
        <option name="negative" value="negative">negative</option>
         <option name="paint" value="paint">paint</option>
          <option name="pixel" value="pixel">pixel</option></select></div>
          <div> <label for="color">Color</label>
      <select id="color" v-model="color"> <option name="red" value="red">red</option>
      <option name="black" value="black">black</option>
       <option name="blue" value="blue">blue</option>
        <option name="yellow" value="yellow">yellow</option>
         <option name="green" value="green">green</option>
          </select>
          <i id="circle" value="" class="fas fa-circle fa-1x" v-bind:style="{color: color}"></i>
          </div>
           <div><label for="tamaño">Tamaño</label>
      <input id="tamaño" type="text" placeholder="ingresar size en px" v-model="tamaño"></div>
        </form>
    </div>
   <div class="boton">
     <button type="button" class="btn" @click="crearGatito"><i class="fas fa-cat fa-1x"></i> obtener mi gatito</button>
   </div>
     <img v-bind:src="imagen" v-bind:style="{width:tamaño, height:tamaño}">
  </div>
    
</template>

<script>


export default {
  name: 'App',
 data() {
    
    return {
      
        titulo: '',
        filtro:'',
        color:'',
        tamaño:'',
        imagen:'',
        }
            
            
    },
    methods:{
    crearGatito(){
      fetch(`https://cataas.com/cat/gif/says/${this.titulo}?filter=${this.filtro}&color=${this.color}&tamaño=${this.tamaño}`)
      .then(resp => this.imagen = resp.url)
      
    },

  },

  
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
#app {
  font-family: 'Bauhaus 93';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #7bd4cc;
 }
 .formulario {
   background-color: #ffb6b9;
   padding: 10px 5px;
 }
 .boton {
   padding: 10px;
 }
 #circle {
   color: transparent;
 }
 label {
   padding: 5px;
 }
 button {
   width: 150px;
   height: 30px;
   text-align: center;
   font-size: 14px;
   color: #193436;
   font-family: 'Bauhaus 93';
   border: none;
   border-radius: 10px;
   background-color: #fbb79e;
 }
 
 
</style>
