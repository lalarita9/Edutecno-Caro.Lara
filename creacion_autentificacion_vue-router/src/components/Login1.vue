<template>
    <div>
        <form @submit.prevent="ingresar">
        <input type="email" placeholder="Ingresa tu email" v-model="email">
        <input type="password" placeholder="Ingresa tu contraseña" v-model="password">
        <button type="submit">Ingresar</button>
        </form>
    </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
    name: 'Login1',
    data() {
        return {
            email: "",
            password: ""
        }
      
    },
    methods: {
        ingresar() {
            const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
.then(()=>{
    alert('usurio logueado correctamente')
    this.$router.push('/home')
})
.catch((error)=>{
    alert(error.message)
})
        }
    }
}
</script>
