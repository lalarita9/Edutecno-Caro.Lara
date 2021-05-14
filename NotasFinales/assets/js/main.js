//Ingreso de Antecedentes en formulario.
var nombre = prompt("Nombre, ingresa tu nombre y apellido")
document.write("<form>")
document.write("<div class='form-group row'>")
document.write("<label class='col-sm-2 col-form-label'><h4>Nombre:</h4></label>")
document.write("<div class='col-sm-10'>")
document.write("<label>" + nombre + "</label>")
document.write("</div>")
document.write("</div>")
document.write("</form>")
var carrera = prompt("Carrera, ingresa la carrera Desarrollo Web")
document.write("<form>")
document.write("<div class='form-group row'>")
document.write("<label class='col-sm-2 col-form-label'><h4>Carrera:</h4></label>")
document.write("<div class='col-sm-10'>")
document.write("<label>" + carrera + "</label>")
document.write("</div>")
document.write("</div>")
document.write("</form>")
    //Ingreso de datos HTML
var HTML = prompt("Ingresa curso HTML:")
var html_1 = prompt("Ingresa tu nota 1 HTML como primer sumando", "");
var html_2 = prompt("Ingresa tu nota 2 HTML como segundo sumando", "");
var html_3 = prompt("Ingresa tu nota 3 HTML como tercer sumando", "");
//formula para obtener suma de notas y promedio final
html_1 = parseInt(html_1),
    html_2 = parseInt(html_2);
html_3 = parseInt(html_3);
var promedio_html = html_1 + html_2 + html_3;
var divisor = prompt("Ingresa numero de notas totales", "");
dividendo = parseInt(promedio_html);
divisor = parseInt(divisor);
total_html = dividendo / divisor;
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>" + HTML + "</th>");
document.write("<td>" + html_1 + "</td>");
document.write("<td>" + html_2 + "</td>");
document.write("<td>" + html_3 + "</td>");
document.write("<td>" + total_html + "</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");
//CSS
var CSS = prompt("Ingresa curso CSS:")
var css_1 = prompt("Ingresa tu nota 1 CSS como primer sumando", "");
var css_2 = prompt("Ingresa tu nota 2 CSS como segundo sumando", "");
var css_3 = prompt("Ingresa tu nota 3 CSS como tercer sumando", "");
css_1 = parseInt(css_1),
    css_2 = parseInt(css_2);
css_3 = parseInt(css_3);
var promedio_css = css_1 + css_2 + css_3;
var divisor = prompt("Ingresa numero de notas totales", "");
dividendo = parseInt(promedio_css);
divisor = parseInt(divisor);
total_css = dividendo / divisor;
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>" + CSS + "</th>");
document.write("<td>" + css_1 + "</td>");
document.write("<td>" + css_2 + "</td>");
document.write("<td>" + css_3 + "</td>");
document.write("<td>" + total_css + "</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");
//JavaScript
var JSS = prompt("Ingresa curso JavaScript:")
var js_1 = prompt("Ingresa tu nota 1 JavaScript como primer sumando", "");
var js_2 = prompt("Ingresa tu nota 2 JavaScript como segundo sumando", "");
js_1 = parseInt(js_1);
js_2 = parseInt(js_2);
var promedio_js = js_1 + js_2;
dividendo = parseInt(promedio_js);
total_js = dividendo / 3;

document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>" + JSS + "</th>");
document.write("<td>" + js_1 + "</td>");
document.write("<td>" + js_2 + "</td>");
document.write("<td></td>");
document.write("<td>" + total_js + "</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");

//formula mensaje final
let result = total_js <= 4.00;
if (result === true) {
    document.write("<h5>Para aprobar el ramo JavaScrip con nota 4, necesitas obtener un 4.00 en la nota 3.<h5>");
}