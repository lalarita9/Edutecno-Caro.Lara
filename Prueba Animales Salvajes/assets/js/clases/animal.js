//Clase padre//

class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
            let Nombre = nombre;
            let Edad = edad;
            let Img = img;
            let Comentarios = comentarios;
            let Sonido = sonido;

            this.getNombre = () => Nombre;
            this.getEdad = () => Edad;
            this.getImg = () => Img;
            this.getComentarios = () => Comentarios;
            this.getSonido = () => Sonido;

            this.setComentarios = (comentarios) => Comentarios = comentarios;
        }
        //Método Get//
    get Nombre() { return this.getNombre() };
    get Edad() { return this.getEdad() };
    get Img() { return this.getImg() };
    get Sonido() { return this.getSonido() };
    get Comentarios() { return this.getComentarios() };

    //Método Set//
    set Comentarios(nuevo_comentario) { this.setComentarios(nuevo_comentario) };
}
export default Animal;