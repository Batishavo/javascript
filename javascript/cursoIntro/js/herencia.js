class Persona{

    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    getNombre(){
        return this._nombre;
    }
    getEdad(){
        return this._edad;
    }
}
class Trabajador extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
        this.trabaja="Si";
    }
    info(){
        return `Me llamo ${this._nombre}`;
    }
}