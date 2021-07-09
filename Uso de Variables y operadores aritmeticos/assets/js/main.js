//solicitud al usuario de dos número entero mayor a 0//
var numero1 = prompt("ingresa primer numero entero mayor a 0", "");
var numero2 = prompt("Ingresa segundo numero entero mayor a 0 distinto al anterior", "");
//Función para convertir texto a número//
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
//Operación suma de los números ingresados por el usuario//
var suma = numero1 + numero2;
//Se manda mensaje alerta con el resutado de los números ingresados por el usuario//
alert('la suma de los dos números ingresados es: ' + suma);
//Operación resta de los números ingresados por el usuario//
var resta = numero1 - numero2;
//Se manda mensaje aleta con el resutado de los números ingresados por el usuario//
alert('la resta de los números ingresados es: ' + resta);
//Operación multiplicación de los números ingresados por el usuario//
var multiplicacion = numero1 * numero2;
//Se manda mensaje alerta con el resutado de los números ingresados por el usuario//
alert('la multiplicación de los números ingresados es: ' + multiplicacion);
//Operación división de los números ingresados por el usuario//
var division = numero1 / numero2;
//Se manda mensaje alerta con el resutado de los números ingresados por el usuario//
alert('la división de los numeros ingresados es: ' + division);
//Operación modulo de los números ingresados por el usuario//
var modulo = numero1 % numero2;
//Se manda mensaje alerta con el resutado de los números ingresados por el usuario//
alert('el modulo de los numeros ingresados es: ' + modulo);
//solicitud al usuario de la temperatura en grodo Celcius//
var Celcius = prompt("ingresa la temperatura en grados celcius ejemplo 25°", "");
//Función para convertir texto a número//
Celcius = parseInt(Celcius);
//Operación conversión de temperatura grados celcius a grados Kelvin//
var kelvin = Celcius + 273.15;
//Se escribe el resultado en HTML//
document.write("La temperatura en grados Kelvin es: " + kelvin + "K");
//Operación conversión de temperatura grados celcius a grados Fahrenheit//
var fraccion = 9 / 5;
var Fahrenheit = (Celcius * fraccion) + 32;
//Se escribe el resultado en HTML//
document.write("<br> La temperatura en grados Fahrenheit es: " + Fahrenheit + "F");
//Se solicita al usuario ingresar una cantidad de días//
var dias = prompt("Ingresa una cantidad de días", "");
//Función para convertir de texto a número//
dias = parseInt(dias);
//Operación para saber el equivalente en años, semanas y días//
var año = 365;
var semanas = 7;
var años = dias / año;
var semana = años % 52;
var dia = años % 24;

document.write("<br> Los años son: " + Math.floor(años) + "&nbsp con: " + Math.floor(semana) + "&nbsp semanas  y &nbsp" + Math.floor(dia) + "&nbsp dia");
//Solicitud al usuario de 5 números//
var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
var num3 = prompt("Ingrese el tercer número");
var num4 = prompt("Ingrese el cuarto número");
var num5 = prompt("Ingrese el quinto número");
//Operación de sumar los 5 números ingresados por el usuario!//
var suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
//Operación obterner el promedio de los 5 números ingresados por el usuario//
var promedio = suma / 5;
//Se escribre el resultado en HTML//
document.write("<br> La suma de todos los números es: " + suma + "&nbsp El promedio de los números es: " + promedio);