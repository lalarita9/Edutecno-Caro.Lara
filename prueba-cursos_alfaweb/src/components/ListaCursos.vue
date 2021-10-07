<template>
<div>
          <b-container>
   <div>
  <b-card-group deck>
      
    <b-card title="HTML Básico" img-src= "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" img-alt="Image" img-top style="max-width: 22rem;" class="bg-danger mb-5 text-white">
      <hr>
       <b-card-text><h4>Información</h4></b-card-text>
              
      <b-card-text><p>Costo: $10.000.-</p>
      <p>Duración: 1 mes</p></b-card-text>
      <b-card-text> <p>Cupos: 35</p>
      <p>Completado: Si</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Curso básico de HTML para principiantes.</b-card-text>
      
    </b-card>

    <b-card title="CSS para principiantes" img-src="https://lineadecodigo.com/wp-content/uploads/2014/04/css.png" img-alt="Image" img-top style="max-width: 22rem;" class="bg-primary mb-5 text-white p-2">
      <hr>
       <b-card-text><h4>Información</h4></b-card-text>
         
      <b-card-text><p>Costo: $10.000.-</p>
      <p>Duración: 1 mes</p></b-card-text>
      <b-card-text> <p>Cupos: 35</p>
      <p>Completado: No</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
     
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Aprendiendo estilos con CSS desde el nivel
más básico.</b-card-text>
    </b-card>

    <b-card title="JavaScript básico de 0 a 100s" img-src="https://cuos.com.ar/img/tecnologias/js.png" img-alt="Image" img-top style="max-width: 22rem;" class="bg-warning mb-5 text-white p-2">
            <hr>
       <b-card-text><h4>Información</h4></b-card-text>
         
      <b-card-text><p>Costo: $20.000.-</p>
      <p>Duración: 2 meses</p></b-card-text>
      <b-card-text> <p>Cupos: 25</p>
      <p>Completado: Si</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
     
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Programando para la web con JavaScript.</b-card-text>

    </b-card>
  </b-card-group>
</div>
<div>
  <b-card-group deck>
    <b-card title="JavaScript Avanzado" img-src="https://i.blogs.es/545cf8/es6-logo/450_1000.png" img-alt="Image" img-top style="max-width: 22rem;" class="bg-warning mb-5 text-white p-2">
       <hr>
       <b-card-text><h4>Información</h4></b-card-text>
         
      <b-card-text><p>Costo: $30.000.-</p>
      <p>Duración: 2 meses</p></b-card-text>
      <b-card-text> <p>Cupos: 20</p>
      <p>Completado: No</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
     
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Curso con las nuevas actualizaciones de
JavaScript.</b-card-text>
    </b-card>

    <b-card title="VueJS de 0 a 100" img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" img-alt="Image" img-top style="max-width: 22rem;" class="bg-success mb-5 text-white p-2">
 <hr>
       <b-card-text><h4>Información</h4></b-card-text>
         
      <b-card-text><p>Costo: $85.500.-</p>
      <p>Duración: 5 meses</p></b-card-text>
      <b-card-text> <p>Cupos: 35</p>
      <p>Completado: No</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
     
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Framework Vue.js desde principiante a
avanzado.</b-card-text>
    </b-card>

    <b-card title="Estilos con SASS" img-src="https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png" img-alt="Image" img-top style="max-width: 22rem;" class="bg-info mb-5 text-white p-2">
       <hr>
       <b-card-text><h4>Información</h4></b-card-text>
         
      <b-card-text><p>Costo: $20.000.-</p>
      <p>Duración: 2 meses</p></b-card-text>
      <b-card-text> <p>Cupos: 40</p>
      <p>Completado: No</p></b-card-text>
     

       <b-card-text>Fecha Registro:</b-card-text>
      <b-card-text>29-09-2021</b-card-text>
     
      
       <b-card-text>Descripción:</b-card-text>
      <b-card-text>Mejorando los estilos con mayor potencia
mediante SASS.</b-card-text>    </b-card>
  </b-card-group>
</div>
      </b-container>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'ListaCursos',
    data() {
      return {
        mostrar: true,
      }
    },
    computed: {
      ...mapGetters(['enviarCursos'])
    },
    mounted() {
    setTimeout(() =>{
      this.mostrar = false;
    },3000)
  }
}
</script>
