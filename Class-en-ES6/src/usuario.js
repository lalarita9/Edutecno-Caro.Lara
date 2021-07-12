export default class Usuario {
    constructor(nombre, iva) {
        this._nombre = nombre;
        this._iva = iva;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    calculoIva(monto_bruto_anual, deducciones) {
        return (monto_bruto_anual - deducciones) * 0.21;
    }
}