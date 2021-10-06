<template>
    <div class="container p-4">
        <h2>Login de Usuario</h2>
        <b-form @submit.prevent="ingresar">
        <b-form-input type="email" placeholder="carolina.lara@usuario.cl" v-model="email"></b-form-input>
        <b-form-input type="password" placeholder="1234567" v-model="password"></b-form-input>
<div class="text-center p-4">
<b-button type="submit" variant="success" :loading="loading" >Iniciar</b-button>
<b-button type="reset" variant="danger" class="mx-3">Limpiar Formulario</b-button>
<b-button type="reset" variant="warning" class="mx-3">Limpiar Validación</b-button>
</div>
        </b-form>
       
    </div>
</template>
<script>
import firebase from "firebase";


export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
        loading: false
        }
    
    },
    methods: {
        ingresar(){
            console.log(firebase.auth)
            console.log(firebase.default.auth)
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(()=>{
                this.$router.push('/home')
            })
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message
                console.log(errorCode, errorMessage)
              })
        }
    },
}
</script>