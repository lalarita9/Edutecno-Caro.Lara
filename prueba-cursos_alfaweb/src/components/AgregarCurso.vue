<template>

    <div class="container my-5">
        
        <h2 class="text-center mb-4">Agregando Curso</h2>
        <b-form @submit.prevent="agregar">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="categoria.nombre" type="text" required placeholder="Ingresar Nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="URL de la imagen del curso:" label-for="input-2">
                <b-form-input id="input-2" v-model="categoria.imagen" type="text" required placeholder="Ingresar URL"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Cupos:" label-for="input-3">
                <b-form-input id="input-3" v-model="categoria.cupos" type="number" required placeholder="Ingresar Cupos"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Inscritos:" label-for="input-4">
                <b-form-input id="input-4" v-model="categoria.inscritos" type="number" required placeholder="Ingresar Inscritos"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Duración:" label-for="input-5">
                <b-form-input id="input-5" v-model="categoria.duracion" type="text" required placeholder="Ingresar Duración"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Costo:" label-for="input-6">
                <b-form-input id="input-6" v-model="categoria.costo" type="number" required placeholder="Ingresar Costo"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-7" label="Código:" label-for="input-7">
                <b-form-input id="input-7" v-model="categoria.codigo" type="text" required placeholder="Ingresar Código"></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-8" label="Descripción:" label-for="input-8">
            <b-form-textarea id="input-8" v-model="categoria.descripcion" placeholder="Ingresar Descripción" itemref="" max-rows="6"></b-form-textarea>
            </b-form-group>

            <b-form-checkbox v-model="categoria.checked" name="check-button" switch>
      Terminado:<b>{{ categoria.checked }}</b>
    </b-form-checkbox>
<div class="text-center p-4">
<b-button type="submit" variant="success"  >Agregar</b-button>
<b-button type="reset" variant="danger" class="mx-3">Limpiar Formulario</b-button>
<b-button type="reset" variant="warning" class="mx-3">Limpiar Validación</b-button>
 </div>
       </b-form>
    </div>
</template>
<script>

export default {
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
        checked: false,                
      },
    };
  },
  methods: {
    agregar(){
            if (this.categoria.nombre && this.categoria.imagen && this.categoria.cupos >= 0 && this.categoria.inscritos > 0 && this.categoria.duracion && this.categoria.costo > 0  && this.categoria.codigo  && this.categoria.descripcion && this.categoria.checked) {
                this.$confirm('¿Quieres agregar un curso?', 'Informativo', {
                            confirmButtonText: 'Sí',
                            cancelButtonText: 'No',
                            type: 'info',
                            center: true
                            }).then(() => {
                            this.$message({
                                type: 'success',
                                message: '¡El curso se creó exitosamente!'
                            });
                            this.$store.dispatch('agregarCurso', this.categoria);
                            this.$router.push('/administracion');
                            }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: 'El curso no se pudo crear'
                            });          
                        });               
                } else {
                    console.log("No funciona");
                }
            }
        },
    
  }

  

  
</script>