let personaje = {

    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark I','Mark V'],
    direcion:{
        zip:'38980',
        ubicacion:'Mi canton XD'
    },
    'ultima-pelicula':'Inginity war',
};

console.log({personaje})
console.log('nombre: ', personaje.nombre)
console.log('nombre: ', personaje['nombre']);
console.log('edad: ', personaje['edad']);
console.log('Coors: ', personaje['coords']['lat']);

console.log('No.. Trajes: ', personaje['trajes'].length);
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length-1]);

const x='vivo';

console.log('Vivo',personaje[x]);
console.log('Ultima película',personaje['ultima-pelicula']);
