<template>
<div id="app">
    <h3 id="title">{{titulo}}</h3>
Tarea:
<input type="text" placeholder="Ingresa nueva tarea" v-model="nuevatarea"/>

<button type="button" name="button" @click="agregarlista">Crear</button>
 
<hr>
        <h3 id="sub">{{subtitulo}}</h3>
<ul>
<li v-for="(lista, index) in listas" :key="index">
<span>{{ index }} : {{ lista.tarea }}</span>
</li>
</ul>
</div>
</template>
 
<script>

export default {
name: 'App',
data() {
return {
titulo: 'Crea una nueva tarea',
subtitulo: 'Lista',

listas: [{
    
    tarea:'Terminar el dasafío',
},],
nuevatarea:'',
}
},
 methods: {
     
                agregarlista: function() {
                                    
					if (this.nuevatarea!= ''){
                        this.listas.push({tarea:this.nuevatarea, 

					})

                    } else {
                        alert('Por favor ingrese una tarea'
                            )
                    }
                    
	
				this.nuevatarea='';
                }
            },
          
};
</script>
<style scoped>
#app {
    color:black;
    font-size: 20px;
    text-align: center;
    font-family: 'Century Gothic';
}
#title, #sub {
color: #dfe2d2;
font-size: 30px;

}
li {
    list-style-position: inside;
}
</style>
