//Clase padre//

class Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
            let Nombre = nombre;
            let Edad = edad;
            let Img = img;
            let Comentarios = comentarios;
            let Sonidos = sonidos

            this.getNombre = () => Nombre;
            this.getEdad = () => Edad;
            this.getImg = () => Img;
            this.getComentarios = () => Comentarios;
            this.getSonidos = () => Sonidos;

            this.setComentarios = (comentarios) => Comentarios = comentarios;
        }
        //Método Get//
    get Nombre() { return this.getNombre() };
    get Edad() { return this.getEdad() };
    get Img() { return this.getImg() };
    get Sonidos() { return this.getSonidos() };
    get Comentarios() { return this.getComentarios() };

    //Método Set//
    set Comentarios(nuevo_comentario) { this.setComentarios(nuevo_comentario) };
}
export default Animal;