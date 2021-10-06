<template>
<div>
  <div v-if="this.$route.params.id" class="container my-5">
        <h2 class="text-center mb-4">Editando el  Curso:</h2>
        <b-form @submit.prevent="editar">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="categoria.nombre" type="text" required placeholder="Ingresar Nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="URL de la imagen del curso:" label-for="input-2">
                <b-form-input id="input-2" v-model="categoria.imagen" type="text" required placeholder="Ingresar URL"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Cupos del Curso:" label-for="input-3">
                <b-form-input id="input-3" v-model="categoria.cupos" type="number" required placeholder="Ingresar Cupos"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Inscritos en el Curso:" label-for="input-4">
                <b-form-input id="input-4" v-model="categoria.inscritos" type="number" required placeholder="Ingresar Inscritos"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Duración del Curso:" label-for="input-5">
                <b-form-input id="input-5" v-model="categoria.duracion" type="text" required placeholder="Ingresar Duración"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Costo del Curso:" label-for="input-6">
                <b-form-input id="input-6" v-model="categoria.costo" type="number" required placeholder="Ingresar Costo"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-7" label="Código del Curso:" label-for="input-7">
                <b-form-input id="input-7" v-model="categoria.codigo" type="text" required placeholder="Ingresar Código"></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-8" label="Descripción del Curso:" label-for="input-8">
            <b-form-textarea id="input-8" v-model="categoria.descripcion" placeholder="Ingresar Descripción" type="text" itemref="" max-rows="6"></b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-9" label="Fecha de Registro:" label-for="input-9">
                <b-form-input id="input-9" v-model="categoria.fecha" type="fecha" required placeholder="Ingresar Fecha"></b-form-input>
            </b-form-group>
             <b-form-checkbox v-model="categoria.checked" name="check-button" switch>
      Terminado:<b>{{ categoria.checked }}</b>
    </b-form-checkbox>

            <div class="text-center p-4">
<b-button type="submit" variant="success">Actualizar</b-button>
<b-button type="reset" variant="danger" class="mx-3">Limpiar Formulario</b-button>
<b-button type="reset" variant="warning" class="mx-3">Limpiar Validación</b-button>
<b-button type="reset" variant="primary" class="mx-3" @click="$router.push('/administracion')">Regresar</b-button>
</div>
</b-form>
</div>
</div>
    
</template>
<script>
import {mapGetters} from 'vuex';
  export default {
    name: "EditarCurso",
    props: ['id'],
    ...mapGetters(['enviarCurso']),
    data() {
        return {
            categoria: {
                nombre: '',
                imagen: '',
                cupos: '',
                inscritos: '',
                duracion: '',
                costo: '',
                codigo: '',
                descripcion: '',
                fecha: '',
                checked: 'false',
            }
        }
    },
     mounted() {
        let categoria = {};
        categoria = this.$store.getters.enviarCursos.find(resp => resp.id === this.$route.params.id)
        if (categoria !== undefined){
            this.categoria.nombre = categoria.nombre;
           this.categoria.imagen = categoria.imagen;
           this.categoria.cupos = categoria.cupos;
           this.categoria.inscritos = categoria.inscritos;
           this.categoria.duracion = categoria.duracion;
           this.categoria.costo = categoria.costo;
           this.categoria.codigo = categoria.codigo;
           this.categoria.descripcion = categoria.descripcion;
           this.categoria.fecha = categoria.fecha;
           this.categoria.checked = categoria.checked;
            this.categoria.id = categoria.id;
        }else {
            this.$message('');
            setTimeout(()=>{
                this.$router.push('/administracion');
            },1000);
        }

    },
    methods: {
        editar(){
            if (this.categoria.nombre && this.categoria.imagen && this.categoria.cupos >= 0 && this.categoria.inscritos > 0 && this.categoria.duracion && this.categoria.costo > 0  && this.categoria.codigo  && this.categoria.descripcion && this.categoria.fecha && this.categoria.checked){
                let data = {
                    nombre: this.categoria.nombre,
                    imagen: this.categoria.imagen,
                    cupos: this.categoria.cupos,
                    inscritos: this.categoria.inscritos,
                    duracion: this.categoria.duracion,
                    costo: this.categoria.costo,
                    codigo: this.categoria.codigo,
                    descripcion: this.categoria.descripcion,
                    fecha: this.categoria.fecha,
                    checked: this.categoria.checked,
                    id: this.categoria.id,
                }
                this.$confirm('¿Deseas editar este curso?', 'Informativo', {
                            confirmButtonText: 'Sí',
                            cancelButtonText: 'No',
                            type: 'info',
                            center: true
                            }).then(() => {
                            this.$message({
                                type: 'success',
                                message: 'Curso editado exitosamente'
                            });
                            this.$store.dispatch('editarCurso', data);
                            }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: 'Acción cancelada'
                            });          
                        });               
            } else {
                console.log("No se puede");
            }
        }
    },
    }
 </script>