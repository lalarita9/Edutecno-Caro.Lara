/* Consulta a usuario sí quiere jugar*/
var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {

} else {
    alert("¡¡sniff (╥﹏╥) sniff!!");
}

/*Consulta al usuario cuántas veces va a jugar*/
var numero = prompt("cuántas veces quieres jugar");
var numero = parseInt(numero);
document.querySelector('#jugadas').innerHTML = numero;
/*Repetición de jugadas según lo señala el usuario*/
for (i = 0; i <= numero; i++) {
    function jugar(usuario) {
        var maquina = maquina;
        var opcion = ["piedra", "papel", "tijera"];

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

    }
}