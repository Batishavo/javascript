//obtener el valor del atributo
var valor=$("a").attr("href");
console.log("valor inicial es "+valor);
setTimeout(function(){
    console.log("Despues de 2 segundos cambiamos el href del elnalse");
    //asignar el valor
    $("a").attr("href","http://www.google.com" );
    var valor=$("a").attr("href");
    console.log("valor actual es "+valor);
},2000);
//eliminar atributo el
$("a").removeAttr("href");
console.log("atributo eliminado");
var valor=$("a").attr("href");
console.log("valor actual es "+valor);
//obtener contenido con html 
var contenido=$("p").html();
console.log("contenido");
//obtener texto 
var solotexto=$("p").text();
console.log(solotexto);
alert(solotexto);
//cambiamos el texto desde codigo 
$("p").text("texto cambiado desde codigo"); 
//append prepend after before
//insertar
$("#contenido").append("Hola");
//añadir
$("#parrafo2").before("<h1>Titulo desde script</h1>");
$("#parrafo2").after("<strong>otro texto desde script</strong><br/>");
//nuevo elemnto
var texto=$("<p></p>").text("Nuevo parrafo desde script");
$("#parrafo2").after(texto);