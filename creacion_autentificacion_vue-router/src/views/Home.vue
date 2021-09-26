<template>
  <div>
     
    <h1>Entrando al mundo de Firebase</h1>
    <hr>
    <button @click="logout">Salir</button>
  </div>
</template>

<script>

import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'Home',
 methods: {
   logout () {
      const auth = getAuth();
signOut(auth)
.then(()=> {
  alert ('Has salido correctamente')
  this.$router.push('/')
})
.catch((error)=>{
    alert(error.message)
})
   }
  
 }
}
</script>
