<template>
    <div>
        <h1>Venta de juegos</h1>
        <h2>Cantidad de juegos en stock:</h2>
        <h4> {{juegosEnStock}}</h4>
        <table class="tabla">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Vender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(lista, index) in ventas" :key="index">
                    <td>{{lista.codigo}}</td>
                    <td>{{lista.nombre}}</td>
                    <td>{{lista.stock}}</td>
                    <td>$ {{lista.precio}}</td>
                    <td><button  @click="vender(index)">Vender</button></td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Ventas',
    computed: {
        ventas(){
            return this.$store.getters.ventasHechas;
        },
        juegosEnStock(){
            return this.$store.getters.totalJuegos;
        },
    },
    methods: {
        ...mapActions(['vender'])
        /*vender(index){
            this.$store.dispatch('vender',index);
        }*/
    },
}
</script>
<style >
.tabla {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  
  
}
table, td, th {
  border: 1px solid black;
}
tr, td, th {
     font-family: 'Century Gothic';
     padding: 5px 10px;
}
h4 {
color: #4bbcf4;
}
</style>