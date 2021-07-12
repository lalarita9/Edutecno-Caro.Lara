class Dueño {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    generarDatos() {
        return `El dueño es ${this.nombre}, se encuentra domiciliado en ${this.direccion}, su número de teléfono es ${this.telefono}`
    }
}
class Mascota extends Dueño {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
    mostrarTipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }

}

class Especie extends Mascota {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nueva_enfermedad) {
        this._enfermedad = nueva_enfermedad;
    }
};
let ingresoDatos = document.querySelector('form');
let relleno = (event) => {
    event.preventDefault();
    let nombreDueño = document.getElementById('propietario').value;
    let movil = document.getElementById('telefono').value;
    let domicilio = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');
    if (tipo == 'perro') {
        let perro = new Especie(nombreDueño, domicilio, movil, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${perro.generarDatos()}.</li>
    <li>${perro.mostrarTipo()}, mienstras que su nombre es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}.</li>`;

    } else if (tipo == 'gato') {
        let gato = new Especie(nombreDueño, domicilio, movil, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${gato.generarDatos()}.</li>
<li>${gato.mostrarTipo()}, mienstras que su nombre es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}.</li>`;
    } else if (tipo == 'conejo') {
        let conejo = new Especie(nombreDueño, domicilio, movil, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `<li>${conejo.generarDatos()}.</li>
    <li>${conejo.mostrarTipo()}, mienstras que su nombre es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}.</li>`;
    }

}


ingresoDatos.addEventListener('submit', relleno);