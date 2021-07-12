"use strict";

var _usuario = _interopRequireDefault(require("./usuario.js"));

var _iva = _interopRequireDefault(require("./iva.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nombreUsuario = new _usuario["default"]('Ian Durrant');
var nombreUsuario1 = new _usuario["default"]('Vladimir Vega');
var valorIva = new _iva["default"](150000, 50000);
var valorIva1 = new _iva["default"](780000, 500000);
console.log("Nombre: ".concat(nombreUsuario.nombre, " - Monto Bruto anual: ").concat(valorIva.monto_bruto_anual, " - Deducciones: ").concat(valorIva.deducciones));
console.log("Impuesto: ".concat(usuario.calculoIva(valorIva.monto_bruto_anual, valorIva.deducciones)));
console.log("Nombre: ".concat(nombreUsuario1.nombre, " - Monto Bruto anual: ").concat(valorIva1.monto_bruto_anual, " - Deducciones: ").concat(valorIva1.deducciones));
console.log("Impuesto: ".concat(usuario.calculoIva(valorIva1.monto_bruto_anual, valorIva1.deducciones)));
cliente1.innerHTML = "Nombre: ".concat(nombreUsuario.nombre, " - Monto Bruto anual: ").concat(valorIva.monto_bruto_anual, " - Deducciones: ").concat(valorIva.deducciones);
valor1.innerHTML = "Impuesto: ".concat(nombreUsuario.calculoIva(valorIva.monto_bruto_anual, valorIva.deducciones));
cliente2.innerHTML = "Nombre: ".concat(nombreUsuario1.nombre, " - Monto Bruto anual: ").concat(valorIva1.monto_bruto_anual, " - Deducciones: ").concat(valorIva1.deducciones);
valor2.innerHTML = "Impuesto: ".concat(nombreUsuario.calculoIva(valorIva1.monto_bruto_anual, valorIva1.deducciones));