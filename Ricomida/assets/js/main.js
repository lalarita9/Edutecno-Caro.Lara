//Alerta cuando el usuario hace un click en enviar por correo.

$('#enviar').click(function() {
    alert("El correo fue enviado correctamente");
});
//cambio texto título color rojo doble click
$('#on').dbclick(function() {

    $('#contenido').css('color', '#ff0b0b');

    console.log("He cambiado");

});