//añadir una clase
$('h1').addClass('amarrillo');
//eliminar clases
$('p').removeClass('parrafo');
//intercambio, añade o borrar 
$('button').click(function(){
    $('p').toggleClass('parrafo');
    console.log($('p').css('font-size'));
    console.log($('p').css('margin'));
    $('div').innerWidth(340);
    $('div').outerHeight(340);
});
// obtener valor propiedad
console.log($('p').css('font-size'));
console.log($('p').css('margin'));
//asigna o cambia valor
$('p').css({'background-color':'pink','font-size':'1.3em'});
//Cambiar dimensiones
$('div').width(120);
$('div').height(140);
//innerWith outerWith inerHeight outerHeight
