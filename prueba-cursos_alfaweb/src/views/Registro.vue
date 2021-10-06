<template>
<div class="container p-4">
<h2>Registro de Usuario</h2>
<b-form @submit.prevent="registrar">
<b-form-input type="email" placeholder="Ingresa tu email" v-model="email"></b-form-input>
<b-form-input type="password" placeholder="Ingresa tu contraseña" v-model="password"></b-form-input>
<div class="text-center p-4">
<b-button type="submit" variant="success">Resgistrar</b-button>
<b-button type="reset" variant="danger" class="mx-3">Limpiar Formulario</b-button>
<b-button type="reset" variant="warning" class="mx-3">Limpiar Validación</b-button>
</div>
</b-form>
</div>
</template>
<script>
import firebase from "firebase";


export default {
    name: 'Registro',
    data() {
        return {
            email: "",
            password: ""
        }
      
    },
    methods: {
        registrar() {
            console.log(firebase.auth)
            console.log(firebase.default.auth)
firebase.auth().createUserWithEmailAndPassword( this.email, this.password)
.then(()=>{
    alert('usurio registrado correctamente')
    this.$router.push('/login')
})
.catch((error)=>{
    alert(error.message)
})
        }
    }
}
</script>