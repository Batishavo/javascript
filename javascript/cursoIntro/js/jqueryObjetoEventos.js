//pageX page Y type wich data target preventDEfault() stopPropagation()
//evitar que se abra el elace 
$("a").click(function(event) {
    console.log(event.pageX);
    console.log(event.pageY);
    console.log(event.target);
    event.preventDefault();
    console.log("No se abrira el enlace");
});
//indicar tecla pulsada 
$("input").keydown(function (event) { 
    console.log("Has pulsadado"+event.which);
});
//ejecutar evento sin que lo realise el usuario 
$("#boton").click(function (event){
    alert("Has pulsado el boton!!");
});
$("#boton").trigger("click");
