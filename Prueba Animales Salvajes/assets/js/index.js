//Desde tipodeanimal.js se importa clases//
import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/tipodeanimal.js';


let animales = [];

let btnAgregar = document.getElementById('btnRegistrar');

btnAgregar.addEventListener('click', (event) => {
    event.preventDefault();

    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let img = document.getElementById('preview').innerHTML;
    let comentarios = document.getElementById('comentarios').value;

    //Validación de datos obligatorios requeridos//
    if (nombre == "" || edad == "" || comentarios == '') {
        alert('Por favor ingrese todos los datos requeridos');

    } else {
        let newAnimal;
        //Acción para crear instancias según el tipo de animal//
        if (nombre == 'Leon') {
            newAnimal = new Leon(nombre, edad, img, comentarios, "rugir");
        } else if (nombre == 'Lobo') {
            newAnimal = new Lobo(nombre, edad, img, comentarios, "aullar");
        } else if (nombre == 'Oso') {
            newAnimal = new Oso(nombre, edad, img, comentarios, "gruñir");
        } else if (nombre == 'Serpiente') {
            newAnimal = new Serpiente(nombre, edad, img, comentarios, "sisear");
        } else if (nombre == 'Aguila') {
            newAnimal = new Aguila(nombre, edad, img, comentarios, "chillar");
        }
        //Push para agregar animales//
        animales.push(newAnimal);

        actualizarPagina();
        //Limpieza de Página//
        document.getElementById('animal').value = 'inicial';
        document.getElementById('edad').value = 'inicial';
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }
});
//Función para agregar animales//
const actualizarPagina = () => {
    const listadoDeAnimales = document.getElementById('Animales');

    let audio;
    listadoDeAnimales.innerHTML = "";
    //Método para seleccionar el audio según corresponda//
    animales.forEach((elemento, i) => {

        if (elemento.getSonido() == "rugir") {
            audio = elemento.Rugir();

        }
        if (elemento.getSonido() == "aullar") {
            audio = elemento.Aullar();
        }
        if (elemento.getSonido() == "gruñir") {
            audio = elemento.Gruñir();
        }
        if (elemento.getSonido() == "sisear") {
            audio = elemento.Sisear();
        }
        if (elemento.getSonido() == "chillar") {
            audio = elemento.Chillar();

        }
        //Manipulación del DOM//
        listadoDeAnimales.innerHTML +=
            (`
            <div class="card md-2 mx-2" >
            <img id="imagen" class="rounded" onclick="activarModal(${i})" style= "width: 170px; height:170px; src=${elemento.getImg()}
            <div class="card-footer bg-secondary">
            <button type="button" class="btn btn-outline-light text-dark">${audio}</button> 
            </div>
        </div>
    `);

    })
};
//Función para obtener ficha de cada animal//
window.activarModal = (i) => {
    const especies = animales[i];
    const contenidoModal = document.querySelector('.modal-body');
    $('#exampleModal').modal('show')
    contenidoModal.innerHTML = '';
    contenidoModal.innerHTML = `<div class="text-white text-center">
    <img class="mb-3 id="imagen" style= "width: 200px; height:300px; src=${especies.Img}
    <hr style= "background-color: gray">
    <h4>${especies.Edad}</h4>
    <hr style= "background-color: gray">
    <h4>Comentarios:</h4>
    <p>${especies.Comentarios}</p>
</div>`;


}