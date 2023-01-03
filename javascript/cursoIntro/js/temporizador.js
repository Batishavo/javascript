window.onload=function(){
    var temporizador;
    function temporizadorUnaSolaVEz(){
        temporizador=setTimeout(function(){
            console.log('ejecutando temporizador una vez');
        },2000);
    }
    function iniciaTemporizador(){
        temporizador=setInterval(function(){
            console.log('Ejecutando temporizador');
        },2000);
    }
    var boton=document.getElementById('boton');
    boton.addEventListener('clik',function(){
        console.log('boton pulsado');
        //temporizador();
    });
}
