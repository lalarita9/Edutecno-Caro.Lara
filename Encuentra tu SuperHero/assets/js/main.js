window.onload = function() {

    $(document).ready(function() {
        $('button').on('click', function(evento) {
            evento.preventDefault();
            let heroBuscar = /^[0-9-\s]+$/i;
            let numHero = $('#heroNum').val().trim();
            //El usuario debe ingreser un número del 1 al 731, se realiza condicionales para que se cumpla//
            if (heroBuscar.test(numHero) == true) {
                if (numHero > 0 && numHero <= 731) {

                } else {
                    alert("Debes ingresar un número entero del 1 al 731");
                }

            } else {
                alert("Por favor ingresa un valor numérico");
            }
            //Solicitud de datos a la Appi a través de Get//
            $.ajax({
                type: "GET",
                url: `https://www.superheroapi.com/api/10159354226215944/${numHero}`,
                dataType: "json",
                success: function(data) {
                    console.log(data);

                    //Resultado se muestra en formato Card de Boostrap en HTML//
                    $('.resultado').append(`<div class="card" style="width: 30rem;">
                            <img src="${data.image.url}" class="card-img-top" style="height:250px;" alt="imagen hero">
                            <div class="card-body"><h5 class="card-title"><b>NOMBRE:</b> ${data.name}</h5>
                            <hr color="#b2b2a2"></hr>
                            <p class="card-text"><b>CONEXIONES:</b> ${data.connections['group-affiliation']}</p>
                            <hr color="#b2b2a2"></hr>
                            <p class="card-text"><b>PRIMERA APARICIÓN:</b> ${data.biography['first-appearance']}</p>
                            <hr color="#b2b2a2"></hr>
                            <p class="card-text"><b>ALTURA:</b> ${data.appearance.height}</p>
                            <hr color="#b2b2a2"></hr>
                            <p class="card-text"><b>PESO:</b> ${data.appearance.weight}</p>
                            <hr color="#b2b2a2"></hr>
                            <p class="card-text"><b>ALIANZAS:</b> ${data.biography.aliases}</p>
                            </div>`);
                    //Llamado de gráfico torta con las estadísticas de poder del SuperHero buscado, resultado se muestra en HTML//
                    var chart = new CanvasJS.Chart("chartContainer", {
                        animationEnabled: true,
                        title: {
                            text: `Estadísticas de Poder para ${data.name}`,
                            horizontalAlign: "center",
                            fontFamily: "Century Ghotic",
                            fontSize: "30",
                            fontWeight: "bold"

                        },
                        data: [{
                            type: "doughnut",
                            startAngle: 40,
                            showInLegend: "true",
                            legendText: "{name} - {y}",
                            indexLabelFontSize: 15,
                            indexLabelFontFamily: 'Nanum Gothic',
                            indexLabelColor: '#32485c',
                            indexLabel: "{name} - {y}",
                            toolTipContent: "{name}: <b>{y}%</b>",
                            dataPoints: [
                                { y: data.powerstats.intelligence, name: "Intelligence" },
                                { y: data.powerstats.strength, name: "Strength" },
                                { y: data.powerstats.speed, name: "Speed" },
                                { y: data.powerstats.durability, name: "Durability" },
                                { y: data.powerstats.power, name: "Power" },
                                { y: data.powerstats.combat, name: "Combat" }
                            ]
                        }]
                    });
                    chart.render();


                },

                //Función error en caso que haya un mal funcionamiento//
                error: function(error) {
                    alert("La petición no se ha podido completar");
                },
            });


        });

    });



}