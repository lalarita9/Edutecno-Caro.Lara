<template>
  <div id="app">
    
    <ListaTareas msg="Añade y/o Elimina una Tarea"/>
    Tarea:
<input type="text" placeholder="ingresa nueva tarea" v-model="añadetarea"/>

<button v-if="modificar" type="button" name="button" @click="agregarlista">Añade</button>
 
<hr>
      
<ul>
<li v-for="(lista, index) in listas" :key="index">
<span>{{ lista.tarea }}</span>
<button class="btn-eliminar" type="button" name="button" @click="eliminartarea">eliminar</button>
</li>
</ul>
    
  </div>
</template>

<script>
import ListaTareas from './components/ListaTareas.vue'

export default {
  name: 'App',
  components: {
ListaTareas
  },
  data() {
    return {
  modificar: true,

listas: [
  { tarea:'Terminar el dasafío'},
{tarea: 'Ir al supermercado'},
{tarea: 'Pagar cuentas'},
],
añadetarea:'',
}
},
 methods: {
     
                agregarlista: function() {
                                    
					if (this.añadetarea!= ''){
                        this.listas.push({tarea:this.añadetarea, 

					})

                    } else {
                        alert('Por favor ingrese una tarea'
                            )
                    }
                    
	
				this.añadetarea='';
                },
                 eliminartarea(index){
      this.listas.splice(index,1);
    },
            },
}
</script>

<style>
#app {
  font-family: 'Century Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    margin-top: 60px;
}
h1 {
  color: #6d7973;
}
li {
    list-style-position: inside;
    
}
.btn-eliminar {
  margin: 10px;
}
button {
  background-color: white;
  border: 1px solid #323339;
  border-radius: 5px;
}
</style>
