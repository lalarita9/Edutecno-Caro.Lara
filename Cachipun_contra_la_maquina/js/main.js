var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {

} else {
    alert("¡¡sniff sniff!!");
}


var numero = prompt("cuántas veces quieres jugar");


function jugar(usuario) {
    var maquina = maquina;
    var opcion = ["piedra", "papel", "tijera"];
    maquina = Math.floor(Math.random() * 3);
    opcionUsuario = opcion[usuario];
    opcionMaquina = opcion[maquina]
    document.write(opcion[usuario]);
    document.write(opcion[maquina]);

    if (opcionUsuario === opcionMaquina) {
        document.write("empate");
    } else if (opcionUsuario === 0) {
        if (opcionMaquina === 2);
        document.write("ganador");
    } else if (opcionUsuario === 1) {
        if (opcionMaquina === 2);
        document.write("perdedor");
        if (opcionMaquina === 0)
            document.write("ganador");
    } else if (opcionUsuario === 2) {
        if (opcionMaquina === 0);
        document.write("perdedor");
    }
    if (opcionMaquina === 1);
    document.write("ganador");
}





/*switch (resultado) {
    case "empate":
        document.write("empate");
        break
    case "ganador":
        document.write("ganaste");
        breack
    case "perdedor":
        document.write("perdiste");
        breack
}*/