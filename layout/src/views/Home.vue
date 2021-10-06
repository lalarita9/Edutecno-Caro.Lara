<template>
  <div class="home">

    <Personajes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Personajes from '@/components/Personajes.vue'

export default {
  name: 'Home',
  components: {
    Personajes
  }
}
</script>
