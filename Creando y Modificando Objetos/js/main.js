//Llamando función Construtora para el Consultorio Médico Frutillar//
function Consulta(nombre, usuarios) {
    this.nombre = nombre;
    this.usuarios = usuarios || [];
}
//Llamando función Constructora para los pacientes//
function Paciente(nombre, edad, run, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _run = run;
    var _diagnostico = diagnostico;
    //Método//
    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre;
        }
    });
    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad
        }
    });
    Object.defineProperty(this, "_setEdad", {
        set: function(edad) {
            _edad = edad
        }
    });
    Object.defineProperty(this, "_getRun", {
        get: function() {
            return _run
        }
    });
    Object.defineProperty(this, "_setRun", {
        set: function(run) {
            _run = run
        }
    });
    Object.defineProperty(this, "_getDiagnostico", {
        get: function() {
            return _diagnostico
        }
    });
    Object.defineProperty(this, "_setDiagnostico", {
        set: function(diagnostico) {
            _diagnostico = diagnostico
        }
    });
}
//Implementacion métodos Getters y Setters//
Paciente.prototype.getNombre = function() {
    return this._getNombre;
};
Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
};
Paciente.prototype.getEdad = function() {
    return this._getEdad;
};
Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
};
Paciente.prototype.getRun = function() {
    return this._getRun;
};
Paciente.prototype.setRun = function(run) {
    this._setRun = run;
};
Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
};

Consulta.prototype.mostrarusuarios = function() {

        for (var i = 0; i < this.usuarios.length; i++) {

            contenido.innerHTML += 'Nombre: ' + this.usuarios[i].getNombre() + ' - ' + 'Edad: ' + this.usuarios[i].getEdad() + ' - ' + 'RUN: ' + this.usuarios[i].getRun() + ' - ' + 'Diagnóstico: ' + this.usuarios[i].getDiagnostico() + "<br>"


        }
    }
    //Función para mostrar paciente buscado por nombre//
Consulta.prototype.buscarusuariospornombre = function() {
    var button = document.getElementById('search-btn');
    button.onclick = function() {

        var nomPaciente = document.getElementById('paciente').value;

        if (nomPaciente == paciente1.getNombre()) {
            nombre.innerHTML = "Nombre: &nbsp" + paciente1.getNombre() + "&nbsp - &nbsp" + "Edad: &nbsp" + paciente1.getEdad() + "&nbsp - &nbsp" + "RUN: &nbsp" + paciente1.getRun() + "&nbsp - &nbsp" + "Diagnóstico: &nbsp" + paciente1.getDiagnostico();
        }
        if (nomPaciente == paciente2.getNombre()) {
            nombre.innerHTML = "Nombre: &nbsp" + paciente2.getNombre() + "&nbsp - &nbsp" + "Edad: &nbsp" + paciente2.getEdad() + "&nbsp - &nbsp" + "RUN: &nbsp" + paciente2.getRun() + "&nbsp - &nbsp" + "Diagnóstico: &nbsp" + paciente2.getDiagnostico();
        }
        if (nomPaciente == paciente3.getNombre()) {
            nombre.innerHTML = "Nombre: &nbsp" + paciente3.getNombre() + "&nbsp - &nbsp" + "Edad: &nbsp" + paciente3.getEdad() + "&nbsp - &nbsp" + "RUN: &nbsp" + paciente3.getRun() + "&nbsp - &nbsp" + "Diagnóstico: &nbsp" + paciente3.getDiagnostico();
        }

    }
}


//Instanciar los objetos con la instrucción new//
var paciente1 = new Paciente('Ian', 21, '19.768.991-7', 'Asma');
var paciente2 = new Paciente('Andrea', 57, '7.545.322-0', 'Anemia Perniciosa');
var paciente3 = new Paciente('Vladimir', 70, '4.999.101-5', 'Prostatitis');
var consultorio = new Consulta('Consultorio', [paciente1, paciente2, paciente3]);
//Ejecución de las funciones mostrar lista de pacientes y buscar por nombre//
consultorio.mostrarusuarios()
consultorio.buscarusuariospornombre()