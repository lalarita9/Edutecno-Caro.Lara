"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, iva) {
    _classCallCheck(this, Usuario);

    this._nombre = nombre;
    this._iva = iva;
  }

  _createClass(Usuario, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this.nombre = nuevo_nombre;
    }
  }, {
    key: "calculoIva",
    value: function calculoIva(monto_bruto_anual, deducciones) {
      return (monto_bruto_anual - deducciones) * 0.21;
    }
  }]);

  return Usuario;
}();

exports["default"] = Usuario;