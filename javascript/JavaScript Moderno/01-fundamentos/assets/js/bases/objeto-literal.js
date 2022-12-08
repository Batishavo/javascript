const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V"],
  direcion: {
    zip: "38980",
    ubicacion: "Mi canton XD",
  },
  "ultima-pelicula": "Inginity war",
};

console.log({personaje});
console.log("nombre: ", personaje.nombre);
console.log("nombre: ", personaje["nombre"]);
console.log("edad: ", personaje["edad"]);
console.log("Coors: ", personaje["coords"]["lat"]);

console.log("No.. Trajes: ", personaje["trajes"].length);
console.log("Ultimo Traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";

console.log("Vivo", personaje[x]);
console.log("Ultima película", personaje["ultima-pelicula"]);

//Mas detalls

delete personaje.edad;

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;


Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direcion.ubicacion='costa rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});