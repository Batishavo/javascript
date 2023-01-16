class Persona{

    static _conteo = 0;
    static get conteo () {
        return Persona._conteo + ' instancias';
    }
    static mensaje () {
        console.log(this.nombre); // undefined
        console.log('Hola a todos , soy un metodo estatico');
    }
    nombre = '' ;
    codigo = '' ;
    frase = ''; 
    coida = "";

    constructor(nombre='sin nombre', codigo='sin codigo', frase='sin frase'){
        // console.log('Hola!');
        this.codigo = codigo;
        this.frase = frase;
        this.nombre = nombre;
        Persona._conteo ++;
    }
    //Losa sets y gets no pueden tener el mismo nombre que la propiedad
    set setComidadFavorita(comida){
        this.comida=comida.toUpperCase();
    }
    get getComidadFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

class Heroe extends Persona  {
    
    clan ="sin clan";
    constructor(nombre, codigo,frase){
        super(nombre, codigo,frase);
        this.clan = 'The avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter parker','spiderman','soy tu amigable vecino spiderman' );
// const ironman = new Persona('Tony Stark','Ironman','yo soy Ironman' );
console.log(spiderman);
spiderman.quienSoy()