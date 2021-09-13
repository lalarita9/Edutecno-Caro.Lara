<template>
    <div class="text-center">
        <header>
                      <img src="https://www.jeep.cl/wp-content/uploads/sites/3/2020/07/Wrangler-Banner-Web.jpeg" width="100%" height="400px">
        </header>
        <h1 v-text="tituloEntrada"></h1>
        <router-link :to="paginar(false)">Anterior</router-link>|
        <router-link :to="paginar(true)">Siguiente</router-link>|
        <router-link :to="{name: 'historia'}">Historia</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        paginar(siguiente) {
            let entrada = parseInt(this.$route.params.entrada);
            if(siguiente)
            return entrada < 10 ? `/post/${entrada + 1}` : `/post/${entrada}`;
            else return entrada > 1 ? `/post/${entrada + 1}` : `/post/${entrada}`;
        }
    },
    computed: {
        tituloEntrada() {
            return `Entrada ${this.$route.params.entrada} del Post`
        }
    }
}
</script>

