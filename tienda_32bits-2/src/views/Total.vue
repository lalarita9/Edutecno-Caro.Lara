<template>
    <div>
        <h1 >Total de Ventas</h1 >
        <h2>Total Ventas Registradas: </h2>
        <h4>{{mostrarVentas}}</h4>


            <h2>Monto total de Ventas: </h2>
            <h4>{{mostrarTotalVentas}}</h4>
<hr> 
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    
    computed: {
        ...mapGetters(['mostrarVentas', 'mostrarTotalVentas'])
    }
}
</script>

<style>
    
</style>