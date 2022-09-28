class coche{
    //constructor
    constructor(marca,motor,color){
        this.marca = marca;
        this._color = color;
        this.motor = motor;
        this._velocidad=0;
    }
    get velocidad(){
        return this._velocidad;
    }
    set cambiaColor(color){
        this._color = color;
    }
    get dameDatos(){
        return `El coche ${this.marca} es de color ${this._color}` ;
    }
}
const miCoche = new coche('seat','gasolina','rojo');
console.log(miCoche.dameDatos);