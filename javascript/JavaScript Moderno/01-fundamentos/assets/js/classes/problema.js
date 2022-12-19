const fer = {
    nombre: 'fernando',
    edad:30,
    imprimier(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}

const pedro = {
    nombre: 'pedro',
    edad:30,
    imprimier(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}


function Persona(nombre,edad){
    console.log('Se ejecuto esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir=function(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
    
}
//Proto:De quie ha sido el objeto o de quien ha sido su erencia
const maria = new Persona('Maria',18);
const melissa = new Persona('Melisa',22);
maria.imprimir();
melissa.imprimir();