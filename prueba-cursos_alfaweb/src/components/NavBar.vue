<template>
   <div>
    <b-navbar type="dark" variant="primary">
        <b-navbar-brand href="#">Cursos Alfa-WEB</b-navbar-brand>
      
        <b-navbar-nav class="ml-auto">
        <b-dropdown-item tag="div" to="/home"> Home </b-dropdown-item>
            <b-dropdown-item tag="div" :to="{name: 'Administracion'}">Administración</b-dropdown-item>
            <b-dropdown-item  class="mx-5" tag="div" :to="{name: 'Registro'}">Registro</b-dropdown-item>
            <b-dropdown-item class="mx-5" tag="div" :to="{name: 'Login'}">Login</b-dropdown-item>
            <b-dropdown-item  @click="salir"><b-icon icon="box-arrow-right" font-scale="1"></b-icon>   Sing out  </b-dropdown-item>
        </b-navbar-nav>
    </b-navbar>
</div>
</template>
<script>
import firebase from "firebase";
export default {
    name: 'Navbar',
    methods: {
        salir() {
            if(this.$store.getters.enviarUser){
                firebase.auth().signOut().then(() => {
                    this.$router.push('/login').catch(() =>{});
                }).catch((error) => {
                    console.error(error);
                })
            }
        }
    },
}
</script>
