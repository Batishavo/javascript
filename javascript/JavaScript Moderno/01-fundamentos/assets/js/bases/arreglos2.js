let juegos = ['Zelda','mario','gta','tnmt'];
console.log('Lago:',juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1]

console.log({primero , ultimo});

juegos.forEach( ( elemento , indice , arr) => {
    console.log({elemento,indice,arr})
});

let nuevaloggitud = juegos.push('F-zero');
console.log({nuevaloggitud,juegos});

nuevaloggitud = juegos.unshift('Fire emblem');
console.log({nuevaloggitud,juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

let pos = 1;


console.log(juegos);
let juegosBorrados = juegos.splice(pos , 1);
console.log({juegosBorrados,juegos});

let metroidIndex = juegos.indexOf('Zelda');//CaseSensitive
console.log(metroidIndex);