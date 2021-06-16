var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {

} else {
    alert("¡¡sniff sniff!!");
}


var numero = prompt("cuántas veces quieres jugar");
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var empate = "0"
var ganador = "1"
var perdedor = "2"
const b_piedra = document.getElementById("piedra");
const b_papel = document.getElementById("papel");
const b_tijera = document.getElementById("tijera");
b_piedra.addEventListener('click', () => {
    juega("piedra");
})
b_papel.addEventListener('click', () => {
    juega("papel");
})
b_tijera.addEventListener('click', () => {
    juega("tijera");
})

function juega(usuario) {
    if (jugando) return;
    jugando = true;

    for (let numero = 0; numero <= numero; numero++) {
        document.write(numero);
    }
}

function juega(usuario) {

    var maquina = Math.floor(Math.random() * 3);
    let resultado = juego(maquina, usuario);
    if (usuario === maquina) {
        return empate;
    } else if (usuario === piedra) {
        if (maquina === tijera) return ganador;
    } else if (usuario === papel) {
        if (maquina === tijera) return perdedor;
        if (maquina === piedra) return ganador;
    } else if (usuario === tijera) {
        if (maquina === piedra) return perdedor;
        if (maquina === papel) return ganador;
    }
    if (resultado === empate) {
        document.write("es un empate");
    }
    if (resultado === ganador) {
        document.write("ganaste");
    }
    if (resultado === perdedor) {
        document.write("perdiste");
    }



}