<template>
  <div id="app">
    <img alt="logo pokemon" src="./assets/logo_pokemon.png">
     <h2>PokeGuía</h2>
            <label for="nombre_pokemon">Nombre</label>
            <input type="text" id="nombre_pokemon" v-model="pokemon_nombre.name">
           
            <button  type="button" class="btn" @click="createBuscar"><i class="fas fa-search fa-1x"></i></button>
            <br>
            
            <div v-if="ver">
              <img class="poke-img" v-bind:src= "image" >
            
              <h3>Movimientos</h3>
             <ul>
        <li v-for="(movimiento, index) in moves" :key="index">
          {{movimiento.move.name }}
        </li>
      </ul>
       <h3>Habilidades</h3>
        <ul>
        <li v-for="(habilidad, index) in abilities" :key="index">
        {{habilidad.ability.name }}
        </li>
      </ul>
            </div>
 
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    
    return {
      pokemon_nombre: {
        name: 'pikachu',
        moves:{},
        abilities:{},
        sprites:{
          front_default: '',
        },
        
      },
        ver: 'true',
      
            
    }
  },
  methods:{
    createBuscar(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon_nombre.name}`)
      .then(resp => resp.json())
      .then(data => {
        this.pokemon_nombre = data;
        
        
      })
.catch(error => {

    console.log('El nombre del Pokemon no es valido',error)

                   })
    },

  },
  computed:{
    moves(){
      return this.pokemon_nombre.moves;
    },
    abilities(){
      return this.pokemon_nombre.abilities;
    },
    image(){
      return this.pokemon_nombre.sprites.front_default;
    },
  },
  
  created(){
    this.createBuscar();
  },
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
body {
      box-sizing: border-box;
      background: url(https://images6.alphacoders.com/661/thumb-1920-661968.png);
 background-repeat: no-repeat;
 background-size: cover;
}

#app {

  font-family: 'Bodoni MT Black';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #323339;
  font-size: 20px;
  
}
img {
  width: 300px;
  height: 100px;
}
.poke-img{
  width: 200px;
  height: 200px;
  }
.btn {
   background-color: #ffcb05;
    width: 50px;
    height: 25px;
    border: 3px solid #2a75bb;
    border-radius: 10px;
    
}
i {
  color:#2a75bb;
  font-weight: bold;
}
h3{
  color: #00281f;
  
}
li {
  list-style: none;
  color: #ffcb05;
  font-size: 20px;
  font-family: 'Berlin Sans FB';
  text-shadow: 5px 5px 5px #2a75bb;
}

</style>
