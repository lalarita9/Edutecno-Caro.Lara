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

let traumotologia = [{
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
var contenidoTraumotologia = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>R.U.N</th><th>PREVISION</th></tr>";

for (var i = 0; i < traumotologia.length; i++) {
    contenidoTraumotologia += `<tr>
<td>${traumotologia[i].hora}</td>
<td>${traumotologia[i].especialista}</td>
<td>${traumotologia[i].paciente}</td>
<td>${traumotologia[i].run}</td>
<td>${traumotologia[i].prevision}</td>
</tr>`;
}
document.getElementById("contenido-traumotologia").innerHTML = contenidoTraumotologia;
let dental = [{
        hora: '8:30',
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
var contenidoDental =
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
document.getElementById("contenido-dental").innerHTML = contenidoDental;