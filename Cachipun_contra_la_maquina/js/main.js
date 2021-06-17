var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {

} else {
    alert("¡¡sniff (╥﹏╥) sniff!!");
}


var numero = prompt("cuántas veces quieres jugar");
var numero = parseInt(numero);
document.write("<br> <h1>Jugaras</h1>" + numero + "veces");
for (var i = 0; i < numero; i++) {
    function jugar(usuario) {
        var maquina = maquina;
        var opcion = ["piedra", "papel", "tijera"];

        maquina = Math.floor(Math.random() * 3);
        opcionUsuario = opcion[usuario];
        opcionMaquina = opcion[maquina]
        document.write("<h3>Elegiste</h3>" + opcion[usuario]);
        document.write("<br> <h3>La máquina eligió</h3>" + opcion[maquina]);

        if (opcionUsuario === opcionMaquina) {
            document.write("<br> <h1>(ɔ◔‿◔)ɔ ♥EMPATARON♥(^◡^ )</h1>");
        }
        if (opcionUsuario === "piedra" && opcionMaquina === "papel") {
            document.write("<br> <h1>¡PERDISTE! ☜(ˆ▽ˆ)</h1>");
        }
        if (opcionUsuario === "piedra" && opcionMaquina === "tijera") {
            document.write("<br> <h1>¡GANASTE! (>‿◠)✌</h1>");
        }
        if (opcionUsuario === "papel" && opcionMaquina === "tijera") {
            document.write("<br> <h1>¡PERDISTE! ☜(ˆ▽ˆ)</h1>");
        }
        if (opcionUsuario === "papel" && opcionMaquina === "piedra") {
            document.write("<br> <h1>¡GANASTE! (>‿◠)✌</h1>");
        }
        if (opcionUsuario === "tijera" && opcionMaquina === "piedra") {
            document.write("<br> <h1>¡PERDISTE! ☜(ˆ▽ˆ)</h1>");
        }
        if (opcionUsuario === "tijera" && opcionMaquina === "papel") {
            document.write("<br> <h1>¡GANASTE! (>‿◠)✌</h1>");
        }

    }
}