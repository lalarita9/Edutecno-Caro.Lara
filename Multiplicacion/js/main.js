var num = parseInt(prompt("Ingrese un numero entre el 1 y el 20"));


if (num == 1 || num <= 20) {
    console.log("número dentro del rango");
    for (let i = 1; i <= num; i++) {

        document.querySelector('#multiplicacion').innerHTML = (num + "x" + i + "=" + num * i);
        console.log(num + "x" + i + "=" + num * i);
    }

    for (let i = 1; i <= num; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {
            res = res * j;
        }
        document.querySelector('#factorial').innerHTML = ("Factorial de " + i + " es: " + res);
        console.log("Factorial de " + i + " es: " + res);
    }

}
if (num == 0 || num >= 21) {
    document.querySelector('#error').innerHTML = "Error";
    document.querySelector('#rango').innerHTML = "número fuera del rango";

}