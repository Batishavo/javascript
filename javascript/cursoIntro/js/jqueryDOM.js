//añadir una clase
var elemnto =$('p').parent();
console.log(elemnto);
elemnto.css("border","5px solid red");
var elemntos=$(".parrafoLista").parents();
console.log(elemntos);
elemntos.css("border","10px solid blue");
//parent parent children sibilings next nesAll prev prevAll eq(indice)
console.log($("div").eq(2));
var div03=$("div").eq(2);
div03.css("border","5px pink");
