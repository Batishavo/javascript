
class Singleton {

    static instancia; // undefined
    nombre ='';

    constructor(nombre = ''){
        
        // const a = undefined;
        // console.log(a);//undefined
        // console.log(!a);//true
        // console.log(!!a);//false

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;

        //return this;
    }
}

const instacia1 = new Singleton('blits');
const instacia2 = new Singleton('Hero');
const instacia3 = new Singleton('Mario');

console.log(`Nombre en la instancia1 es: ${instacia1.nombre}`)
console.log(`Nombre en la instancia2 es: ${instacia2.nombre}`)
console.log(`Nombre en la instancia3 es: ${instacia3.nombre}`)