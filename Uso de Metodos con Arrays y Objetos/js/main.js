//Creación datos tabla Radiología//
let radiologia = [{
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        run: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        run: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        run: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'Ana María Godoy',
        paciente: 'Manuel Godoy',
        run: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'Patricio Suazo',
        paciente: 'Ramón Ulloa',
        run: '14989389-K',
        prevision: 'FONASA'
    },
];

//Incorporación datos a tabla Radiología//
var contenidoRadiologia =
    "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>R.U.N</th><th>PREVISION</th></tr>";
for (var i = 0; i < radiologia.length; i++) {
    contenidoRadiologia += `<tr>
<td>${radiologia[i].hora}</td>
<td>${radiologia[i].especialista}</td>
<td>${radiologia[i].paciente}</td>
<td>${radiologia[i].run}</td>
<td>${radiologia[i].prevision}</td>
</tr>`;
}
document.getElementById("contenido-radiologia").innerHTML = contenidoRadiologia;

//Creación datos tabla Traumotología//
let traumatologia = [{
        hora: '8:00',
        especialista: 'María Paz Altuzarra',
        paciente: 'Paula Sanchez',
        run: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'Raúl Araya',
        paciente: 'Angélica Navas',
        run: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'María Arriagada',
        paciente: 'Ana Klapp',
        run: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        run: '1547423-6',
        prevision: 'FISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        run: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        run: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'Andrés Kanacri',
        paciente: 'Marcial Suazo',
        run: '11254785-5',
        prevision: 'ISAPRE'
    },
];
//Agregando nuevos datos a la tabla de Traumotología//
traumatologia.push({ hora: "09:00", especialista: "René Poblete", paciente: "Ana Gellona", run: "13123329-7", prevision: "ISAPRE" }, { hora: "09:30", especialista: "María Solar", paciente: "Ramiro Andrade", run: "12221451-K", prevision: "FONASA" }, { hora: "10:00", especialista: "Raúl Loyola", paciente: "Carmen Isla", run: "10112348-3", prevision: "ISAPRE" }, { hora: "10:30", especialista: "Antonio Larenas", paciente: "Pablo Loayza", run: "13453234-1", prevision: "ISAPRE" }, { hora: "12:00", especialista: "Matias Aravena", paciente: "Susana Poblete", run: "14345656-6", prevision: "FONASA" });
//Incorporación datos a tabla Traumotología//
var contenidoTraumatologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>R.U.N</th><th>PREVISION</th></tr>";
for (var i = 0; i < traumatologia.length; i++) {
    contenidoTraumatologia += `<tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].run}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`;
}
document.getElementById("contenido-traumatologia").innerHTML = contenidoTraumatologia;
//Obtener listado de pacientes con Previón FONASA//
let tusarioFonasa = traumatologia.filter(function(elemento) {
    return elemento.prevision === "FONASA";
});
var listaFonasa = "<p></p>";
tusarioFonasa.forEach(function(elemento) {
    listaFonasa += `<p>
    ${elemento.paciente} -
    ${elemento.prevision}
    </p>`;
});
document.getElementById("usuarios-fonasa").innerHTML = listaFonasa;

//Creación de datos tabla Dental//
let dental = [{
        hora: '8:30 ',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        run: '11234425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'María Pia Zañartu',
        paciente: 'Angel Muñoz',
        run: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        run: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        run: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sánchez',
        run: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepúlveda',
        run: '14441281-0',
        prevision: 'ISAPRE'
    },
];
//Obtener listado de pacientes con Previsión ISAPRE//
let dusarioIsapre = dental.filter(function(elemento) {
    return elemento.prevision === "ISAPRE";
});

var listaIsapre = "<p></p>";

dusarioIsapre.forEach(function(elemento) {
    listaIsapre += `<p>
    ${elemento.paciente} -
    ${elemento.prevision}
    </p>`;
});

document.getElementById("usuarios-isapre").innerHTML = listaIsapre;

//Incorporación de datos a tabla Dental//
/*var contenidoDental =
    "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>R.U.N</th><th>PREVISION</th></tr>";
for (var i = 0; i < dental.length; i++) {
    contenidoDental += `<tr>
<td>${dental[i].hora}</td>
<td>${dental[i].especialista}</td>
<td>${dental[i].paciente}</td>
<td>${dental[i].run}</td>
<td>${dental[i].prevision}</td>
</tr>`;
}
document.getElementById("contenido-dental").innerHTML = contenidoDental;*/

var contenidoDental =
    "<p></p>";
for (var i = 0; i < dental.length; i++) {
    contenidoDental += `<p>
${dental[i].hora} -
${dental[i].especialista} -
${dental[i].paciente} -
${dental[i].run} -
${dental[i].prevision}
</p>`;
}
document.getElementById("contenido-dental").innerHTML = contenidoDental;

//Obtener el listado total de pacientes atendidos en el Centro Médico Ñuñoa//
var listaTotal = "<p></p>";
let usuariosClinica = radiologia.concat(traumatologia, dental);
usuariosClinica.forEach(function(elemento) {
    listaTotal += `<p>
    ${elemento.paciente} 
    </p>`;
});
document.getElementById("usuarios-totales").innerHTML = listaTotal;

//Eliminar el primer y último paciente de la Tabla Radiología, resultado por Consola//
radiologia.shift();
radiologia.pop();
console.log(radiologia);