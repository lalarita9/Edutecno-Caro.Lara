//Alerta cuando el usuario hace un click en enviar por correo.
const $enviar = document.getElementById("enviar");
$enviar.addEventListener('click', () => {
        alert("El correo fue enviado correctamente");
    })
    //cambio texto título color rojo doble click
let on = document.querySelector('#on');
let on1 = document.querySelector('#on1');
on.addEventListener('dblclick', () => on.style.color = '#ff0b0b')
on1.addEventListener('dblclick', () => on1.style.color = '#ff0b0b')