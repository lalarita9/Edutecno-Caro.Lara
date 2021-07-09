/* Consulta a usuario sí quiere jugar*/
var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {
    /*Consulta al usuario cuántas veces va a jugar*/
    var numero = parseInt(prompt("Cuántas veces quieres jugar"));
} else {
    alert("¡¡sniff (╥﹏╥) sniff!!");

}
document.querySelector('#jugadas').innerHTML = numero;
var contador = 0;

/*Repetición de jugadas según lo señala el usuario*/
function jugar(usuario) {

    var opcion = ["piedra", "papel", "tijera"];
    var maquina = maquina;

    maquina = Math.floor(Math.random() * 3);

    opcionUsuario = opcion[usuario];
    opcionMaquina = opcion[maquina];
    document.querySelector('#opcion-u').innerHTML = opcion[usuario];
    document.querySelector('#opcion-m').innerHTML = opcion[maquina];
    /*Resultados, según las opciones de los jugadores*/

    if (opcionUsuario === opcionMaquina) {
        document.querySelector('#resultado').innerHTML = "(ɔ◔‿◔)ɔ ♥EMPATARON♥(^◡^ )";
    }
    if (opcionUsuario === "piedra" && opcionMaquina === "papel") {
        document.querySelector('#resultado').innerHTML = "¡PERDISTE! ☜(ˆ▽ˆ)";
    }
    if (opcionUsuario === "piedra" && opcionMaquina === "tijera") {
        document.querySelector('#resultado').innerHTML = "¡GANASTE! (>‿◠)✌";
    }
    if (opcionUsuario === "papel" && opcionMaquina === "tijera") {
        document.querySelector('#resultado').innerHTML = "¡PERDISTE! ☜(ˆ▽ˆ)";
    }
    if (opcionUsuario === "papel" && opcionMaquina === "piedra") {
        document.querySelector('#resultado').innerHTML = "¡GANASTE! (>‿◠)✌";
    }
    if (opcionUsuario === "tijera" && opcionMaquina === "piedra") {
        document.querySelector('#resultado').innerHTML = "¡PERDISTE! ☜(ˆ▽ˆ)";
    }
    if (opcionUsuario === "tijera" && opcionMaquina === "papel") {
        document.querySelector('#resultado').innerHTML = "¡GANASTE! (>‿◠)✌";
    }
    document.getElementById("jugadas").innerHTML = ++contador;

    if (contador >= numero) {
        document.querySelector('#fin').innerHTML = "(ﾟ∀ﾟ)☞ ¡fin de tus jugadas!";
        document.getElementById('boton').disabled = true;
        document.getElementById('boton1').disabled = true;
        document.getElementById('boton2').disabled = true;
    }
}