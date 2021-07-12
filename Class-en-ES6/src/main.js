import Usuario from './usuario.js';
import Iva from './iva.js';

let nombreUsuario = new Usuario('Ian Durrant');
let nombreUsuario1 = new Usuario('Vladimir Vega');
let valorIva = new Iva(150000, 50000);
let valorIva1 = new Iva(780000, 500000);
console.log(`Nombre: ${nombreUsuario.nombre} - Monto Bruto anual: ${valorIva.monto_bruto_anual} - Deducciones: ${valorIva.deducciones}`);
console.log(`Impuesto: ${usuario.calculoIva(valorIva.monto_bruto_anual,valorIva.deducciones)}`);
console.log(`Nombre: ${nombreUsuario1.nombre} - Monto Bruto anual: ${valorIva1.monto_bruto_anual} - Deducciones: ${valorIva1.deducciones}`);
console.log(`Impuesto: ${usuario.calculoIva(valorIva1.monto_bruto_anual,valorIva1.deducciones)}`);
cliente1.innerHTML = (`Nombre: ${nombreUsuario.nombre} - Monto Bruto anual: ${valorIva.monto_bruto_anual} - Deducciones: ${valorIva.deducciones}`);
valor1.innerHTML = (`Impuesto: ${nombreUsuario.calculoIva(valorIva.monto_bruto_anual,valorIva.deducciones)}`);
cliente2.innerHTML = (`Nombre: ${nombreUsuario1.nombre} - Monto Bruto anual: ${valorIva1.monto_bruto_anual} - Deducciones: ${valorIva1.deducciones}`);
valor2.innerHTML = (`Impuesto: ${nombreUsuario.calculoIva(valorIva1.monto_bruto_anual,valorIva1.deducciones)}`);