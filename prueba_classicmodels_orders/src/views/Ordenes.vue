<template>
  <div id="ordenes">

    <Listado/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Listado from '@/components/Listado.vue'

export default {
  name: 'Ordenes',
  components: {
    Listado
  }
}
</script>