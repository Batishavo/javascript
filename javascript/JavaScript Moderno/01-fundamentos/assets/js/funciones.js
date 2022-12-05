function saludar(nombre ){
    // console.log(arguments);
    // console.log("hola "+nombre);
    return 10;
    console.log("soy un código que está despues del return");
}

const saludar2 = function(nombre){
    console.log("Hola "+nombre);
}

const sludarFlecha = (nombre) => {
    console.log("Hoa "+ nombre);
}

const retornoDeSaludar=saludar("litos",40,true,"costa rica");
console.log({retornoDeSaludar});
saludar2("fer");
sludarFlecha("flecha");

function sumar(a,b){
    return a + b;
}
const sumar2=(a,b) => {
    return a+b;
}

const sumar3=(a,b) => a +b;

function getAleatorio () {
    return Math.random();
}

//En una funcion de flecha

const getAleatorio2 =()=>Math.random();

console.log(sumar(1,2));
console.log(getAleatorio());
console.log(getAleatorio2());