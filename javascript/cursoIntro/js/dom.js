
    var boton=document.getElementById('boton');
    //por nombre de clases
    var parrafos=document.getElementsByClassName('parrafo');
    console.log(parrafos);
    parrafos[1].style.backgroundColor='yellow';
    //por identificador
    var titulo=document.getElementById('titulo');
    titulo.innerHTML='Titulo desde script';
    var boton=document.getElementById('boton');
    boton.addEventListener('click', function(){
        console.log('has pulsado el boton');
    });
    //por etiqueta
    var items=document.getElementsByTagName('li');
    console.log(items);
    items[1].innerHTML="item 2 desde codigo";
    
