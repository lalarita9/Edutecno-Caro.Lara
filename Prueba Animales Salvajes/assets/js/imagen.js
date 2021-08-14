//Obtección de datos imagenes desde json//
import Animales from './consulta.js';

const opcionAnimal = document.getElementById('animal');
opcionAnimal.addEventListener('change', async() => {
    const { animales } = await Animales.getData();
    const especies = document.getElementById('animal').value;
    const tipodeArchivo = document.getElementById('preview');
    animales.forEach((elemento) => {
        if (elemento.name == especies) {
            tipodeArchivo.innerHTML = `<input id='sonido' type='hidden' value='./assets/sounds/${elemento.sonido}'>`;
            tipodeArchivo.innerHTML = `<img style="max-width:100%; height:150px; display: block;margin-left:auto; margin-right: auto;" src='assets/imgs/${elemento.imagen}'>`;
        };
    })
});