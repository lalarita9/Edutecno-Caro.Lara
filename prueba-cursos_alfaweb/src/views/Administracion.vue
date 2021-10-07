<template>

    <div class="container my-4 text-center">
<div><h2>Administración</h2><b-button type="button" class="mb-5 px-5 mx-5" pill variant="primary"  @click="$router.push('/agregar')" @click.prevent="addCurso">Agregar Curso</b-button></div>
        
        <table class="table" >
        <thead>
            <tr class="bg-link text-black">
            <th scope="col">Curso</th>
            <th scope="col">Cupos</th>
            <th scope="col">Inscritos</th>
            <th scope="col">Duración</th>
            <th scope="col">Costo</th>
            <th scope="col">Terminado</th>
             <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
            </tr>

        </thead>
        <tbody v-for="(item, index) in traerCurso" :key="index">
            <tr class="bg-light">
            <th>{{item.nombre}}</th>
            <td>{{item.cupos}}</td>
            <td>{{item.inscritos}}</td>
            <td>{{item.duracion}}</td>
            <td ><p id="circulo">${{item.costo}}</p></td>
            <td><p id="circulo1">{{item.checked}}</p></td>
             <td ><p id="circulo">{{item.fecha}}</p></td>
            
            <td>
        <b-button-group class="mr-1" >
        <b-button title="Editar" variant="light">
          <b-icon icon="pencil" font-scale="1" @click.prevent="editCurso(item.id)"></b-icon>
        </b-button>
        <b-button title="Eliminar" variant="light" type="success">
          <b-icon icon="trash" font-scale="1" @click.prevent="elimCurso(item.id)"></b-icon>
        </b-button>
      </b-button-group>
           
            </td>
            </tr>
                   
        </tbody>
        <tr id="pag"><b-pagination v-model="currentPage" pills :total-rows="rows" ></b-pagination></tr>
        </table>
        <div>
  <b-list-group>
  <b-list-group-item id="link-1"><b-icon icon="people"></b-icon> Cantidad de alumnos permitidos: {{totalAlumnos}} alumnos</b-list-group-item>
 
  <b-list-group-item id="link-2"><b-icon icon="person-check-fill"></b-icon> Cantidad de alumnos inscritos: {{totalInscritos}} alumnos</b-list-group-item>
 
  <b-list-group-item id="link-3"><b-icon icon="person-dash"></b-icon> Cantidad total cupos restantes: {{cuposRestantes}} alumnos</b-list-group-item>
  
  <b-list-group-item id="link-4"><b-icon icon="slash-circle"></b-icon> Cantidad total de cursos terminados: {{cursosTerminados}} cursos</b-list-group-item>
  
  <b-list-group-item id="link-5"><b-icon icon="bell"></b-icon> Cantidad total de cursos activos: {{cursosActivos}} cursos</b-list-group-item>
 
  <b-list-group-item id="link-6"><b-icon icon="bell-fill"></b-icon> Cantidad total de cursos: {{cursosTotal}} cursos</b-list-group-item>
  </b-list-group>

</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    },
    
    methods: {
            editCurso(id){
                this.$router.push({name: 'Editar', params: {id: id}});
            },
            addCurso(){
                this.$router.push('/agregar')
            },
  
  elimCurso(id){
        this.$confirm('¿Seguro que desea eliminar este Curso?', 'Advertencia', {
          confirmButtonText: 'Sí',
          cancelButtonText: 'No',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Eliminado'
          });
          this.$store.dispatch('eliminarCurso',id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'No se ha eliminado'
          });          
        });
      },
    },
    mounted() {
            this.$store.dispatch('traerDatos');
        },
        computed: {
            traerCurso() {
                return this.$store.getters.enviarCursos;
            },
            ...mapGetters(["totalAlumnos", "totalInscritos", "cuposRestantes", "cursosTerminados", "cursosActivos", "cursosTotal"]),
        },

  }
</script>

<style>
#link-1 {
    border: 2px solid #aa07b5;
    color: #aa07b5;
    padding: 5px;
    font-size: 18px;
}
#link-2 {
    border: 2px solid #2107b5;
    color: #2107b5;
    padding: 5px;
    margin-top: 5px;
    font-size: 18px;
}
#link-3 {
    border: 2px solid #c20606;
    color: #c20606;
    padding: 5px;
    margin-top: 5px;
    font-size: 18px;
}
#link-4 {
    border: 2px solid #f706a7;
    color: #f706a7;
    padding: 5px;
    margin-top: 5px;
    font-size: 18px;
}
#link-5 {
    border: 2px solid #4b2022;
    color: #4b2022;
    padding: 5px;
    margin-top: 5px;
    font-size: 18px;
}
#link-6 {
    border: 2px solid #c20606;
    color: #c20606;
    padding: 5px;
    margin-top: 5px;
    font-size: 18px;
}
#pag {
    text-align: right;
}
#circulo {
    background: green;
    border-radius: 25px;
    height: 30px;
    color: #fff;
}
#circulo1 {
    background: grey;
    border-radius: 25px;
    height: 30px;
    color: #fff;
}
</style>